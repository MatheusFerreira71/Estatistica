let resultados_salvos = {
    binomial: {},
    normal:{},
    uniforme:{}
}

function Distribuicao(name_Btn){
            
    $('.btn').removeClass('active')
    $('#'+name_Btn).addClass('active')
   
    this.Uniforme = function(){
        return ` \
        <div class="container"> \
            <div class="row"> \
                <div class="col-md-12 px-3 py-3 bordas_coluna d-flex align-items-center flex-column  entrada"> \
                        \
                    <div class="form-group was-validated ted" style="width: 75%;"> \
                        <label for="exampleInputPassword1">Intervalos</label> \
                        <input required id="teste "type="text" min="0" pattern="((?:[0-9])+(?:\;)|[0-9]*){1}((?:[0-9])+[0-9]*){1}" class="form-control dom" id="exampleInputPassword1" placeholder="Digite o(s) Dados(s)" "> \
                        <div class="valid-feedback">Muito bem!</div>\
                        <div class="invalid-feedback "> Adione um ou 2 numeros inteiros sepados por ponto e Virgula </div> \
                    </div> \
                    <div class="form-group  was-validated ted" style="width: 75%;"> \
                        <label for="exampleInputPassword1">Minimo</label> \
                        <input required type="text" pattern="(?:[0-9])+" step="1" min="0" class="form-control dom" id="exampleInputPassword1" placeholder="Digite aqui a Média" "> \
                        <div class="valid-feedback  ">Muito bem!</div>\
                        <div class="invalid-feedback">Insira um numero </div> \
                    </div> \
                    <div class="form-group  was-validated ted" style="width: 75%;"> \
                        <label for="exampleInputPassword1">Maximo</label> \
                        <input required type="text"pattern="(?:[0-9])+" step="1" min="0" class="form-control dom" id="exampleInputPassword1" placeholder="Digite aqui o Desvio Padrão" "> \
                        <div class="valid-feedback  ">Muito bem!</div>\
                        <div class="invalid-feedback">Insira um numero </div> \
                    </div> \
                    <div class="form-group " style="width: 75%;"> \
                        <label for="exampleInputPassword1">Opções</label> \
                        <select class="select"> \
                           \
                                <option value="entre"> Entre dois numeros </option>\
                                <option value="maior"> Maior que </option>\
                                <option value="menor"> Menor que </option>\
                            \
                        </select>\
                    </div> \
                    \
                    <button id="calc" type="submit" class="btn btn-primary" onclick="Gerente_Uniforme([])" style="width: 75%; ">Calcular</button> \
                    \
                    </form>\
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
                    <button id="btn" type="submit" class="btn btn-primary mt-5 w-100" onclick="Sweet_Alert_Name('${'uniforme'}')"  >Salvar</button> \
                    \
                </div> \
            </div> \
         \
    </div>`;
    }
    this.Normal = function(){
        
        return ` \
            <div class="container"> \
                <div class="row"> \
                    <div class="col-md-12 px-3 py-3 bordas_coluna d-flex align-items-center flex-column  entrada"> \
                            \
                        <div class="form-group was-validated ted" style="width: 75%;"> \
                            <label for="exampleInputPassword1">Evento</label> \
                            <input required id="teste "type="text" min="0" pattern="((?:[0-9])+(?:\;)|[0-9]*){1}((?:[0-9])+[0-9]*){1}" class="form-control dom" id="exampleInputPassword1" placeholder="Digite o(s) Dados(s)" "> \
                            <div class="valid-feedback">Muito bem!</div>\
                            <div class="invalid-feedback "> Adione um ou 2 numeros inteiros sepados por ponto e Virgula </div> \
                        </div> \
                        <div class="form-group  was-validated ted" style="width: 75%;"> \
                            <label for="exampleInputPassword1">Media</label> \
                            <input required type="text" pattern="[0-9]+([\.,][0-9]{0,2})?" step="0.01" class="form-control dom" id="exampleInputPassword1" placeholder="Digite aqui a Média" "> \
                            <div class="valid-feedback  ">Muito bem!</div>\
                            <div class="invalid-feedback">Insira um numero </div> \
                        </div> \
                        <div class="form-group  was-validated ted" style="width: 75%;"> \
                            <label for="exampleInputPassword1">Desvio Padrão</label> \
                            <input required type="text" pattern="[0-9]+([\.,][0-9]{0,2})?" step="0.01" class="form-control dom" id="exampleInputPassword1" placeholder="Digite aqui o Desvio Padrão" "> \
                            <div class="valid-feedback  ">Muito bem!</div>\
                            <div class="invalid-feedback">Insira um numero </div> \
                        </div> \
                        <div class="form-group " style="width: 75%;"> \
                            <label for="exampleInputPassword1">Opções</label> \
                            <select class="select"> \
                               \
                                    <option value="entre"> Entre dois numeros </option>\
                                    <option value="maior"> Maior que </option>\
                                    <option value="menor"> Menor que </option>\
                                \
                            </select>\
                        </div> \
                        \
                        <button id="calc" type="submit" class="btn btn-primary" onclick="Gerente_Normal([])" style="width: 75%; ">Calcular</button> \
                        \
                        </form>\
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
                        <button id="btn" type="submit" class="btn btn-primary mt-5 w-100" onclick="Sweet_Alert_Name('${'normal'}')"  >Salvar</button> \
                        \
                    </div> \
                </div> \
             \
        </div>`;

    }

    this.BinomialA = function(){
        binomial= 'binomial'
        return ` \
            <div class="container"> \
                <div class="row"> \
                    <div class="col-md-12 px-3 py-3 bordas_coluna d-flex align-items-center flex-column  entrada"> \
                            \
                        <div class="form-group was-validated ted " style="width: 75%;"> \
                            <label for="exampleInputEmail1">Amostra</label> \
                            <input required type="number"  min="0" pattern="[0-9]" class="form-control dom " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite aqui a Amostra (N)" "> \
                            <div class="valid-feedback ">Muito bem!</div>\
                            <div class="invalid-feedback" >Insira um numero inteiro </div> \
                        </div> \
                        <div class="form-group was-validated ted" style="width: 75%;"> \
                            <label for="exampleInputPassword1">Sucesso</label> \
                            <input required type="number"  min="0" max="100" pattern="[0-9]" class="form-control dom" id="exampleInputPassword1" placeholder="Digite aqui a chance de Sucesso (P)" "> \
                            <div class="valid-feedback  ">Muito bem!</div>\
                            <div class="invalid-feedback">Insira de 0 a 100 </div> \
                        </div> \
                        <div class="form-group was-validated ted" style="width: 75%;"> \
                            <label for="exampleInputEmail1">Fracasso</label> \
                            <input required type="number"  min="0" max="100" pattern="[0-9]" class="form-control dom" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite aqui a chance de Fracasso (Q)" "> \
                            <div class="valid-feedback  ">Muito bem!</div>\
                            <div class="invalid-feedback">Insira de 0 a 100 </div> \
                            \
                        </div> \
                        <div class="form-group was-validated ted" style="width: 75%;"> \
                            <label for="exampleInputPassword1">Evento</label> \
                            <input required id="teste "type="text" min="0" pattern="((?:[0-9])+(?:\;)|(?:[0-9]))*[0-9]" step="1" class="form-control dom" id="exampleInputPassword1" placeholder="Digite o(s) Evento(s) (K)" "> \
                            <div class="valid-feedback">Muito bem!</div>\
                            <div class="invalid-feedback "> Adione um ou mais numeros inteiros sepados por ponto e Virgula </div> \
                        </div> \
                        \
                        <button id="calc" type="submit" class="btn btn-primary" onclick="Gerente_Binomial([])" style="width: 75%; ">Calcular</button> \
                        \
                        </form>\
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
                        <button id="btn" type="submit" class="btn btn-primary mt-5 w-100" onclick="Sweet_Alert_Name('${'binomial'}')"  >Salvar</button> \
                        \
                    </div> \
                </div> \
             \
        </div>`;
    }
    

   
}
// Botões Padrão
function DistBinomial(name_Btn){
    let dist_Bi = new Distribuicao(name_Btn);
    let div_add = document.querySelector('#pills-tabContent');
    div_add.innerHTML = dist_Bi.BinomialA();
    var input = document.querySelector('teste');
    

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


// Funcoes Genericas
function PegarDados(x){
    let Variaveis = document.querySelectorAll(x)
    let dados = []
    for(Variavel of Variaveis){
        dados.push(Variavel.value)
    }
    
    return dados
}
function AdicionaDados(dados, classe){
    let Variaveis = document.querySelectorAll(classe)
    for(let i=0;i < dados.length;i++){
        Variaveis[i].value = dados[i]
    }

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
function Validacao(dados,tipo){
    
    var input = document.getElementsByClassName('dom');
    var valido = 0
    for(let i = 0;i < input.length;i++){
        if(input[i].checkValidity() === true){
            valido ++
        }
    }
    console.log(input[0].checkValidity())
    if(valido == input.length || dados.length != 0){
    
        if(dados.length == 0){
            dados = PegarDados('.dom');
            
        };
        console.log((parseInt(dados[1]) + parseInt(dados[2])))
        
        if(tipo == 'binomial'){
            if((parseInt(dados[1]) + parseInt(dados[2])) == 100){
                return true
            }else{
                return 'O sucesso mais o fracasso não é igual a 100'
            }
        
        }else if(tipo == 'normal'){
            
        }else if(tipo == 'uniforme'){
        
        }
    }else{
        $('.ted').addClass('was-validated');
        return 'Por favor Preecha todos os campos corretamente';

    }
    
    
}
function AlertUsu(texto){
    Swal.fire({
        type: 'info',
        title: 'Oops...',
        text: texto
      })
    
}


// Gerentes de Distribuições
function Gerente_Binomial(dados){
    validacao = Validacao(dados, 'binomial')
    
    if(validacao != true){ 
        AlertUsu(validacao);
        return false
    }else{
        let resultado = Calc_Binomial(dados);
        console.log(resultado)
        Libera_Resul_bi();
        let display = document.querySelectorAll('.P')
        display[0].innerHTML = 'Probabilidade : '+resultado.binomial+'%';
        display[1].innerHTML = 'Media : '+resultado.media;
        display[2].innerHTML = 'Desvio Padrão : '+resultado.desvio_padrao;
        console.log(display) 
        
    }
 
    
}function Gerente_Normal(dados){
    validacao = Validacao(dados, 'normal')
    let ted = document.querySelector('.ted');
    console.log(ted.value)
    if(validacao != true){ 
        AlertUsu(validacao);
        return false
    }else{
        let resultado = Calc_Binomial(dados);
        console.log(resultado)
        Libera_Resul_bi();
        let display = document.querySelectorAll('.P')
        display[0].innerHTML = 'Probabilidade : '+resultado.binomial+'%';
        display[1].innerHTML = 'Media : '+resultado.media;
        display[2].innerHTML = 'Desvio Padrão : '+resultado.desvio_padrao;
        console.log(display) 
    }
 
    
}


// Funcões de Calculo
function Calc_Binomial(dados){
    if(dados.length == 0){
        dados = PegarDados('.dom');
        
    };
   
    console.log(dados)
    let K = dados[3].split(';');
    let N = parseInt(dados[0]);
    let P = parseFloat(dados[1])/100;
    let Q = parseFloat(dados[2])/100;
   
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



//Funções resposaveis por salvar
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

            let nomeAlt = text.replace(/\s/g, '')

            if(resultados_salvos[tipo][nomeAlt]){
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Esse nome ja está sendo usado!',
                   
                  })
            }else{
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
                resultados_salvos[tipo][nomeAlt] = PegarDados('.dom');
                console.log(resultados_salvos);
                add_nav_safe(text, tipo)
          
            }
                
        }
        
        })()
}

function add_nav_safe(nome, tipo){
    distri = tipo
    let nomeAlt = nome.replace(/\s/g, '')
    if(saves.classList.contains("d-none") == true){
        $('#saves').removeClass('d-none')
        $('#saves').addClass('d-flex')
        $('#saves').addClass('animated flipInY delay-0s')

    }
    console.log(nomeAlt)
    button = `<button id="${nomeAlt}" type="button" onclick="Visualizar('${nomeAlt}','${tipo}')" class=" teste btn btn-outline-primary mr-3 mb-2 ml-3 animated tada delay-1s">${nome}</button>`
    
    let display = document.querySelector('#saves') 
    display.innerHTML += button;
    Visualizar(nomeAlt,tipo);
    
}

function Visualizar(id, tipo){
 
   if(tipo == 'binomial'){
        DistBinomial(id);
        Gerente_Binomial(resultados_salvos[tipo][id]);  
        AdicionaDados(resultados_salvos[tipo][id],'.dom')

   }else if(tipo == 'normal'){

   }else if(tipo == 'uniforme'){

   }
   
}

