// global
var imported = document.createElement('script');
    imported.src = 'js/probabilidade.js';
    document.head.appendChild(imported); 
var save_dados = {
    dados:{},
    result: {}
}
var dados_last_add = {x:[],y:[]};

function Exibir_Cor_Reg(){
    let saphe = `<div class="row">
                    <div class="col-md-12 bordas_coluna px-3 py-3 entrada">
                        <div class="form-group was-validated d-none">
                            <label for="nomeVariavel">Nome da variavel independente:</label>
                            <input type="text" class="form-control dom" id="nomeVariavel2" placeholder="Nome da variável independente (opcional)">

                        </div>
                        <div class="form-group was-validated d-none">
                            <label for="nomeVariavel1 ">Nome da variavel dependente:</label>
                            <input type="text " class="form-control dom" id="nomeVariavel1" placeholder="Nome da variável dependente (opcional)">

                        </div>
                        <div class="form-group was-validated">
                            <label for="nomeVariavel2">Valores de (X):</label>
                            <input type="text" class="form-control dom" id="entrarDados2" placeholder="Dados (X)" required pattern="((?:\-){0,1}[0-9]*((\.|\,){1}[0-9]{1,4}|(\.|\,){0}))*(?:\;|$)">
                            <div class="invalid-feedback">Insira os dados separados por ; (no maximo 3 casas decimais) </div>
                            <div class="valid-feedback">Muito bem!</div>
                        </div>
                        <div class="form-group was-validated">
                            <label for="nomeVariavel1">Valores de (Y):</label>
                            <input type="text" class="form-control dom" id="entrarDados1" placeholder="Dados (Y)" required pattern="((?:\-){0,1}[0-9]*((\.|\,){1}[0-9]{1,4}|(\.|\,){0}))*(?:\;|$)">
                            <div class="invalid-feedback">Insira os dados separados por ; (no maximo 3 casas decimais) </div>
                            <div class="valid-feedback">Muito bem!</div>
                        </div>
                        <div class="form-inline ">
                            <label for="arquivo1" class="sr-only ">Importar uma Planilha</label>
                            <input type="file" class="form-control-file dim" id="arquivo1">

                            <label for="tipoArquivo1" class="my-1 mr-2">Tipo de arquivo</label>
                            <select onchange="tipoArquivo1();" class="form-control my-1 mr-sm-2 custom-select" id="tipoArquivo1">
                                            <option selected>.xlsx</option>
                                            <option>.csv</option>
                                        </select>
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
                                <a href='#new_resul' onclick="Modal()" class="">Resultados Salvos</a>
                        </h1> \
                        <div class="form-group was-validated ">
                            <label for="nomeVariavel2">Adicionar variaveis independentes (X):</label>
                            <input type="text" class="form-control new" id="entrarDados2" placeholder="Dados (X)" pattern="((?:\-){0,1}[0-9]*((\.|\,){1}[0-9]{1,4}|(\.|\,){0}))*(?:\;|$)" >
                            <div class="invalid-feedback">Insira os dados separados por ; (no maximo 3 casas decimais) </div>
                            <div class="valid-feedback">Muito bem!</div>
                        </div>
                        <div class="form-group was-validated ">
                            <label for="nomeVariavel1">Adicionar variaveis independentes (Y):</label>
                            <input type="text" class="form-control new"  id="entrarDados1" placeholder="Dados (Y)" pattern="((?:\-){0,1}[0-9]*((\.|\,){1}[0-9]{1,4}|(\.|\,){0}))*(?:\;|$)">
                            <div class="invalid-feedback">Insira os dados separados por ; (no maximo 3 casas decimais)</div>
                            <div class="valid-feedback">Muito bem!</div>
                        </div>
                        <button onclick="Gerente_Correlacao('add')" id="calc" type="button" style="width: 100%" class="btn btn-info">Calcular</button>
    
                    </div>
                    <div id="grafico" class="col-md-0 border border-info rounded  mt-2 align-self-center d-none w-100 " style="height: 430px; ">
    
                    </div>
                    <div id='myModal' class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Resultados Salvos</h5>
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
    tipoArquivo1();
}

// CorrelaÇão
function Modal(){
    add_div = document.querySelector("#modal-body");
    add_div.innerHTML = ''
    console.log(add_div)
    for(i = 0; i < dados_last_add['x'].length;i++){
        add_div.innerHTML += `<div class='col-md-5 ml-auto display-5 border border-info rounded mt-2 mb-3'> X =${dados_last_add['x'][i]}</div> <div class='col-md-5 display-6 border border-info rounded ml-auto mt-2 mb-3 mr-1' > Y =${dados_last_add['x'][i]}</div>`
    }
    $('#myModal').modal('show')
    
}
function Gerente_Correlacao(dados) {

    let validacao = Validacao(dados, 'correlacao')
    if(dados.length == 0 || dados == 'add'){
        dados = PegarDados('.dom');
    };  
    if (validacao != true) {
        if(validacao == 0 || validacao == 2){
            validacao = validacao == 2 ? 1 : 0;
            let coordenada_add = PegarDados('.new');
            coordenada_add = coordenada_add[validacao].split(';')
            let coordenada_falta = Equacao_Reta(coordenada_add, validacao)
            let oposto = validacao == 0 ? 3 : 2
                validacao = validacao + 2
            $('#new_resul').removeClass('d-none');
            
           
            for(i = 0; i < coordenada_add.length;i++){
                save_dados['dados'][validacao] += ';'+parseFloat(coordenada_add[i]).toFixed(3);
                save_dados['dados'][oposto] += `;${coordenada_falta[i].toFixed(3)}`
                dados_last_add['x'].push(parseFloat(coordenada_add[i]).toFixed(3))
                dados_last_add['y'].push(parseFloat(coordenada_falta[i].toFixed(3)))
            }
            console.log(save_dados)
            Gera_Grafico(save_dados['dados'])
        }else{
            AlertUsu(validacao);
            return false
        }
        
    }else{
        dados_last_add = {x:[],y:[]};
        $('#new_resul').addClass('d-none');
        let resultado = Calc_Correlacao_regressao(dados);
        console.log(resultado)
        Libera_Resul()
        let display = document.querySelectorAll('.P')
        save_dados['dados'] = dados
        save_dados['result']['corre'] = resultado[0];
        save_dados['result']['regre'] = resultado[1];
        console.log(save_dados)
        display[0].innerHTML = 'Correlação : '+resultado[0].toFixed(3);
        display[1].innerHTML = 'Regressão :<br> Y = '+resultado[1]['a'].toFixed(3)+'X + '+resultado[1]['b'].toFixed(3)
        Gera_Grafico(dados)
    }
    
}
function Libera_Resul(){
       
    $('#grafico').removeClass('col-md-0');
    $('#grafico').addClass('col-md-7');
    $('#grafico').removeClass('d-none');
    $('#resultados').removeClass('col-md-0');
    $('#resultados').addClass('col-md-5');
    $('#resultados').removeClass('d-none');;
    $('#resultados').addClass('animated bounceInUp delay-0s');
    $('#grafico').addClass('animated bounceInUp delay-0s');
    $('#calc').text('Resetar o Historico');
    $('.dom').attr('disabled', true);
    $('.dim').attr('disabled', true);

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
        b = (Somatorio(dependentes,'')/n_obser) - a * (Somatorio(independentes,'')/n_obser)
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
                valor = geval('('+valores[i]+')' + operacao);
            }
            soma += valor
        }
        return soma

}
function Equacao_Reta(coordenada, xory){
    let val = []
    for(let i = 0; i < coordenada.length; i++)
    if(xory == 0){
        val.push(save_dados['result']['regre']['a'] * parseFloat(coordenada[i]) + save_dados['result']['regre']['b'])
    }else{
        val.push(((save_dados['result']['regre']['b'] - parseFloat(coordenada[i])) / -save_dados['result']['regre']['a']))
    }
    return val
}

function Gera_Grafico(dados) {
    let div_add = document.querySelector('#grafico');
    div_add.innerHTML = '';   
    // trata e organiza os dados para serem usudos no grafico
    let coordenadas = [['X','Y']]
    let coordenadas_reta = {x: [], y:[]}
    let x = dados[2].split(';');
    let y = dados[3].split(';');
    for(let i = 0;i < x.length;i++){
        coordenadas.push([parseFloat(x[i]),parseFloat(y[i])])
        coordenadas_reta['x'].push(parseFloat(x[i]))
        coordenadas_reta['y'].push(parseFloat(y[i]))
    }
    // era usado pra determinar os ponto da reta
    let menorx = Math.min.apply(null, coordenadas_reta['x']);
    let menorx_reta = Equacao_Reta([menorx],'0')
    let menory = coordenadas_reta['y'][coordenadas_reta['x'].indexOf(menorx)] 
    let menory_reta = Equacao_Reta([parseFloat(menory)],'1')

    let maiorx = Math.max.apply(null, coordenadas_reta['x']);
    let maiorx_reta = Equacao_Reta([maiorx],'0')
    let maiory = coordenadas_reta['y'][coordenadas_reta['x'].indexOf(maiorx)] 
    let maiory_reta = Equacao_Reta([parseFloat(maiory)],'1')
    
    //let retab = [[Math.min.apply(null, x),Math.min.apply(null, y )],[Math.max.apply(null, x),Math.max.apply(null, y )]]
    let reta = [[menory_reta[0], menorx_reta[0]],[maiory_reta[0], maiorx_reta[0]]]
    console.log(reta)
    //console.log(retab)

    // grafico
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable(coordenadas)

        var options = {
        title: 'Gráfico de dispersão com linha de regressão',
        hAxis: {title: 'Independentes (X)'},
        vAxis: {title: 'Dependentes (Y)'},
        chartArea: {width:'70%'},
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
    alert()
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

