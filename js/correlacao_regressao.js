var imported = document.createElement('script');
imported.src = 'js/probabilidade.js';
document.head.appendChild(imported);

// function Exibir_Cor_Reg() {
//     let saphe = `
//     `
//     let div_add = document.querySelector('#index');
//     div_add.innerHTML = saphe;
// }

function Gera_Grafico(dados) {

    let nomeX = document.getElementById('nomeX').value;
    let nomeY = document.getElementById('nomeY').value;

    var chart = anychart.scatter();

    // turn on chart animation
    chart.animation(true);

    // set chart title
    chart.title('Projeção');

    chart.xScale()
        .minimum(1.5)
        .maximum(5.5)
        .ticks({
            interval: 1
        });
    chart.yScale()
        .minimum(40)
        .maximum(100)
        .ticks({
            interval: 10
        });

    chart.yAxis().title('nomeY');
    chart.xAxis()
        .title('nomeX')
        .drawFirstLabel(false)
        .drawLastLabel(false);

    chart.interactivity()
        .hoverMode('by-spot')
        .spotRadius(30);

    chart.tooltip().displayMode('union');

    // The data used in this sample can be obtained from the CDN
    // https://cdn.anychart.com/samples/scatter-charts/combination-of-line-and-marker-charts/data.js
    var marker = chart.marker(getMarkerData());
    marker.type('circle')
        .size(4);
    marker.hovered()
        .size(7)
        .fill('gold')
        .stroke(anychart.color.darken('gold'));
    marker.tooltip()
        .hAlign('start')
        .format(function() {
            return 'Waiting time: ' + this.value + ' min.\nDuration: ' + this.x + ' min.';
        });

    // The data used in this sample can be obtained from the CDN
    // https://cdn.anychart.com/samples/scatter-charts/combination-of-line-and-marker-charts/data.js
    chart.line(dados);

    // set container id for the chart
    chart.container('container');
    // initiate chart drawing
    chart.draw();

}
// CorrelaÇão
function Gerente_Correlacao(dados) {

    let validacao = Validacao(dados, 'binomial')

    if (validacao != true) {
        AlertUsu(validacao);
        return false
    } else {
        let resultado = Calc_Correlacao(dados);

    }

}

function Calc_Correlacao() {
    PegarDados()
}
/////////////// testes






function tipoArquivo2() {
    let tipoArquivo = document.getElementById('tipoArquivo2');
    if (tipoArquivo.value == ".xlsx") {
        document.getElementById('arquivo2').setAttribute('accept', '.xlsx')
    } else {
        document.getElementById('arquivo2').setAttribute('accept', '.csv')
    }
}

$('#arquivo2').change(function(e) {
        const tipoArq = document.getElementById('tipoArquivo2').value;

        if (tipoArq === '.xlsx') {
            let files = e.target.files,
                f = files[0];
            let reader = new FileReader();
            let celulas_Json = {};

            reader.onload = function(e) {
                let data = new Uint8Array(e.target.result);
                let arquivo_completo = XLSX.read(data, { type: 'array', cellText: true, cellDates: true });

                // Percorre um for por todas as planilhas e todas as colunas e linhas ocupadas na planilha.
                for (let i = 0; i < arquivo_completo.SheetNames.length; i++) {
                    todas_celulas = arquivo_completo.Sheets[arquivo_completo.SheetNames[i]]
                    celulas_Json = XLSX.utils.sheet_to_json(todas_celulas, { raw: false });
                    cabecalho = XLSX.utils.sheet_to_json(todas_celulas, { header: 1 });
                    for (let j = 0; j < cabecalho[0].length; j++) {
                        let dados = [];
                        while (cabecalho[0][j] === undefined) {
                            j++;
                        }
                        for (let linhas of celulas_Json) {
                            if (linhas[cabecalho[0][j]] != undefined) {
                                dados.push((linhas[cabecalho[0][j]]).trim());
                            }
                        }
                        // Faz o tratamento das letras para Maiúscula para não acontecer erros na hora do cálculo.
                        if (vetorNaN(dados)) {
                            for (let hs = 0; hs < dados.length; hs++) {
                                dados[hs] = dados[hs].toUpperCase();
                            } // Se não houver números na varíavel, elas serão convertidas para inteiro, já que;
                            // elas são importadas como String. 
                        } else {
                            for (let hs = 0; hs < dados.length; hs++) {
                                dados[hs] = parseInt(dados[hs])
                            }
                        }
                        vetorImport.push({ nome: cabecalho[0][j], dados: dados })
                    }
                }
                document.getElementById('nomeVariavel2').value = vetorImport[0].nome.replace(/ /gi, '_');
                document.getElementById('nomeVariavel1').value = vetorImport[1].nome.replace(/ /gi, '_');
                let str = '';
                let str2 = '';
                for (let i = 0; i < vetorImport[0].dados.length - 1; i++) {
                    str += `${vetorImport[0].dados[i]};`;

                }
                str += vetorImport[0].dados[vetorImport[0].dados.length - 1];
                document.getElementById('entrarDados2').value = str;

                for (let i = 0; i < vetorImport[1].dados.length - 1; i++) {
                    str2 += `${vetorImport[1].dados[i]};`;

                }
                str2 += vetorImport[1].dados[vetorImport[1].dados.length - 1];
                document.getElementById('entrarDados1').value = str2;
                // A cada clique no botão salvar o sistema irá mostrar na tela a próxima variável para terminar de;
                // ser cadastrada. Para isso é usado a função importando();
                // document.getElementById('ativar').setAttribute('onclick', 'importando2(vetorImport); ativarBotaoInserir();');

                // Cria o cartão de notificação e o mostra na tela. 
                let importado = document.getElementById('arquivo2').files[0].name;
                document.getElementsByClassName('toast-body')[0].innerText = `O arquivo "${importado}" foi importado com sucesso!`;

                $('.toast').toast({
                    animation: true,
                    autohide: true,
                    delay: 6000
                });
                $('#notificaImport').toast('show')
            };
            reader.readAsArrayBuffer(f);
        } else {
            const file = document.getElementById('arquivo2').files[0];
            let name = document.getElementById('arquivo2').files[0].name.replace(/ /gi, '_');
            name = name.split('.');
            const Reader = new FileReader();

            Reader.onload = (e) => {
                const dados = document.getElementById('entrarDados2');
                const nome = document.getElementById('nomeVariavel2');
                dados.value = Reader.result;
                nome.value = name[0];

                // Cria o cartão de notificação e o mostra na tela. 
                document.getElementsByClassName('toast-body')[0].innerText = `O arquivo "${name[0]}.csv" foi importado com sucesso!`;

                $('.toast').toast({
                    animation: true,
                    autohide: true,
                    delay: 6000
                });
                $('#notificaImport').toast('show')
            };
            Reader.readAsText(file);
        }

    })
    ////////////////////////////// Y


function tipoArquivo1() {
    let tipoArquivo = document.getElementById('tipoArquivo1');
    if (tipoArquivo.value == ".xlsx") {
        document.getElementById('arquivo1').setAttribute('accept', '.xlsx')
    } else {
        document.getElementById('arquivo1').setAttribute('accept', '.csv')
    }
}

$('#arquivo1').change(function(e) {
    const tipoArq = document.getElementById('tipoArquivo1').value;

    if (tipoArq === '.xlsx') {
        let files = e.target.files,
            f = files[0];
        let reader = new FileReader();
        let celulas_Json = {};

        reader.onload = function(e) {
            let data = new Uint8Array(e.target.result);
            let arquivo_completo = XLSX.read(data, { type: 'array', cellText: true, cellDates: true });

            // Percorre um for por todas as planilhas e todas as colunas e linhas ocupadas na planilha.
            for (let i = 0; i < arquivo_completo.SheetNames.length; i++) {
                todas_celulas = arquivo_completo.Sheets[arquivo_completo.SheetNames[i]]
                celulas_Json = XLSX.utils.sheet_to_json(todas_celulas, { raw: false });
                cabecalho = XLSX.utils.sheet_to_json(todas_celulas, { header: 1 });
                for (let j = 0; j < cabecalho[0].length; j++) {
                    let dados = [];
                    while (cabecalho[0][j] === undefined) {
                        j++;
                    }
                    for (let linhas of celulas_Json) {
                        if (linhas[cabecalho[0][j]] != undefined) {
                            dados.push((linhas[cabecalho[0][j]]).trim());
                        }
                    }
                    // Faz o tratamento das letras para Maiúscula para não acontecer erros na hora do cálculo.
                    if (vetorNaN(dados)) {
                        for (let hs = 0; hs < dados.length; hs++) {
                            dados[hs] = dados[hs].toUpperCase();
                        } // Se não houver números na varíavel, elas serão convertidas para inteiro, já que;
                        // elas são importadas como String. 
                    } else {
                        for (let hs = 0; hs < dados.length; hs++) {
                            dados[hs] = parseInt(dados[hs])
                        }
                    }
                    vetorImport.push({ nome: cabecalho[0][j], dados: dados })
                }
            }
            document.getElementById('nomeVariavel2').value = vetorImport[0].nome.replace(/ /gi, '_');
            document.getElementById('nomeVariavel1').value = vetorImport[1].nome.replace(/ /gi, '_');
            let str = '';
            let str2 = '';
            for (let i = 0; i < vetorImport[0].dados.length - 1; i++) {
                str += `${vetorImport[0].dados[i]};`;

            }
            str += vetorImport[0].dados[vetorImport[0].dados.length - 1];
            document.getElementById('entrarDados2').value = str;

            for (let i = 0; i < vetorImport[1].dados.length - 1; i++) {
                str2 += `${vetorImport[1].dados[i]};`;

            }
            str2 += vetorImport[1].dados[vetorImport[1].dados.length - 1];
            document.getElementById('entrarDados1').value = str2;

            // A cada clique no botão salvar o sistema irá mostrar na tela a próxima variável para terminar de;
            // ser cadastrada. Para isso é usado a função importando();
            // document.getElementById('ativar').setAttribute('onclick', 'importando2(vetorImport); ativarBotaoInserir();');

            // Cria o cartão de notificação e o mostra na tela. 
            let importado = document.getElementById('arquivo1').files[0].name;
            document.getElementsByClassName('toast-body')[0].innerText = `O arquivo "${importado}" foi importado com sucesso!`;

            $('.toast').toast({
                animation: true,
                autohide: true,
                delay: 6000
            });
            $('#notificaImport').toast('show')
        };
        reader.readAsArrayBuffer(f);
    } else {
        const file = document.getElementById('arquivo1').files[0];
        let name = document.getElementById('arquivo1').files[0].name.replace(/ /gi, '_');
        name = name.split('.');
        const Reader = new FileReader();

        Reader.onload = (e) => {
            const dados = document.getElementById('entrarDados1');
            const nome = document.getElementById('nomeVariavel1');
            dados.value = Reader.result;
            nome.value = name[0];

            // Cria o cartão de notificação e o mostra na tela. 
            document.getElementsByClassName('toast-body')[0].innerText = `O arquivo "${name[0]}.csv" foi importado com sucesso!`;

            $('.toast').toast({
                animation: true,
                autohide: true,
                delay: 6000
            });
            $('#notificaImport').toast('show')
        };
        Reader.readAsText(file);
    }

})