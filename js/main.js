// Declaração de variáveis globais
let tabelas = [],
    vetorImport = [],
    Obejetos;
let barra = document.getElementById('RangeSeparatriz');
let littleData = document.getElementById('entrarDados');

// Todas as funções vêm abaixo dessa linha.
function separador(vetor) {
    let Quantidades = {};
    let aux;
    for (let i of vetor) {
        aux = 0;
        for (let j of vetor) {
            if (j === i) {
                aux++
            }
        }
        Quantidades[`${i}`] = aux;
    }
    return Quantidades;
}

function moda(Quantidades) {
    let aux = 0,
        nome = [];
    for (let i in Quantidades) {
        if (Quantidades[i] > aux) {
            aux = Quantidades[i];
        }
    }
    for (let i in Quantidades) {
        if (Quantidades[i] == aux) {
            nome.push(i);
        }
    }
    return nome;
}

function media(dados, totalFrequencia) {
    let somatorio = 0;
    for (let i in dados) {
        somatorio += parseFloat(i) * parseFloat(dados[i]);
    }
    return parseFloat((somatorio / totalFrequencia).toFixed(2));
}

function medidaSeparatriz(porcentagem, dados, totalFrequencia) {
    let posicao = parseFloat((totalFrequencia * porcentagem).toFixed(0));
    for (let i in dados) {
        let controle = 0;
        if (posicao >= controle && posicao <= dados[i]) {
            return i
        }
        controle = dados[i];
    }
}

function medidaSeparatrizContinua(totalFrequencia, intervalos, interClasses, porcentagem) {
    let posicao = parseFloat((totalFrequencia * porcentagem).toFixed(2));
    let controle = 0,
        vetorIntervalos;
    for (let j in intervalos) {
        if (posicao >= controle && posicao <= intervalos[j][0]) {
            vetorIntervalos = j.split('|--');
            for (let i = 0; i < vetorIntervalos.length; i++) {
                vetorIntervalos[i] = parseInt(vetorIntervalos[i]);
            }
            return (vetorIntervalos[0] + ((posicao - controle) / intervalos[j][1]) * interClasses).toFixed(2)
        }
        controle = intervalos[j][0];
    }
}

function mediana(dados, totalFrequencia) {
    let posicoes = [],
        medianas = [];
    if (totalFrequencia % 2 == 0) {
        posicoes.push(totalFrequencia / 2, totalFrequencia / 2 + 1);
    } else {
        posicoes.push((totalFrequencia - 1) / 2 + 1);
    }
    for (let i of posicoes) {
        let controle = 0;
        for (let j in dados) {
            if (i >= controle && i <= dados[j]) {
                medianas.push(j);
                break;
            }
            controle = dados[j];
        }
    }
    return medianas;
}

function medianaContinua(totalFrequencia, intervalos, interClasses) {
    let posicao = parseInt((totalFrequencia / 2).toFixed(2));
    let controle = 0,
        vetorIntervalos;
    for (let j in intervalos) {
        if (posicao >= controle && posicao <= intervalos[j][0]) {
            vetorIntervalos = j.split('|--');
            for (let i = 0; i < vetorIntervalos.length; i++) {
                vetorIntervalos[i] = parseInt(vetorIntervalos[i]);
            }
            return (vetorIntervalos[0] + ((posicao - controle) / intervalos[j][1]) * interClasses).toFixed(2)
        }
        controle = intervalos[j][0];
    }
}

// Função para verificar se o vetor passado como parãmetro tem algum elemento diferente de um número
function vetorNaN(vetor) {
    let aux = 0;
    for (let i of vetor) {
        if (isNaN(i)) {
            aux++
        } else {
            aux--
        }
    }
    return (aux == vetor.length) ? true : false
}

// Função para verificar se todos os elemtos do vetor são true ou false.
function vetorBool(vetor) {
    let aux = 0;
    for (let i of vetor) {
        if (i === true) {
            aux++
        } else {
            aux--
        }
    }
    return (aux == vetor.length) ? true : false
}

function adicionarVariavel(vetorTabelas) {
    let obj = {}
    obj.nome = document.getElementById('nomeVariavel').value;
    obj.tipoAna = document.getElementById('TipoDeAnalise').value;
    obj.separatriz = document.getElementById('MedidaValor').innerText.split('%');
    obj.separatriz[0] = parseInt(obj.separatriz[0]);
    obj.separatriz = obj.separatriz[0] / 100;
    obj.dados = (document.getElementById('entrarDados').value).split(';');


    // Transforma em número se for possível
    for (let i = 0; i < obj.dados.length; i++) {
        if (!isNaN(parseInt(obj.dados[i]))) {
            obj.dados[i] = parseInt(obj.dados[i]);
        }
    }

    //Se for um vetor NaN, deixa todos em letra maiúscula.
    if (vetorNaN(obj.dados)) {
        for (let i = 0; i < obj.dados.length; i++) {
            obj.dados[i] = obj.dados[i].toUpperCase();
            obj.dados[i] = obj.dados[i].trim();
        }
    }

    obj.tipoVar = document.getElementById('TipoVar').value

    // Se a variável for Ordinal o sistema colocará na tela um cartão para o usuário adicionar o grau;
    // Quando o usuário clicar em salvar, a função tabelaOrdinal() será executada.
    if (obj.tipoVar == 'Qualitativa Ordinal') {
        let Obejeto = separador(obj.dados);
        let card = document.getElementById('cardBordado');
        card.innerHTML = `<div class="card" style="width: auto;">
                            <div class="card-body">
                                <h5 class="card-title">Selecione o grau dos dados</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                            </ul>
                        </div>`;

        let vars = document.getElementsByTagName('ul')[1];
        document.getElementsByTagName('header')[0].classList.remove('my-3');
        document.getElementById('nomeVariavel').setAttribute('disabled', 'disabled');
        document.getElementById('TipoVar').setAttribute('disabled', 'disabled');
        document.getElementById('TipoDeAnalise').setAttribute('disabled', 'disabled');
        document.getElementById('entrarDados').setAttribute('disabled', 'disabled');
        document.getElementById('arquivo').setAttribute('disabled', 'disabled');
        document.getElementById('RangeSeparatriz').setAttribute('disabled', 'disabled');
        document.getElementById('Separatrizes').setAttribute('disabled', 'disabled');
        document.getElementById('tipoArquivo').setAttribute('disabled', 'disabled');


        for (let i in Obejeto) {
            vars.innerHTML += `<li class="list-group-item border-info">${i}<div class="form-group">
            <input type="number" min="1" class="form-control text-center graus" id="grau${i}" placeholder="O maior ficará no topo da tabela." onchange="ativarBotaoSalvar()"></div></li>`;
        }

        Obejetos = Obejeto;

        document.getElementById('cardBordado').classList.add('border-info')
        vars.innerHTML += `<li class="list-group-item border-info">
                                <button class="btn btn-success" id="salvarGraus" onclick="tabelaOrdinal(tabelas, Obejetos);" style="width: 100%;">Salvar</button>
                            </li>`;
        ativarBotaoSalvar();
        card.getElementsByTagName('div')[0].classList.add('border-info');
    }
    vetorTabelas.push(obj);
    document.getElementById('nomeVariavel').value = "";
    document.getElementById('entrarDados').value = "";
    document.getElementById('TipoVar').value = "";
    document.getElementById('TipoDeAnalise').value = "";
}

function tabelaOrdinal(vetorTabelas, Objetante) {
    document.getElementsByTagName('header')[0].classList.add('my-3');
    let verificador = [];
    let grauObj = {};
    for (let i in Objetante) {
        grauObj[`${i}`] = document.getElementById(`grau${i}`).value;
        verificador.push(grauObj[`${i}`]);
    }

    //Verifica se os graus são utilizáveis ou se contém erros.
    if (grausNegativos(verificador)) {
        alert("Existem graus com valor negativo!");
    } else if (grausIguais(verificador).length > verificador.length) {
        alert('Existem graus duplicados!');
    } else {
        vetorTabelas[vetorTabelas.length - 1].graus = grauObj;
        document.getElementById('cardBordado').innerHTML = '';
        document.getElementById('nomeVariavel').removeAttribute('disabled');
        document.getElementById('TipoVar').removeAttribute('disabled');
        document.getElementById('TipoDeAnalise').removeAttribute('disabled');
        document.getElementById('entrarDados').removeAttribute('disabled');
        document.getElementById('arquivo').removeAttribute('disabled');
        document.getElementById('previewDataButton').removeAttribute('disabled');
        document.getElementById('RangeSeparatriz').removeAttribute('disabled');
        document.getElementById('Separatrizes').removeAttribute('disabled');
        document.getElementById('tipoArquivo').removeAttribute('disabled');
    }
}

// Função para mostrar na tela todos os dados que o usuário entrou, para serem conferidos e se necessário;
// adicionar mais.
function previewDados(vetorTabelas) {
    let totalLinhas = 0
    let cabecalho = document.getElementById('linhaCabecalhoPreview');
    let corpo = document.getElementById('corpoTabelaPreview');

    //Pegando o número total de linhas
    for (let i of vetorTabelas) {
        if (i.dados.length > totalLinhas) {
            totalLinhas = i.dados.length;
        }
    }

    //Escrevendo todas as linhas
    for (let i = 1; i <= totalLinhas; i++) {
        corpo.innerHTML += `<tr></tr>`;
    }

    //Pegou todas as linhas da tabela
    let linhas = document.getElementsByTagName('tr');

    //Escrever Cabeçalho
    for (let i = 0; i < vetorTabelas.length; i++) {
        cabecalho.innerHTML += `<th scope="col">${vetorTabelas[i].nome}</th>`;
    }

    //Escreve o resultado nas linhas 1 linha de cada vez.
    for (let i = 1; i < linhas.length; i++) {
        let linhaAtual = linhas[i];
        for (let j = 0; j < vetorTabelas.length; j++) {
            if (vetorTabelas[j].dados[i - 1] === undefined) {
                linhaAtual.innerHTML += `<td></td>`;
            } else {
                linhaAtual.innerHTML += `<td>${vetorTabelas[j].dados[i - 1]}</td>`;
            }
        }
    }
}

// Função para apagar a tabela de preview sempre que o usuário fechar a tela de preview.
function resetPreview() {
    document.getElementById('linhaCabecalhoPreview').innerHTML = '';
    document.getElementById('corpoTabelaPreview').innerHTML = '';
}

function mudarSeparatriz() {
    let seletor = document.getElementById('Separatrizes');
    let labelResultado = document.getElementById('MedidaValor');

    // Dependendo do tipo de separatriz que o usuário escolher, o sistema irá mudar o atributo step do;
    // Input type="range"
    if (seletor.value == 'Quartil') {
        barra.setAttribute('step', '25');
        labelResultado.innerText = barra.value + '%';
    } else if (seletor.value == 'Quintil') {
        barra.setAttribute('step', '20');
        labelResultado.innerText = barra.value + '%';
    } else if (seletor.value == 'Decil') {
        barra.setAttribute('step', '10');
        labelResultado.innerText = barra.value + '%';
    } else {
        barra.setAttribute('step', '1');
        labelResultado.innerText = barra.value + '%';
    }
}

// Função para atualizar o valor da barra de separatrizes. 
function mudarValorBarra() {
    let labelResultado = document.getElementById('MedidaValor');
    labelResultado.innerText = barra.value + '%';
}

//Função para mudar o tipo de arquivo que será permitido no seletor de arquivo.
function tipoArquivo() {
    let tipoArquivo = document.getElementById('tipoArquivo');
    if (tipoArquivo.value == ".xlsx") {
        document.getElementById('arquivo').setAttribute('accept', '.xlsx')
    } else {
        document.getElementById('arquivo').setAttribute('accept', '.csv')
    }
}

function calcular(vetorTabelas) {
    document.getElementsByTagName('header')[0].innerHTML = `<h1 class="text-center">Resultados</h1>`;
    document.getElementById('ocultar').innerHTML = '';
    document.getElementById('notificacete').innerHTML = '';
    let grupoVar = document.getElementById('grupoVar');
    document.getElementById('addDinamica').classList.add('dinamica')
    grupoVar.style = "border-width: 2px !important; border-style: solid !important; border-color: #17A2B8 !important; border-radius: 7px !important; overflow-x:scroll;"
    document.getElementById('results').innerHTML = '<div data-spy="scroll" data-target="#grupoVar" data-offset="0" class="scrollspy mx-3" id="resultList"></div>';
    document.getElementById('results').style = "border-width: 2px !important; border-style: solid !important; border-color: #17A2B8 !important; border-radius: 10px !important"
    let grupoResults = document.getElementById('resultList');

    // O sistema percorrerá um loop pelo vetor de tabelas executando uma por uma, verificando seu tipo;
    // e tomando as medidas necessárias para cada tipo.
    for (let i = 0; i < vetorTabelas.length; i++) {
        if (vetorTabelas[i].tipoVar == "Qualitativa Nominal") {
            vetorTabelas[i].dados.sort();
            let obejeto = separador(vetorTabelas[i].dados);
            grupoVar.innerHTML += `<a class="list-group-item list-group-item-action" style = "font-weight: bold;" href="#${vetorTabelas[i].nome}">${vetorTabelas[i].nome}</a>`;
            grupoResults.innerHTML += `<h4 id="${vetorTabelas[i].nome}" class="text-center">${vetorTabelas[i].nome}</h4>`;
            grupoResults.innerHTML += `
                <div class="table-responsive">
                    <table class=" table table-hover table-danger table-sm table-bordered table-striped text-center" id="Tabela${vetorTabelas[i].nome}">
                        <thead class="thead-dark">
                            <tr id="linhaCabecalho">

                            </tr>
                        </thead>
                        <tbody id="corpoTabela">

                        </tbody>
                    </table>
                </div>
            `;
            let totalLinhas = 0;
            let totalFrequencia = 0;
            for (let z in obejeto) {
                totalLinhas++
                totalFrequencia += obejeto[z];
            }
            let tabelaAtual = document.getElementById(`Tabela${vetorTabelas[i].nome}`)
            let cabecalho = tabelaAtual.getElementsByTagName('tr')[0];
            let corpo = tabelaAtual.getElementsByTagName('tbody')[0];

            //Escreve todas as linha da tabela
            for (let z = 1; z <= totalLinhas; z++) {
                corpo.innerHTML += `<tr></tr>`;
            }

            //Pegou todas as linhas da tabela
            let linhas = tabelaAtual.getElementsByTagName('tr');

            //Escrever Cabeçalho
            cabecalho.innerHTML += `<th scope="col">${vetorTabelas[i].nome}</th>
                                    <th scope="col">Frequencia Simples</th>
                                    <th scope="col"aria-label="Frequência Relativa em Porcentagem" data-balloon-pos="left">FR%</th>
                                    <th scope="col"aria-label="Frequência Simples Acumulada" data-balloon-pos="left">FAC</th>
                                    <th scope="col"aria-label="Frequência Relativa Acumulada" data-balloon-pos="left">FAC%</th>`;
            let FrequenciaAtual = 0,
                FrequenciaPorAtual = 0;
            //Escreve a Tabela
            let js = 1,
                objMediana = {},
                vetorGrafico = [];
            for (let z in obejeto) {
                let linhaAtual = linhas[js];
                linhaAtual.innerHTML = `<td>${z}</td>
                                            <td>${obejeto[z]}</td>
                                            <td>${(obejeto[z] / totalFrequencia * 100).toFixed(2)}</td>
                                            <td>${FrequenciaAtual += obejeto[z]}</td>
                                            <td>${(FrequenciaPorAtual += obejeto[z] / totalFrequencia * 100).toFixed(2)}</td>`;
                objMediana[z] = FrequenciaAtual;
                let objGrafico = {};
                objGrafico.label = z;
                objGrafico.value = obejeto[z];
                vetorGrafico.push(objGrafico);
                js++
            }
            // Resultados estatísticos.
            grupoResults.innerHTML += `
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-1"></div>
                        <div class="col-md-10">
                            <div class="card my-3 border-info" style="width: auto;">
                                <div class="card-header bg-dark text-white text-center" style="font-weight: bold;">Resultados Estatísticos</div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item text-center bg-success text-white">Moda: ${moda(obejeto)}</li>
                                    <li class="list-group-item text-center bg-success text-white">Mediana: ${mediana(objMediana, vetorTabelas[i].dados.length)}</li>
                                    <li class="list-group-item text-center bg-success text-white">Medida Separatriz ${vetorTabelas[i].separatriz * 100}%: ${medidaSeparatriz(vetorTabelas[i].separatriz, objMediana, vetorTabelas[i].dados.length)}</li>
                                </ul>
                            </div>
                        </div>
                <div class="col-md-1"></div>    
                </div>
            </div>
            `;

            //Gráfico
            FusionCharts.ready(function() {
                let fusioncharts = new FusionCharts({
                    type: 'pie3d',
                    renderAt: `chart${vetorTabelas[i].nome}`,
                    width: '100%',
                    height: '400',
                    dataFormat: 'json',
                    dataSource: {
                        "chart": {
                            "caption": `${vetorTabelas[i].nome}`,
                            "enableSmartLabels": "0",
                            "startingAngle": "0",
                            "showPercentValues": "1",
                            "decimals": "1",
                            "useDataPlotColorForLabels": "1",
                            "theme": "candy"
                        },
                        "data": vetorGrafico
                    }
                });
                fusioncharts.render();
            });
            grupoResults.innerHTML += `
            <div class="container-fluid my-3">
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10">
                        <div id="chart${vetorTabelas[i].nome}"></div>
                    </div>
                    <div class="col-md-1"></div>
                </div>
            </div>`

        } else if (vetorTabelas[i].tipoVar == "Quantitativa Discreta") {
            vetorTabelas[i].dados.sort();
            let obejeto = separador(vetorTabelas[i].dados);
            grupoVar.innerHTML += `<a class="list-group-item list-group-item-action" style = "font-weight: bold;" href="#${vetorTabelas[i].nome}">${vetorTabelas[i].nome}</a>`;
            grupoResults.innerHTML += `<h4 id="${vetorTabelas[i].nome}" class="text-center">${vetorTabelas[i].nome}</h4>`;
            grupoResults.innerHTML += `
                <div class="table-responsive">
                    <table class=" table table-hover table-danger table-sm table-bordered table-striped text-center" id="Tabela${vetorTabelas[i].nome}">
                        <thead class="thead-dark">
                            <tr id="linhaCabecalho">

                            </tr>
                        </thead>
                        <tbody id="corpoTabela">

                        </tbody>
                    </table>
                </div>
            `;
            let totalLinhas = 0;
            let totalFrequencia = 0;
            for (let z in obejeto) {
                totalLinhas++
                totalFrequencia += obejeto[z];
            }
            let tabelaAtual = document.getElementById(`Tabela${vetorTabelas[i].nome}`)
            let cabecalho = tabelaAtual.getElementsByTagName('tr')[0];
            let corpo = tabelaAtual.getElementsByTagName('tbody')[0];

            //Escreve todas as linha da tabela
            for (let z = 1; z <= totalLinhas; z++) {
                corpo.innerHTML += `<tr></tr>`;
            }

            //Pegou todas as linhas da tabela
            let linhas = tabelaAtual.getElementsByTagName('tr');

            //Escrever Cabeçalho
            cabecalho.innerHTML += `<th scope="col">${vetorTabelas[i].nome}</th>
                                    <th scope="col">Frequencia Simples</th>
                                    <th scope="col"aria-label="Frequência Relativa em Porcentagem" data-balloon-pos="left">FR%</th>
                                    <th scope="col"aria-label="Frequência Simples Acumulada" data-balloon-pos="left">FAC</th>
                                    <th scope="col"aria-label="Frequência Relativa Acumulada" data-balloon-pos="left">FAC%</th>`
            let FrequenciaAtual = 0,
                FrequenciaPorAtual = 0,
                vetorGrafico = [];
            //Escreve a Tabela
            let js = 1,
                objMediana = {};
            for (let z in obejeto) {
                let linhaAtual = linhas[js];
                linhaAtual.innerHTML = `<td>${z}</td>
                                            <td>${obejeto[z]}</td>
                                            <td>${(obejeto[z] / totalFrequencia * 100).toFixed(2)}</td>
                                            <td>${FrequenciaAtual += obejeto[z]}</td>
                                            <td>${(FrequenciaPorAtual += obejeto[z] / totalFrequencia * 100).toFixed(2)}</td>`;
                let objGrafico = {};
                objGrafico.label = z;
                objGrafico.value = (obejeto[z] / totalFrequencia * 100).toFixed(2);
                vetorGrafico.push(objGrafico);
                objMediana[z] = FrequenciaAtual;
                js++
            }
            // Resultados estatísticos.
            grupoResults.innerHTML += `
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-1"></div>
                        <div class="col-md-10">
                            <div class="card my-3 border-info" style="width: auto;">
                                <div class="card-header bg-dark text-white text-center" style="font-weight: bold;">Resultados Estatísticos</div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item text-center bg-success text-white">Média: ${media(obejeto, vetorTabelas[i].dados.length)}</li>
                                    <li class="list-group-item text-center bg-success text-white">Moda: ${moda(obejeto)}</li>
                                    <li class="list-group-item text-center bg-success text-white">Mediana: ${mediana(objMediana, vetorTabelas[i].dados.length)}</li>
                                    <li class="list-group-item text-center bg-success text-white">Medida Separatriz ${vetorTabelas[i].separatriz * 100}%: ${medidaSeparatriz(vetorTabelas[i].separatriz, objMediana, vetorTabelas[i].dados.length)}</li>
                                    <li class="list-group-item text-center bg-success text-white">Desvio Padrão ${vetorTabelas[i].tipoAna}: ${desvioPadrao(obejeto, media(obejeto, vetorTabelas[i].dados.length), vetorTabelas[i].tipoAna)}</li>
                                    <li class="list-group-item text-center bg-success text-white">Coeficiente de Variação: ${coefiVaria(desvioPadrao(obejeto, media(obejeto, vetorTabelas[i].dados.length), vetorTabelas[i].tipoAna), media(obejeto, vetorTabelas[i].dados.length))}</li>
                                </ul>
                            </div>
                        </div>
                <div class="col-md-1"></div>    
                </div>
            </div>
            `;

            //Gráfico
            FusionCharts.ready(function() {
                let fusioncharts = new FusionCharts({
                    type: 'bar3d',
                    renderAt: `chart${vetorTabelas[i].nome}`,
                    width: '100%',
                    height: '400',
                    dataFormat: 'json',
                    dataSource: {
                        "chart": {
                            "caption": `${vetorTabelas[i].nome}`,
                            "yAxisName": "FR%",
                            "numberSuffix": "%",
                            "theme": "candy"
                        },
                        "data": vetorGrafico
                    }
                });
                fusioncharts.render();
            });
            grupoResults.innerHTML += `
            <div class="container-fluid my-3">
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10">
                        <div id="chart${vetorTabelas[i].nome}"></div>
                    </div>
                    <div class="col-md-1"></div>
                </div>
            </div>`
        } else if (vetorTabelas[i].tipoVar == "Qualitativa Ordinal") {
            let obejeto = separador(vetorTabelas[i].dados);
            grupoVar.innerHTML += `<a class="list-group-item list-group-item-action" style = "font-weight: bold;" href="#${vetorTabelas[i].nome}">${vetorTabelas[i].nome}</a>`;
            grupoResults.innerHTML += `<h4 id="${vetorTabelas[i].nome}" class="text-center">${vetorTabelas[i].nome}</h4>`;
            grupoResults.innerHTML += `
                <div class="table-responsive">
                    <table class=" table table-hover table-danger table-sm table-bordered table-striped text-center" id="Tabela${vetorTabelas[i].nome}">
                        <thead class="thead-dark">
                            <tr id="linhaCabecalho">

                            </tr>
                        </thead>
                        <tbody id="corpoTabela">

                        </tbody>
                    </table>
                </div>
            `;
            let totalLinhas = 0;
            let totalFrequencia = 0;
            for (let z in obejeto) {
                totalLinhas++
                totalFrequencia += obejeto[z];
            }
            let tabelaAtual = document.getElementById(`Tabela${vetorTabelas[i].nome}`)
            let cabecalho = tabelaAtual.getElementsByTagName('tr')[0];
            let corpo = tabelaAtual.getElementsByTagName('tbody')[0];

            //Escreve todas as linha da tabela
            for (let z = 1; z <= totalLinhas; z++) {
                corpo.innerHTML += `<tr></tr>`;
            }

            //Pegou todas as linhas da tabela
            let linhas = tabelaAtual.getElementsByTagName('tr');

            //Escrever Cabeçalho
            cabecalho.innerHTML += `<th scope="col">${vetorTabelas[i].nome}</th>
                                    <th scope="col">Frequencia Simples</th>
                                    <th scope="col"aria-label="Frequência Relativa em Porcentagem" data-balloon-pos="left">FR%</th>
                                    <th scope="col"aria-label="Frequência Simples Acumulada" data-balloon-pos="left">FAC</th>
                                    <th scope="col"aria-label="Frequência Relativa Acumulada" data-balloon-pos="left">FAC%</th>`;
            let FrequenciaAtual = 0,
                FrequenciaPorAtual = 0;

            //Escrevendo a tabela.
            let js = 1,
                aux, objMediana = {},
                vetorGrafico = [];

            for (let k in obejeto) {
                let linhaAtual = linhas[js];
                let maiorGrau;
                aux = 0;

                //Pegando o maior grau
                for (let j in vetorTabelas[i].graus) {
                    if (vetorTabelas[i].graus[j] > aux) {
                        aux = parseInt(vetorTabelas[i].graus[j]);
                        maiorGrau = j
                    }
                }
                delete vetorTabelas[i].graus[maiorGrau];
                linhaAtual.innerHTML = `<td>${maiorGrau}</td>
                                            <td>${obejeto[maiorGrau]}</td>
                                            <td>${(obejeto[maiorGrau] / totalFrequencia * 100).toFixed(2)}</td>
                                            <td>${FrequenciaAtual += obejeto[maiorGrau]}</td>
                                            <td>${(FrequenciaPorAtual += obejeto[maiorGrau] / totalFrequencia * 100).toFixed(2)}</td>`;
                objMediana[maiorGrau] = FrequenciaAtual;
                let objGrafico = {};
                objGrafico.label = maiorGrau;
                objGrafico.value = obejeto[maiorGrau];
                vetorGrafico.push(objGrafico);
                js++
            }
            // Resultados estatísticos.
            grupoResults.innerHTML += `
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-1"></div>
                        <div class="col-md-10">
                            <div class="card my-3 border-info" style="width: auto;">
                                <div class="card-header bg-dark text-white text-center" style="font-weight: bold;">Resultados Estatísticos</div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item text-center bg-success text-white">Moda: ${moda(obejeto)}</li>
                                    <li class="list-group-item text-center bg-success text-white">Mediana: ${mediana(objMediana, vetorTabelas[i].dados.length)}</li>
                                    <li class="list-group-item text-center bg-success text-white">Medida Separatriz ${vetorTabelas[i].separatriz * 100}%: ${medidaSeparatriz(vetorTabelas[i].separatriz, objMediana, vetorTabelas[i].dados.length)}</li>
                                </ul>
                            </div>
                        </div>
                <div class="col-md-1"></div>    
                </div>
            </div>
            `;
            //Gráfico
            FusionCharts.ready(function() {
                let fusioncharts = new FusionCharts({
                    type: 'pie3d',
                    renderAt: `chart${vetorTabelas[i].nome}`,
                    width: '100%',
                    height: '400',
                    dataFormat: 'json',
                    dataSource: {
                        "chart": {
                            "caption": `${vetorTabelas[i].nome}`,
                            "enableSmartLabels": "0",
                            "startingAngle": "0",
                            "showPercentValues": "1",
                            "decimals": "1",
                            "useDataPlotColorForLabels": "1",
                            "theme": "candy"
                        },
                        "data": vetorGrafico
                    }
                });
                fusioncharts.render();
            });
            grupoResults.innerHTML += `
            <div class="container-fluid my-3">
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10">
                        <div id="chart${vetorTabelas[i].nome}"></div>
                    </div>
                    <div class="col-md-1"></div>
                </div>
            </div>`
        } else if (vetorTabelas[i].tipoVar == "Quantitativa Contínua") {
            let obejeto = separador(vetorTabelas[i].dados);
            grupoVar.innerHTML += `<a class="list-group-item list-group-item-action" style = "font-weight: bold;" href="#${vetorTabelas[i].nome}">${vetorTabelas[i].nome}</a>`;
            grupoResults.innerHTML += `<h4 id="${vetorTabelas[i].nome}" class="text-center">${vetorTabelas[i].nome}</h4>`;
            grupoResults.innerHTML += `
                <div class="table-responsive">
                    <table class=" table table-hover table-danger table-sm table-bordered table-striped text-center" id="Tabela${vetorTabelas[i].nome}">
                        <thead class="thead-dark">
                            <tr id="linhaCabecalho">

                            </tr>
                        </thead>
                        <tbody id="corpoTabela">

                        </tbody>
                    </table>
                </div>      
            `;

            //Pegar amplitude
            let maxVal = 0,
                minVal;
            for (let j in obejeto) {
                if (parseInt(j) > maxVal) {
                    maxVal = parseInt(j);
                }
            }
            minVal = maxVal;
            for (let j in obejeto) {
                if (parseInt(j) < minVal) {
                    minVal = parseInt(j);
                }
            }
            let At = maxVal - minVal;

            //Pegar o K = Classe
            let K = parseInt(Math.sqrt(vetorTabelas[i].dados.length));

            //Pegar o intervalo de classe
            let Ic, ref = At + 1;

            while (ref % (K - 1) != 0 && ref % K != 0 && ref % (K + 1) != 0) {
                ref++
            }

            if (ref % (K - 1) == 0) {
                Ic = ref / (K - 1);
            } else if (ref % K == 0) {
                Ic = ref / K;
            } else {
                Ic = ref / (K + 1);
            }

            let ultIntervalo = minVal,
                intervalos = {};
            while (ultIntervalo < maxVal) {
                intervalos[`${ultIntervalo}`] = ultIntervalo + Ic
                ultIntervalo += Ic;
            }

            //Pegar total de linhas;
            let totalLinhas = 0;
            for (let z in intervalos) {
                totalLinhas++
            }
            let totalFrequencia = vetorTabelas[i].dados.length;
            let tabelaAtual = document.getElementById(`Tabela${vetorTabelas[i].nome}`)
            let cabecalho = tabelaAtual.getElementsByTagName('tr')[0];
            let corpo = tabelaAtual.getElementsByTagName('tbody')[0];

            //Escreve todas as linha da tabela
            for (let z = 1; z <= totalLinhas; z++) {
                corpo.innerHTML += `<tr></tr>`;
            }

            //Pegou todas as linhas da tabela
            let linhas = tabelaAtual.getElementsByTagName('tr');

            //Escrever Cabeçalho 
            cabecalho.innerHTML += `<th scope="col">${vetorTabelas[i].nome}</th>
                                    <th scope="col">Frequencia Simples</th>
                                    <th scope="col"aria-label="Frequência Relativa em Porcentagem" data-balloon-pos="left">FR%</th>
                                    <th scope="col"aria-label="Frequência Simples Acumulada" data-balloon-pos="left">FAC</th>
                                    <th scope="col"aria-label="Frequência Relativa Acumulada" data-balloon-pos="left">FAC%</th>`;

            let FrequenciaAtual = 0,
                FrequenciaPorAtual = 0,
                vetorGrafico = [],
                objMediana = {};
            //Escrever a tabela
            let js = 1,
                fi;
            for (let z in intervalos) {
                let linhaAtual = linhas[js];
                linhaAtual.innerHTML = `<td>${z} |-- ${intervalos[z]}</td>`;
                fi = 0;
                for (let s in obejeto) {
                    if (parseInt(s) >= parseInt(z) && parseInt(s) < intervalos[z]) {
                        fi += obejeto[s];
                    }
                }
                linhaAtual.innerHTML += `<td>${fi}</td>
                    <td>${(fi / totalFrequencia * 100).toFixed(2)}</td>
                    <td>${FrequenciaAtual += fi}</td>
                    <td>${(FrequenciaPorAtual += fi / totalFrequencia * 100).toFixed(2)}</td>`;
                objMediana[`${z}|--${intervalos[z]}`] = [FrequenciaAtual, fi];
                let objGrafico = {};
                objGrafico.label = `${z} |-- ${intervalos[z]}`;
                objGrafico.value = (fi / totalFrequencia * 100).toFixed(2);
                vetorGrafico.push(objGrafico);
                js++
            }
            let pontosMedio = {};
            let jq = 1;
            for (let ks in intervalos) {
                pontosMedio[`${((parseFloat(ks) + intervalos[ks]) / 2).toFixed(2)}`] = parseInt(linhas[jq].getElementsByTagName('td')[1].innerText);
                jq++
            }
            // Resultados estatísticos.
            grupoResults.innerHTML += `
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-1"></div>
                        <div class="col-md-10">
                            <div class="card my-3 border-info" style="width: auto;">
                                <div class="card-header bg-dark text-white text-center" style="font-weight: bold;">Resultados Estatísticos</div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item text-center bg-success text-white">Média: ${media(pontosMedio, vetorTabelas[i].dados.length)}</li>
                                    <li class="list-group-item text-center bg-success text-white">Moda: ${moda(pontosMedio)}</li>
                                    <li class="list-group-item text-center bg-success text-white">Mediana: ${medianaContinua(vetorTabelas[i].dados.length, objMediana, Ic)}</li>
                                    <li class="list-group-item text-center bg-success text-white">Medida Separatriz ${vetorTabelas[i].separatriz * 100}%: ${medidaSeparatrizContinua(vetorTabelas[i].dados.length, objMediana, Ic, vetorTabelas[i].separatriz)}</li>
                                    <li class="list-group-item text-center bg-success text-white">Desvio Padrão ${vetorTabelas[i].tipoAna}: ${desvioPadrao(pontosMedio, media(pontosMedio, vetorTabelas[i].dados.length), vetorTabelas[i].tipoAna)}</li>
                                    <li class="list-group-item text-center bg-success text-white">Coeficiente de Variação ${coefiVaria(desvioPadrao(pontosMedio, media(pontosMedio, vetorTabelas[i].dados.length), vetorTabelas[i].tipoAna), media(pontosMedio, vetorTabelas[i].dados.length))}</li>
                                </ul>
                            </div>
                        </div>
                <div class="col-md-1"></div>    
                </div>
            </div>
            `;
            //Gráfico
            FusionCharts.ready(function() {
                let fusioncharts = new FusionCharts({
                    type: 'column2d',
                    renderAt: `chart${vetorTabelas[i].nome}`,
                    width: '100%',
                    height: '400',
                    dataFormat: 'json',
                    dataSource: {
                        "chart": {
                            "caption": vetorTabelas[i].nome,
                            "xAxisName": "Intervalos",
                            "yAxisName": "FR%",
                            "numberSuffix": "%",
                            "theme": "candy",
                            "plotSpacePercent": "0",
                            "useRoundEdges": "1"
                        },
                        "data": vetorGrafico
                    }
                });
                fusioncharts.render();
            });
            grupoResults.innerHTML += `
            <div class="container-fluid my-3">
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10">
                        <div id="chart${vetorTabelas[i].nome}"></div>
                    </div>
                    <div class="col-md-1"></div>
                </div>
            </div>`
        }
    }

    document.getElementById('ScrollspyRow').innerHTML += `
    <div class="container-fluid my-3">
        <a href="descritiva.html" class="btn btn-success" style="width: 100%">Voltar</a>
    </div>`;

    //Atualizador do ScrollSpy
    $('[data-spy="scroll"]').each(function() {
        var $spy = $(this).scrollspy('refresh')
    });

}

// Função onde é importado o arquivo XLS. Será chamado quando o valor do input type="file" for mudado.
$('#arquivo').change(function(e) {
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
        document.getElementById('nomeVariavel').value = vetorImport[0].nome;
        let str = '';
        for (let i = 0; i < vetorImport[0].dados.length - 1; i++) {
            str += `${vetorImport[0].dados[i]};`;
        }
        str += vetorImport[0].dados[vetorImport[0].dados.length - 1];
        document.getElementById('entrarDados').value = str;
        // A cada clique no botão salvar o sistema irá mostrar na tela a próxima variável para terminar de;
        // ser cadastrada. Para isso é usado a função importando();
        document.getElementById('addVar').setAttribute('onclick', 'importando(vetorImport); ativarBotaoInserir();');
        let importado = document.getElementById('arquivo').files[0].name;
        document.getElementsByClassName('toast-body')[0].innerText = `O arquivo "${importado}" foi importado com sucesso!`;
        // Cria o cartão de notificação e o mostra na tela. 
        $('.toast').toast({
            animation: true,
            autohide: true,
            delay: 6000
        });
        $('#notificaImport').toast('show')
    };
    reader.readAsArrayBuffer(f);
})

function desvioPadrao(dados, media, tipo) {
    let somaNumerador = 0,
        somaDenominador = 0
    for (let i in dados) {
        somaNumerador += (parseInt(i) - media) ** 2 * dados[i];
        somaDenominador += dados[i];
    }

    if (tipo == "População") {
        return (Math.sqrt(somaNumerador / somaDenominador)).toFixed(2);
    } else if (tipo == "Amostra") {
        return (Math.sqrt(somaNumerador / (somaDenominador - 1))).toFixed(2);
    }
}

function coefiVaria(DP, media) {
    return `${(DP / media * 100).toFixed(2)} %`;
}

// Todas as variáveis importadas do XLS virão para cá. A cada clique no botão salvar o sistema mostrará;
// na tela a próxima variável para ela ter seu cadastro finalizado. Ao final, ele retorna o botão salvar com;
// seu valor inicial, que é a função adicionarVariavel().
function importando(vet) {
    adicionarVariavel(tabelas);
    if (tabelas[tabelas.length - 1].tipoVar == "Qualitativa Ordinal") {
        document.getElementById('previewDataButton').setAttribute('disabled', 'disabled');
    } else {
        ativarBotaoVerificar();
    }

    vet.shift();
    if (vet.length > 0) {
        document.getElementById('nomeVariavel').value = vetorImport[0].nome;
        let str = '';
        for (let i = 0; i < vetorImport[0].dados.length - 1; i++) {
            str += `${vetorImport[0].dados[i]};`;
        }
        str += vetorImport[0].dados[vetorImport[0].dados.length - 1];
        document.getElementById('entrarDados').value = str;
    } else {
        document.getElementById('addVar').setAttribute('onclick', 'adicionarVariavel(tabelas); ativarBotaoInserir();');
    }
}

// Função que bloqueia o botão de inserir dados caso haja dados sem preenchimento na tela.
function ativarBotaoInserir() {
    let nome = document.getElementById('nomeVariavel').value;
    let tipoVar = document.getElementById('TipoVar').value;
    let tipoAna = document.getElementById('TipoDeAnalise').value;
    let dados = document.getElementById('entrarDados').value;
    let botao = document.getElementById('addVar');
    if (nome != "" && tipoVar != "" && tipoAna && dados != "") {
        botao.removeAttribute('disabled');
    } else {
        botao.setAttribute('disabled', 'disabled');
    }
}

// Função que bloqueia o botão de verificar dados caso não haja variáveis inseridas no sistema. 
function ativarBotaoVerificar() {
    if (tabelas.length == 0) {
        document.getElementById('previewDataButton').setAttribute('disabled', 'disabled');
    } else {
        document.getElementById('previewDataButton').removeAttribute('disabled');
    }
}

// Função que bloqueia o botão salvar do cartão de graus da variável ordinal, caso haja graus preenchidos de;
// maneira incorreta.
function ativarBotaoSalvar() {
    let verificadores = [];
    let graus = document.getElementsByClassName('graus');
    let botao = document.getElementById('salvarGraus');
    for (let i = 0; i < graus.length; i++) {
        if (graus[i].value != "") {
            verificadores.push(true);
        } else {
            verificadores.push(false);
        }
    }
    if (vetorBool(verificadores)) {
        botao.removeAttribute('disabled');
    } else {
        botao.setAttribute('disabled', 'disabled');
    }
}

// Função auxiliar para a função ativarBotaoSalvar().
function grausIguais(Grauses) {
    let resultadoses = [];

    for (let i = 0; i < Grauses.length; i++) {
        for (let j = 0; j < Grauses.length; j++) {
            if (Grauses[i] == Grauses[j]) {
                resultadoses.push(true);
            }
        }
    }
    return resultadoses;
}

// Função auxiliar para a função ativarBotaoSalvar().
function grausNegativos(Grauses) {
    for (let i = 0; i < Grauses.length; i++) {
        if (Grauses[i] < 0) {
            return true;
        }
    }
    return false;
}

// Funções da tela de Probabilidade.

// Função que bloqueia o botão de salvar binominal caso sejam inseridos dados incorretos.
function ativarBotaoBinominal() {
    let nome = document.getElementById('amostra').value;
    let tipoVar = document.getElementById('sucesso').value;
    let tipoAna = document.getElementById('fracasso').value;
    let dados = document.getElementById('evento').value;
    let botao = document.getElementById('binominalbotao');
    let valorSu = parseInt(tipoVar);
    let valorFr = parseInt(tipoAna);

    if (nome != "" && tipoVar != "" && tipoAna && dados != "") {
        if (valorSu + valorFr == 100) {
            botao.removeAttribute('disabled');
        } else {
            botao.setAttribute('disabled', 'disabled');
        }
    } else {
        botao.setAttribute('disabled', 'disabled');

    }

}

// Função que bloqueia o botão de salvar uniforme caso sejam inseridos dados incorretos.
function ativarBotaoUniforme() {
    let nome = document.getElementById('pmaximo').value;
    let tipoVar = document.getElementById('pminimo').value;
    let dados = document.getElementById('entrarDados').value;
    let botao = document.getElementById('addVar');
    if (nome != "" && tipoVar != "" && dados != "") {
        botao.removeAttribute('disabled');
    } else {
        botao.setAttribute('disabled', 'disabled');
    }
}

function ativarBotaoRF() {
    let nomeX = document.getElementById('nomeX').value;
    let nomeY = document.getElementById('nomeY').value;
    let valoresX = document.getElementById('valoresX').value;
    let valoresY = document.getElementById('valoresY').value;
    let botao = document.getElementById('ativar');

    if (nomeX != "" && nomeY != "" && valoresX != "" && valoresY != "") {
        botao.removeAttribute('disabled');
    } else {
        botao.setAttribute('disabled', 'disabled');
    }
}

function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}