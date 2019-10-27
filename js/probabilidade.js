let resultados_salvos = {
    binomial: {},
    normal:{},
    uniforme:{}
}

function Distribuicao(name_Btn){
            
    $('.btn').removeClass('active')
    $('#'+name_Btn).addClass('active')
   

    this.Uniforme = function(){
        return '<div class="container "> \
                            <div class="row"> \
                                <div class="col-md-6 px-3 py-3 bordas_coluna">\
                                    <div class="form-group"> \
                                        <label for="exampleInputEmail1">Ponto Máximo</label> \
                                        <input type="email" class="form-control" id="exampleInputEmail1"  \
                                            aria-describedby="emailHelp" placeholder="Digite aqui seu pnto Máximo">  \
                                    </div> \
                                    <div class="form-group"> \
                                        <label for="exampleInputPassword1">Ponto Mínimo</label> \
                                        <input type="password" class="form-control" id="exampleInputPassword1" \
                                            placeholder="Digite aqui seu ponto Mínimo"> \
                                    </div> \
                                    <div class="form-group"> \
                                        <div class="o-label--radio-holder"> \
                                            <label for="exampleInputEmail1">Intervalo de Análise</label> \
                                            <div class="o-label--radio"> \
                                                <input type="radio" id="nominal" name="type" class="o-label-radio" \
                                                    checked="checked"> \
                                                <label for="nominal" class="o-label-title">Maior Que </label> \
                                            </div> \
                                            <div class="o-label--radio"> \
                                                <input type="radio" id="ordinal" name="type" class="o-label-radio"> \
                                                <label for="ordinal" class="o-label-title">Entre</label> \
                                            </div> \
                                            <div class="o-label--radio"> \
                                                <input type="radio" id="descritiva" name="type" class="o-label-radio"> \
                                                <label for="descritiva" class="o-label-title">Menor Que</label> \
                                            </div> \
                                        </div> \
                                    </div> \
                                    <!-- <button type="submit" class="btn btn-primary">Enviar</button> --> \
                                </div> \
                                \
                                <div class="col-md-6 px-3 py-3"> \
                                    <div class="form-group was-validated"> \
                                        <label for="entrarDados">Inserir Dados</label> \
                                        <textarea class="form-control" id="entrarDados" rows="3" \
                                            placeholder="Inserir os dados separados por ; - 12; 323; 12; 34" required \
                                            onchange="ativarBotaoInserir()"> \
                                            </textarea> \
                                        <div class="invalid-feedback">Insira os dados.</div> \
                                        <div class="valid-feedback">Muito bem!</div> \
                                    </div> \
                                    <div class="form-inline" style="margin-top: 30px;"> \
                                        <label for="arquivo" class="sr-only">Importar uma Planilha</label> \
                                        <input type="file" class="form-control-file" id="arquivo"> \
                                        \
                                        <label for="tipoArquivo" class="my-1 mr-2">Tipo de arquivo</label> \
                                        <select onchange="tipoArquivo();" class="form-control my-1 mr-sm-2 custom-select" \
                                            id="tipoArquivo"> \
                                            <option selected>.xlsx</option> \
                                            <option>.csv</option> \
                                        </select> \
                                    </div> \
                                    <button type="button" class="btn btn-primary" style="width: 100%; margin-top: 30px;" \
                                        onclick="adicionarVariavel(tabelas); ativarBotaoVerificar(); ativarBotaoInserir();" \
                                        id="addVar">Adicionar Variável</button> \
                                </div> \
                            </div> \
                            \
                        </div> \
                    </div> ';  
    }
    this.Normal = function(){
        return ''
    }

    this.BinomialA = function(){
        binomial= 'binomial'
        return ' \
            <div class="container"> \
                <div class="row"> \
                    <div class="col-md-12 px-3 py-3 bordas_coluna d-flex align-items-center flex-column  entrada"> \
                            \
                        <div class="form-group" style="width: 75%;"> \
                            <label for="exampleInputEmail1">Amostra</label> \
                            <input type="number" class="form-control dom" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite aqui a Amostra (N)" "> \
                        </div> \
                        <div class="form-group" style="width: 75%;"> \
                            <label for="exampleInputPassword1">Sucesso</label> \
                            <input type="number" class="form-control dom" id="exampleInputPassword1" placeholder="Digite aqui a chance de Sucesso (P)" "> \
                        </div> \
                        <div class="form-group" style="width: 75%;"> \
                            <label for="exampleInputEmail1">Fracasso</label> \
                            <input type="number" class="form-control dom" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite aqui a chance de Fracasso (Q)" "> \
                            \
                        </div> \
                        <div class="form-group" style="width: 75%;"> \
                            <label for="exampleInputPassword1">Evento</label> \
                            <input type="text" class="form-control dom" id="exampleInputPassword1" placeholder="Digite o(s) Evento(s) (K)" "> \
                        </div> \
                        \
                        <button id="calc" type="submit" class="btn btn-primary" onclick="Gerente_Binomial()"  style="width: 75%;">Calcular</button> \
                        \
                    </div> \
                    <div id="resultados" class="col-md-0 px-3 py-3  align-items-center  flex-column d-none " style="margin-top: 5%;"> \
                            \
                            \
                        <h1 class="display-6 shadow border border-info rounded P "> \
                             Probabilidade =  \
                        </h1> \
                        <h1 class="display-6 shadow border border-info rounded P "> \
                             Moda =  \
                        </h1> \
                        <h1 class="display-6 shadow border border-info rounded P"> \
                             Desvio Padrão =   \
                        </h1> \
                        <button type="submit" class="btn btn-primary mt-5 w-100" onclick="Sweet_Alert_Name('+'binomial'+')"  >Salvar</button> \
                        \
                    </div> \
                </div> \
             \
        </div>';
    }

    
}
function DistBinomial(name_Btn){
    let dist_Bi = new Distribuicao(name_Btn);
    let div_add = document.querySelector('#pills-tabContent');
    div_add.innerHTML = dist_Bi.BinomialA();

}
function DistNormal(name_Btn){
    let dist_No = new Distribuicao(name_Btn);
    let div_add = document.querySelector('#pills-tabContent');
    div_add.innerHTML = dist_No.Normal();
    
}
function DistUniforme(name_Btn){
    let dist_Un = new Distribuicao(name_Btn);
    let div_add = document.querySelector('#pills-tabContent');
    div_add.innerHTML = dist_Un.Uniforme();
    
}
function PegarDados(x){
    let Variaveis = document.querySelectorAll(x)
    let dados = []
    for(Variavel of Variaveis){
        dados.push(Variavel.value)
    }
    
    return dados
}

function Gerente_Binomial(){
    let resultado = Calc_Binomial([]);
    console.log(resultado)
    Libera_Resul_bi();
    let display = document.querySelectorAll('.P')
    display[0].innerHTML = 'Probabilidade : '+resultado.binomial+'%';
    display[1].innerHTML = 'Media : '+resultado.media;
    display[2].innerHTML = 'Desvio Padrão : '+resultado.desvio_padrao;
    console.log(display) 

    
}
function Libera_Resul_bi(){
       
    $('.entrada').removeClass('col-md-12')
    $('.entrada').addClass('col-md-7')
    $('#resultados').removeClass('col-md-12')
    $('#resultados').addClass('col-md-5 ')
    $('#resultados').removeClass('d-none')
    $('#resultados').addClass('animated bounceInDown delay-0s')
    $('#calc').text('Editar')
    
    

}
function Calc_Binomial(dados){
    if(dados.length == 0){
        dados = PegarDados('.dom');
    };
   
    console.log(dados)
    let K = dados[3].split(';');
    let N = parseInt(dados[0]);
    let P = parseFloat(dados[1]);
    let Q = parseFloat(dados[2]);
   
    let resultados = {
        binomial:0,
        media:0,
        desvio_padrao:0
    };
    
    for(let i = 0; i < K.length ;i++){
        
        K[i]=parseInt(K[i])
        let analise_comb
        if(N == K[i]){
            analise_comb = 1
        }else if(K[i] == 1){
            analise_comb = N
        }else if(K[i] == 0){
            analise_comb = 1
        }else{
            analise_comb = fat(N)/(fat(K[i])*fat(N-K[i]))
        }
        x = Math.pow(P, K[i])
        y = Math.pow(Q, N-K[i])
        resultados.binomial += (analise_comb * Math.pow(P, K[i]) * Math.pow(Q, N-K[i]))*100
        
    }
    resultados.binomial = parseFloat((resultados.binomial).toFixed(2))
    resultados.media = N * P
    resultados.desvio_padrao = parseFloat((Math.sqrt(N*P*Q).toFixed(2))) 
    return resultados

    function fat(num){  
        let acumula = 1;
        for(let i = num; i > 1 ;i--){
            acumula = acumula * i;
        }
        return acumula;

    }
}

function Sweet_Alert_Name(tipo){
    quant = Object.getOwnPropertyNames(resultados_salvos[tipo]).length + 1
    name = 'Salvo '+ tipo + ' '+quant;
    (async () => {

        
        const inputValue = name;
        
        const { value: text } = await Swal.fire({
          title: 'Adicione um nome para salvar',
          input: 'text',
          inputValue: inputValue,
          showCancelButton: true,
          inputValidator: (value) => {
            if (!value) {
              return 'Você precisa escrever algo!'
            }
          }
        })
        
        if (text) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
              })
              
              Toast.fire({
                type: 'success',
                title: 'Salvo com Sucesso'
              })
          resultados_salvos[tipo][text] = PegarDados('.dom');
          console.log(resultados_salvos);
          add_nav_safe(text)
          
        }
        
        })()
}

function add_nav_safe(name, tipo){

    if(saves.classList.contains("d-none") == true){
        $('#saves').removeClass('d-none')
        $('#saves').addClass('d-flex')
        $('#saves').addClass('animated flipInY delay-0s')

    }
    button = '<button id="'+'binomial'+'" type="button"  onclick="DistBinomial('+'name, tipo'+')" class="btn btn-outline-primary mr-3 mb-2 ml-3 animated tada delay-1s">'+name+'</button>'
    let display = document.querySelector('#saves') 
    display.innerHTML += button
    
}
function text(name, tipo){
    alert(name, tipo)
}