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
                        <input required id="nuns" type="text" min="0" pattern="((?:[0-9])+(?:\;)){1}((?:[0-9])+[0-9]*){1}" class="form-control dom nuns" id="exampleInputPassword1" placeholder="Digite o(s) Dados(s)" "> \
                        <div class="valid-feedback">Muito bem!</div>\
                        <div class="invalid-feedback nuns "> Adione 2 numeros inteiros sepados por ponto e Virgula </div> \
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
                        <select class="select" onchange="NumDados()"> \
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
                            <input required id="" type="text" min="0" pattern="((?:[0-9])+(?:\;)){1}((?:[0-9])+[0-9]*){1}" class="form-control dom nuns" id="exampleInputPassword1" placeholder="Digite o(s) Dados(s)" "> \
                            <div class="valid-feedback">Muito bem!</div>\
                            <div class="invalid-feedback nuns"> Adione 2 numeros sepados por ponto e Virgula </div> \
                        </div> \
                        <div class="form-group  was-validated ted" style="width: 75%;"> \
                            <label for="exampleInputPassword1">Media</label> \
                            <input required type="text" pattern="^([1-9][0-9]*((\.|\,)[0-9]{1,2})?|0(\.|\,)(([0-9][1-9])|([1-9][0-9])|[1-9]{1,2}))$" step="0.01" class="form-control dom" id="exampleInputPassword1" placeholder="Digite aqui a Média" "> \
                            <div class="valid-feedback  ">Muito bem!</div>\
                            <div class="invalid-feedback">Insira um numero </div> \
                        </div> \
                        <div class="form-group  was-validated ted" style="width: 75%;"> \
                            <label for="exampleInputPassword1">Desvio Padrão</label> \
                            <input required type="text" pattern="^([1-9][0-9]*((\.|\,)[0-9]{1,2})?|0(\.|\,)(([0-9][1-9])|([1-9][0-9])|[1-9]{1,2}))$" step="0.01" class="form-control dom" id="exampleInputPassword1" placeholder="Digite aqui o Desvio Padrão" "> \
                            <div class="valid-feedback  ">Muito bem!</div>\
                            <div class="invalid-feedback">Insira um numero </div> \
                        </div> \
                        <div class="form-group" style="width: 75%;"> \
                            <label for="exampleInputPassword1">Opções</label> \
                            <select class="select dom" onchange="NumDados()"> \
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
        
        if(tipo == 'binomial'){
            if((parseInt(dados[1]) + parseInt(dados[2])) == 100){
                return true
            }else{
                return 'O sucesso mais o fracasso não é igual a 100'
            }
        
        }else if(tipo == 'normal'){
            return true
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
function NumDados(){
    let select = document.querySelector('.select');
    let nuns   = document.querySelectorAll('.nuns');
    console.log(nuns)
    select = select.value;
    if(select == 'entre'){
        // pattern para dois ou um numero : ((?:[0-9])+(?:\;)|[0-9]*){1}((?:[0-9])+[0-9]*){1} :)
        nuns[0].pattern   = '((?:[0-9])+(?:\;)){1}((?:[0-9])+[0-9]*){1}'
        nuns[1].innerText = 'Adione 2 numeros inteiros sepados por ponto e Virgula'

    }else{
        nuns[0].pattern   = '(?:[0-9])+'
        nuns[1].innerText = 'Adione um numero inteiro';

    }
    AlertUsu(select);
}
function Tabela_DistNormal(nun){
    
    const tabelaDN = [
        ['z0',0,1,2,3,4,5,6,7,8,9],
        [0.0,0.0000,0.0040,0.0080,0.0120,0.0160,0.0199,0.0239,0.0279,0.0319,0.0359],
        [0.1,0.0398,0.0438,0.0478,0.0517,0.0557,0.0596,0.0636,0.0675,0.0714,0.0753],
        [0.2,0.0793,0.0832,0.0871,0.0910,0.0948,0.0987,0.1026,0.1064,0.1103,0.1141],
        [0.3,0.1179,0.1217,0.1255,0.1293,0.1331,0.1368,0.1406,0.1443,0.1480,0.1517],
        [0.4,0.1554,0.1591,0.1628,0.1664,0.1700,0.1736,0.1772,0.1808,0.1844,0.1879],
        [0.5,0.1915,0.1950,0.1985,0.2019,0.2054,0.2088,0.2123,0.2157,0.2190,0.2224],
        [0.6,0.2258,0.2291,0.2324,0.2357,0.2389,0.2422,0.2454,0.2486,0.2518,0.2549],
        [0.7,0.2580,0.2611,0.2642,0.2673,0.2704,0.2734,0.2764,0.2794,0.2823,0.2852],
        [0.8,0.2881,0.2910,0.2939,0.2967,0.2995,0.3023,0.3051,0.3078,0.3106,0.3133],
        [0.9,0.3159,0.3186,0.3212,0.3238,0.3264,0.3289,0.3315,0.3340,0.3365,0.3389],
        [1.0,0.3413,0.3438,0.3461,0.3485,0.3508,0.3531,0.3554,0.3577,0.3599,0.3621],
        [1.1,0.3643,0.3665,0.3686,0.3708,0.3729,0.3749,0.3770,0.3790,0.3810,0.3830],
        [1.2,0.3849,0.3869,0.3888,0.3907,0.3925,0.3944,0.3962,0.3980,0.3997,0.4015],
        [1.3,0.4032,0.4049,0.4066,0.4082,0.4099,0.4115,0.4131,0.4147,0.4162,0.4177],
        [1.4,0.4192,0.4207,0.4222,0.4236,0.4251,0.4265,0.4279,0.4292,0.4306,0.4319],
        [1.5,0.4332,0.4345,0.4357,0.4370,0.4382,0.4394,0.4406,0.4418,0.4429,0.4441],
        [1.6,0.4452,0.4463,0.4474,0.4484,0.4495,0.4505,0.4515,0.4525,0.4535,0.4545],
        [1.7,0.4554,0.4564,0.4573,0.4582,0.4591,0.4599,0.4608,0.4616,0.4625,0.4633],
        [1.8,0.4641,0.4649,0.4656,0.4664,0.4671,0.4678,0.4686,0.4693,0.4699,0.4706],
        [1.9,0.4713,0.4719,0.4726,0.4732,0.4738,0.4744,0.4750,0.4756,0.4761,0.4767],
        [2.0,0.4772,0.4778,0.4783,0.4788,0.4793,0.4798,0.4803,0.4808,0.4812,0.4817],
        [2.1,0.4821,0.4826,0.4830,0.4834,0.4838,0.4842,0.4846,0.4850,0.4854,0.4857],
        [2.2,0.4861,0.4864,0.4868,0.4871,0.4875,0.4878,0.4881,0.4884,0.4887,0.4890],
        [2.3,0.4893,0.4896,0.4898,0.4901,0.4904,0.4906,0.4909,0.4911,0.4913,0.4916],
        [2.4,0.4918,0.4920,0.4922,0.4925,0.4927,0.4929,0.4931,0.4932,0.4934,0.4936],
        [2.5,0.4938,0.4940,0.4941,0.4943,0.4945,0.4946,0.4948,0.4949,0.4951,0.4952],
        [2.6,0.4953,0.4955,0.4956,0.4957,0.4959,0.4960,0.4961,0.4962,0.4963,0.4964],
        [2.7,0.4965,0.4966,0.4967,0.4968,0.4969,0.4970,0.4971,0.4972,0.4973,0.4974],
        [2.8,0.4974,0.4975,0.4976,0.4977,0.4977,0.4978,0.4979,0.4979,0.4980,0.4981],
        [2.9,0.4981,0.4982,0.4982,0.4983,0.4984,0.4984,0.4985,0.4985,0.4986,0.4986],
        [3.0,0.4987,0.4987,0.4987,0.4988,0.4988,0.4989,0.4989,0.4989,0.4990,0.4990],
        [3.1,0.4990,0.4991,0.4991,0.4991,0.4992,0.4992,0.4992,0.4992,0.4993,0.4993],
        [3.2,0.4993,0.4993,0.4994,0.4994,0.4994,0.4994,0.4994,0.4995,0.4995,0.4995],
        [3.3,0.4995,0.4995,0.4995,0.4996,0.4996,0.4996,0.4996,0.4996,0.4996,0.4997],
        [3.4,0.4997,0.4997,0.4997,0.4997,0.4997,0.4997,0.4997,0.4997,0.4997,0.4998],
        [3.5,0.4998,0.4998,0.4998,0.4998,0.4998,0.4998,0.4998,0.4998,0.4998,0.4998],
        [3.6,0.4998,0.4998,0.4999,0.4999,0.4999,0.4999,0.4999,0.4999,0.4999,0.4999],
        [3.7,0.4999,0.4999,0.4999,0.4999,0.4999,0.4999,0.4999,0.4999,0.4999,0.4999],
        [3.8,0.4999,0.4999,0.4999,0.4999,0.4999,0.4999,0.4999,0.4999,0.4999,0.4999],
        [3.9,0.5000,0.5000,0.5000,0.5000,0.5000,0.5000,0.5000,0.5000,0.5000,0.5000]];

        return tabelaDN
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
        let resultado = Calc_Normal(dados);
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
function Calc_Normal(dados){
    if(dados.length == 0){
        dados = PegarDados('.dom');
        
    };
    console.log(dados)
    
    if(dados[3] = 'entre'){

    }else if(dados[3] = 'maior'){

    }else{
        

    }


    let resultados = { Probabilidade: 0 };
    return resultados
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

