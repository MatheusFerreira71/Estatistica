var imported = document.createElement('script');
    imported.src = 'js/probabilidade.js';
    document.head.appendChild(imported); 


function Exibir_Cor_Reg(){
    let saphe = `<div class="row">
        <div class="col-md-12 bordas_coluna px-3 py-3">
            <div class="form-group was-validated">
                <label for="nomeVariavel">Nome da variavel independente:</label>
                <input type="text" class="form-control dom" id="nomeX" placeholder="Nome da variável independente (opcional)">

            </div>
            <div class="form-group was-validated ">
                <label for="nomeVariavel ">Nome da variavel dependente:</label>
                <input type="text " class="form-control dom" id="nomeY" placeholder="Nome da variável dependente (opcional)" >

            </div>
            <div class="form-group was-validated">
                <label for="nomeVariavel">Valores de (X):</label>
                <input type="text" class="form-control dom" id="valoresX" placeholder="Dados (X)" required >
                <div class="invalid-feedback">Insira os dados separados por ;</div>
                <div class="valid-feedback">Muito bem!</div>
            </div>
            <div class="form-group was-validated">
                <label for="nomeVariavel">Valores de (Y):</label>
                <input type="text" class="form-control dom" id="valoresY" placeholder="Dados (Y)" required>
                <div class="invalid-feedback">Insira os dados separados por ;</div>
                <div class="valid-feedback">Muito bem!</div>
            </div>
            <button onclick="Gerente_Correlacao([])" id="ativar" type="button" style="width: 100%" class="btn btn-info">Calcular</button>

        </div>
        <div id="ocultar" class="col-md-0 bordas_coluna ">
            <div id="container" class="d-none"></div>
        </div>`
    let div_add = document.querySelector('#index');
    div_add.innerHTML = saphe;   
}

function Gera_Grafico(dados){
    
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
function Gerente_Correlacao(dados){

    let validacao = Validacao(dados, 'correlacao')
    
    if(validacao != true){ 
        AlertUsu(validacao);
        return false
    }else{
        let resultado = Calc_Correlacao(dados);
        alert(resultado)
    }
 
}
function Calc_Correlacao(dados){
    if(dados.length == 0){
        dados = PegarDados('.dom');
    };

    let independentes = dados[2].split(';');
    let dependentes = dados[3].split(';');
    let n_obser = dependentes.length;
    alert(Somatorio(independentes,' * ', dependentes))

    let part_sup = n_obser * Somatorio(independentes,' * ', dependentes) - Somatorio(dependentes,'') * Somatorio(independentes,'');

    let part_inf1 = n_obser * (n_obser * Somatorio(independentes, ' ** 2') - (Somatorio(independentes, '') ** 2)); 

    let part_inf2 = (n_obser * Somatorio(dependentes, ' ** 2') - (Somatorio(dependentes, '')) **2 );
    alert(part_inf1 * part_inf2)
    let coef_corre = part_sup / (part_inf1 * part_inf2)

    alert(coef_corre);
    
}
function Somatorio(valores, operacao, opcional){
        let valor;
        let soma = 0;
        // lindo consegue ler texto como um expressao
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