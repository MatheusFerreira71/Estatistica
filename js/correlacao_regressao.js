var imported = document.createElement('script');
    imported.src = 'js/probabilidade.js';
    document.head.appendChild(imported); 


function Exibir_Cor_Reg(){
    let saphe = `<div class="row">
                    <div class="col-md-12 bordas_coluna px-3 py-3 entrada">
                        <div class="form-group was-validated">
                            <label for="nomeVariavel">Nome da variavel independente:</label>
                            <input type="text" class="form-control dom" id="nomeVariavel2" placeholder="Nome da variável independente (opcional)">

                        </div>
                        <div class="form-group was-validated ">
                            <label for="nomeVariavel1 ">Nome da variavel dependente:</label>
                            <input type="text " class="form-control dom" id="nomeVariavel1" placeholder="Nome da variável dependente (opcional)">

                        </div>
                        <div class="form-group was-validated">
                            <label for="nomeVariavel2">Valores de (X):</label>
                            <input type="text" class="form-control dom" id="entrarDados2" placeholder="Dados (X)" required>
                            <div class="invalid-feedback">Insira os dados separados por ;</div>
                            <div class="valid-feedback">Muito bem!</div>
                        </div>
                        <div class="form-group was-validated">
                            <label for="nomeVariavel1">Valores de (Y):</label>
                            <input type="text" class="form-control dom" id="entrarDados1" placeholder="Dados (Y)" required>
                            <div class="invalid-feedback">Insira os dados separados por ;</div>
                            <div class="valid-feedback">Muito bem!</div>
                        </div>
                        <div class="form-inline">
                            <label for="arquivo1" class="sr-only">Importar uma Planilha</label>
                            <input type="file" class="form-control-file" id="arquivo1">

                            <label for="tipoArquivo1" class="my-1 mr-2">Tipo de arquivo</label>
                            <select onchange="tipoArquivo1();" class="form-control my-1 mr-sm-2 custom-select" id="tipoArquivo1">
                                            <option selected>.xlsx</option>
                                            <option>.csv</option>
                                        </select>
                        </div>


                        <button onclick="Gerente_Correlacao([])" id="calc" type="button" style="width: 100%" class="btn btn-info">Calcular</button>

                    </div>
                    <div id="resultados" class="col-md-0 bordas_coluna d-none ">
                       
                    </div>

                </div>`
    let div_add = document.querySelector('#index');
    div_add.innerHTML = saphe;   
    tipoArquivo1();

}
imported.src = 'js/probabilidade.js';
document.head.appendChild(imported);


function Gera_Grafico(dados) {
    
    Highcharts.chart('resultados', {
        xAxis: {
          min: -0.5,
          max: 5.5
        },
        yAxis: {
          min: 0
        },
        title: {
          text: 'Gráfico de dispersão com linha de regressão'
        },
        series: [{
          type: 'line',
          name: 'Regression Line',
          data: [[0, 1.11], [5, 4.51]],
          marker: {
            enabled: false
          },
          states: {
            hover: {
              lineWidth: 0
            }
          },
          enableMouseTracking: false
        }, {
          type: 'scatter',
          name: 'Observations',
          data: [[1, 1.5],[ 2.8, 3.5], [3.9, 4.2]],
          marker: {
            radius: 4
          }
        }]
      });
    
}
// CorrelaÇão

function Gerente_Correlacao(dados) {
    let validacao = Validacao(dados, 'correlacao')

    if (validacao != true) {
        AlertUsu(validacao);
        return false
    }else{
        let resultado = Calc_Correlacao_regressao(dados);
        console.log(resultado)
        Libera_Resul_bi()
    }
    
}

function Calc_Correlacao_regressao(dados){
    
    if(dados.length == 0){
        dados = PegarDados('.dom');
    };  

    console.log(dados)
    let independentes = dados[2].split(';');
    let dependentes = dados[3].split(';');
    let n_obser = dependentes.length;
    
    let part_sup = n_obser * Somatorio(independentes,' * ', dependentes) - Somatorio(dependentes,'') * Somatorio(independentes,'');
    let part_inf1 = (n_obser * Somatorio(independentes, ' ** 2') - (Somatorio(independentes, '') ** 2)); 
    let part_inf2 = (n_obser * Somatorio(dependentes, ' ** 2') - (Somatorio(dependentes, '')) **2 );
    let coef_corre = part_sup / Math.sqrt(part_inf1 * part_inf2)
    let regressao = Calc_Regressao()
    return [coef_corre, regressao]  

    function Calc_Regressao(){
        let a, b 
        
        a = part_sup / part_inf1;
        b = (Somatorio(dependentes,'')/6) - a * (Somatorio(independentes,'')/6)
        return {'a':a,'b':b} 
    }
}

function Somatorio(valores, operacao, opcional){
        let valor;
        let soma = 0;
        // lindo, consegue ler texto como um expressao
        var geval = eval;
        for(let i = 0; i < valores.length; i++){
            if(operacao == ''){
                valor = parseFloat(valores[i]);
                
            }else if(typeof opcional === 'object'){
                valor = geval(valores[i] + operacao + opcional[i]);
                
            }else{
                valor = geval(valores[i] + operacao);
            }

            soma += valor
        }
        return soma

}


/////////////// testes

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

