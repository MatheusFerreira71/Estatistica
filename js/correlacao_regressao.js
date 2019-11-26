// global
var imported = document.createElement('script');
imported.src = 'js/probabilidade.js';
document.head.appendChild(imported);
var save_dados = {
    dados: {},
    result: {}
}

var dados_last_add = { x: [], y: [] };

// atualiza o grafico, se ja foi gerado, sempre q redimencionar o tamanho da pagina
$(window).resize(function () {
    if (Object.keys(save_dados['dados']).length != 0) {
        Gera_Grafico(save_dados['dados']);
    }
});

function Exibir_Cor_Reg() {
    let saphe = `<div class="row">
                    <div class="col-md-12  px-3 py-3 entrada">
                        <div class="form-group was-validated d-none">
                            <label for="nomeVariavel">Nome da variavel independente:</label>
                            <input type="text" class="form-control dom" id="nomeVariavel2" placeholder="Nome da variável independente (opcional).">

                        </div>
                        <div class="form-group was-validated d-none">
                            <label for="nomeVariavel1 ">Nome da variavel dependente:</label>
                            <input type="text " class="form-control dom" id="nomeVariavel1" placeholder="Nome da variável dependente (opcional).">

                        </div>
                        <div class="form-group was-validated">
                            <label for="nomeVariavel2">Valores de (X):</label>
                            <input type="text" class="form-control dom" id="entrarDados2" placeholder="Dados (X)" required pattern="((?:\-){0,1}[0-9]*((\.|\,){1}[0-9]{1,4}|(\.|\,){0}))*(?:\;|$)">
                            <div class="invalid-feedback">Insira os dados separados por ponto e vírgula (no máximo 3 casas decimais).</div>
                            <div class="valid-feedback">Muito bem!</div>
                        </div>
                        <div class="form-group was-validated">
                            <label for="nomeVariavel1">Valores de (Y):</label>
                            <input type="text" class="form-control dom" id="entrarDados1" placeholder="Dados (Y)" required pattern="((?:\-){0,1}[0-9]*((\.|\,){1}[0-9]{1,4}|(\.|\,){0}))*(?:\;|$)">
                            <div class="invalid-feedback">Insira os dados separados por ponto e vírgula (no máximo 3 casas decimais).</div>
                            <div class="valid-feedback">Muito bem!</div>
                        </div>
                        <div class="form-inline ">
                            <label for="arquivo" class="sr-only ">Importar uma Planilha</label>
                            <input type="file" class="form-control-file dim my-2" id="arquivo" onchange="importarArquivo()" accept=".csv">
                        </div>


                        <button onclick="Gerente_Correlacao([])" id="calc" type="button" style="width: 100%" class="btn btn-info ">Calcular</button>

                    </div>
                    <div id="resultados" class="col-md-0  mt-2 pt-2 mb-3 align-self-center d-none text-center" style="width: 100%"; >
                        <h1 class="display-6 shadow border border-info rounded P "> \
                                Probabilidade =  \
                        </h1> \
                        <h1 class="display-6 shadow border border-info rounded P"> \
                                Probabilidade =  \
                        </h1> \
                        <h1 id='new_resul'class="display-6 shadow border border-info rounded P houver d-none"> \
                                <a href='#new_resul' onclick="Modal()" class="">Visualizar Resultados</a>
                        </h1> \
                        <div class="form-group was-validated ">
                            <label for="nomeVariavel2">Adicionar variaveis independentes (X):</label>
                            <input type="text" class="form-control new" id="entrarDados2" placeholder="Dados (X)" pattern="((?:\-){0,1}[0-9]*((\.|\,){1}[0-9]{1,4}|(\.|\,){0}))*(?:\;|$)" >
                            <div class="invalid-feedback">Insira os dados separados por ponto e vírgula (no máximo 3 casas decimais).</div>
                            <div class="valid-feedback">Muito bem!</div>
                        </div>
                        <div class="form-group was-validated ">
                            <label for="nomeVariavel1">Adicionar variaveis dependentes (Y):</label>
                            <input type="text" class="form-control new"  id="entrarDados1" placeholder="Dados (Y)" pattern="((?:\-){0,1}[0-9]*((\.|\,){1}[0-9]{1,4}|(\.|\,){0}))*(?:\;|$)">
                            <div class="invalid-feedback">Insira os dados separados por ponto e vírgula (no máximo 3 casas decimais).</div>
                            <div class="valid-feedback">Muito bem!</div>
                        </div>
                        <button onclick="Gerente_Correlacao('add')" id="calc" type="button" style="width: 100%" class="btn btn-info">Calcular</button>
    
                    </div>
                    <div class="clearfix"></div>
                    <div id="grafico" class="col-md-0 border border-info rounded  mt-2 align-self-center d-none w-100 " style="">
    
                    </div>
                    <div id='myModal' class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header text-center">
                                <h5 class="modal-title" id="exampleModalLabel">Resultados</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div id='modal-body'class=" row mt-3 mb-3 pr-5 flex-row card-header overflow-auto text-center">
                            </div>
                        </div>
                        </div>
                    </div>
                </div>`
    let div_add = document.querySelector('#index');
    div_add.innerHTML = saphe;
}

// CorrelaÇão
function Modal() {
    add_div = document.querySelector("#modal-body");
    add_div.innerHTML = '';
    add_div.innerHTML += `<div class='col-md-10  
    ml-5 font border border-info rounded mt-2 mb-1'> 
    Y = ${save_dados['result']['regre']['a'].toFixed(4)}X + ${save_dados['result']['regre']['b'].toFixed(4)} `
    for (i = 0; i < dados_last_add['x'].length; i++) {
        add_div.innerHTML += `<div class='col-md-2 ml-auto display-5 border border-info rounded mt-2 mb-3'>
         ${i + 1}º 
         </div> 
         <div class='col-md-4 ml-auto display-5 border border-info rounded mt-2 mb-3'>
          X = ${Number(dados_last_add['x'][i])}
          </div> 
          <div class='col-md-4 display-5 border border-info rounded ml-auto mt-2 mb-3 mr-1' > 
          Y = ${Number(dados_last_add['y'][i])}
          </div>`;
    }
    $('#myModal').modal('show');

}

function Gerente_Correlacao(dados) {

    let validacao = Validacao(dados, 'correlacao')
    if (dados.length == 0 || dados == 'add') {
        dados = PegarDados('.dom');
    };
    if (validacao != true) {
        if (validacao == 0 || validacao == 2) {
            validacao = validacao == 2 ? 1 : 0;
            let coordenada_add = PegarDados('.new');
            coordenada_add = coordenada_add[validacao].split(';')
            let coordenada_falta = Equacao_Reta(coordenada_add, validacao)
            let oposto = validacao == 0 ? 3 : 2
            validacao = validacao + 2
            $('#new_resul').removeClass('d-none');


            for (i = 0; i < coordenada_add.length; i++) {
                save_dados['dados'][validacao] += ';' + parseFloat(coordenada_add[i]).toFixed(4);
                save_dados['dados'][oposto] += `;${coordenada_falta[i].toFixed(4)}`
                dados_last_add[validacao == 3 ? 'y': 'x'].push(parseFloat(coordenada_add[i]).toFixed(4))
                dados_last_add[oposto == 3 ? 'y': 'x'].push(parseFloat(coordenada_falta[i].toFixed(4)))
            }
            Gera_Grafico(save_dados['dados'])
        } else {
            AlertUsu(validacao);
            return false
        }

    } else {
        dados_last_add = { x: [], y: [] };
        $('#new_resul').addClass('d-none');
        let resultado = Calc_Correlacao_regressao(dados);
        Libera_Resul()
        let display = document.querySelectorAll('.P')
        save_dados['dados'] = dados
        save_dados['result']['corre'] = resultado[0];
        save_dados['result']['regre'] = resultado[1];
        display[0].innerHTML = 'Correlação : ' + resultado[0].toFixed(3);
        display[1].innerHTML = 'Regressão :<br> Y = ' + resultado[1]['a'].toFixed(3) + 'X + ' + resultado[1]['b'].toFixed(3);
        Gera_Grafico(dados)
    }

}

function Libera_Resul() {

    $('#grafico').removeClass('col-md-0');
    $('#grafico').addClass('col-md-7');
    $('#grafico').removeClass('d-none');
    $('#resultados').removeClass('col-md-0');
    $('#resultados').addClass('col-md-5');
    $('#resultados').removeClass('d-none');;
    $('#resultados').addClass('animated bounceInUp delay-0s');
    $('#grafico').addClass('animated bounceInUp delay-0s');
    $('#calc').text('Resetar o Histórico');
    $('.dom').attr('disabled', true);
    $('.dim').attr('disabled', true);

}

function Calc_Correlacao_regressao(dados) {

    if (dados.length == 0) {
        dados = PegarDados('.dom');
    };

    let independentes = dados[2].split(';');
    let dependentes = dados[3].split(';');
    let n_obser = dependentes.length;

    let part_sup = n_obser * Somatorio(independentes, ' * ', dependentes) - Somatorio(dependentes, '') * Somatorio(independentes, '');
    let part_inf1 = (n_obser * Somatorio(independentes, ' ** 2') - (Somatorio(independentes, '') ** 2));
    let part_inf2 = (n_obser * Somatorio(dependentes, ' ** 2') - (Somatorio(dependentes, '')) ** 2);
    let coef_corre = part_sup / Math.sqrt(part_inf1 * part_inf2)
    let regressao = Calc_Regressao();
    return [coef_corre, regressao]

    function Calc_Regressao() {
        let a, b
        a = part_sup / part_inf1;
        b = (Somatorio(dependentes, '') / n_obser) - a * (Somatorio(independentes, '') / n_obser)
        return { 'a': a, 'b': b }
    }
}

function Somatorio(valores, operacao, opcional) {
    let valor;
    let soma = 0;
    // lindo, consegue ler texto como um expressao
    var geval = eval;
    for (let i = 0; i < valores.length; i++) {
        if (operacao == '') {
            valor = parseFloat(valores[i]);

        } else if (typeof opcional === 'object') {
            valor = geval(valores[i] + operacao + opcional[i]);

        } else {
            valor = geval('(' + valores[i] + ')' + operacao);
        }
        soma += valor
    }
    return soma

}

function Equacao_Reta(coordenada, xory) {
    let val = []
    for (let i = 0; i < coordenada.length; i++)
        if (xory == 0) {
            val.push(save_dados['result']['regre']['a'] * parseFloat(coordenada[i]) + save_dados['result']['regre']['b'])
        } else {
            val.push(((save_dados['result']['regre']['b'] - parseFloat(coordenada[i])) / -save_dados['result']['regre']['a']))
        }
    return val
}

function Gera_Grafico(dados) {
    let div_add = document.querySelector('#grafico');
    div_add.innerHTML = '';
    // trata e organiza os dados para serem usudos no grafico
    let coordenadas = [['X', 'Y']]
    let coordenadas_reta = { x: [], y: [] }
    let x = dados[2].split(';');
    let y = dados[3].split(';');
    for (let i = 0; i < x.length; i++) {
        coordenadas.push([parseFloat(x[i]), parseFloat(y[i])])
        //coordenadas_reta['x'].push(parseFloat(x[i]))
        //coordenadas_reta['y'].push(parseFloat(y[i]))
    }
    // era usado pra determinar os ponto da reta
    /*let menorx = Math.min.apply(null, coordenadas_reta['x']);
    let menorx_reta = Equacao_Reta([menorx],'0')
    let menory = coordenadas_reta['y'][coordenadas_reta['x'].indexOf(menorx)] 
    let menory_reta = Equacao_Reta([parseFloat(menory)],'1')

    let maiorx = Math.max.apply(null, coordenadas_reta['x']);
    let maiorx_reta = Equacao_Reta([maiorx],'0')
    let maiory = coordenadas_reta['y'][coordenadas_reta['x'].indexOf(maiorx)] 
    let maiory_reta = Equacao_Reta([parseFloat(maiory)],'1')
    
    //let retab = [[Math.min.apply(null, x),Math.min.apply(null, y )],[Math.max.apply(null, x),Math.max.apply(null, y )]]
    let reta = [[menory_reta[0], menorx_reta[0]],[maiory_reta[0], maiorx_reta[0]]]
    //console.log(retab)
    */
    // grafico
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable(coordenadas)

        var options = {
            title: 'Gráfico de dispersão com linha de regressão',
            hAxis: { title: 'Independentes (X)' },
            vAxis: { title: 'Dependentes (Y)' },
            legend: { position: 'none', text: 'teste' },
            chartArea: { width: '80%' },
            trendlines: {
                0: {
                    type: 'linear'
                }
            }
        };

        var chartLinear = new google.visualization.ScatterChart(document.getElementById('grafico'));
        chartLinear.draw(data, options);
    }

}

/////////////// testes

function importarArquivo() {
    const file = document.getElementById('arquivo').files[0];
    const name = file.name;
    const Reader = new FileReader();

    Reader.onload = (e) => {
        const dados1 = document.getElementById('entrarDados1');
        const dados2 = document.getElementById('entrarDados2');
        const data = Reader.result.split('\n');

        dados1.value = data[1];
        dados2.value = data[0];

        // Cria o cartão de notificação e o mostra na tela. 
        document.getElementsByClassName('toast-body')[0].innerText = `O arquivo "${name}" foi importado com sucesso!`;

        $('.toast').toast({
            animation: true,
            autohide: true,
            delay: 6000
        });
        $('#notificaImport').toast('show')
    };
    Reader.readAsText(file);
}
