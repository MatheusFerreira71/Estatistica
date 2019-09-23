let tabelas = [], vetorImport = [], Obejetos;
let barra = document.getElementById('RangeSeparatriz');

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
    let aux = 0, nome = [];
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
        somatorio += parseInt(i) * parseInt(dados[i]);
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
    let controle = 0, vetorIntervalos;
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
    let posicoes = [], medianas = [];
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
    let controle = 0, vetorIntervalos;
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

        for (let i in Obejeto) {
            vars.innerHTML += `<li class="list-group-item border-info">${i}<div class="form-group">
            <input type="number" min="1" class="form-control text-center" id="grau${i}" placeholder="1, 2, 3"></div></li>`;
        }

        Obejetos = Obejeto;

        document.getElementById('cardBordado').classList.add('border-info')
        vars.innerHTML += `<li class="list-group-item border-info">
                                <button class="btn btn-success" onclick="tabelaOrdinal(tabelas, Obejetos);" style="width: 100%;">Salvar</button>
                            </li>`;

        card.getElementsByTagName('div')[0].classList.add('border-info');
        vetorTabelas.push(obj);
        document.getElementById('nomeVariavel').value = "";
        document.getElementById('entrarDados').value = "";
        document.getElementById('TipoVar').value = "Escolha...";
    } else {
        vetorTabelas.push(obj);
        document.getElementById('nomeVariavel').value = "";
        document.getElementById('entrarDados').value = "";
        document.getElementById('TipoVar').value = "Escolha...";
    }
}

function tabelaOrdinal(vetorTabelas, Objetante) {
    document.getElementsByTagName('header')[0].classList.add('my-3');
    let grauObj = {};
    for (let i in Objetante) {
        grauObj[`${i}`] = document.getElementById(`grau${i}`).value;
    }
    vetorTabelas[vetorTabelas.length - 1].graus = grauObj;
    document.getElementById('cardBordado').innerHTML = '';
}

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

function resetPreview() {
    document.getElementById('linhaCabecalhoPreview').innerHTML = '';
    document.getElementById('corpoTabelaPreview').innerHTML = '';
}

function mudarSeparatriz() {
    let seletor = document.getElementById('Separatrizes');
    let labelResultado = document.getElementById('MedidaValor');
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

function mudarValorBarra() {
    let labelResultado = document.getElementById('MedidaValor');
    labelResultado.innerText = barra.value + '%';
}

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
    let grupoVar = document.getElementById('grupoVar');
    grupoVar.style = "border-width: 2px !important; border-style: solid !important; border-color: #17A2B8 !important; border-radius: 7px !important;"
    document.getElementById('results').innerHTML = '<div data-spy="scroll" data-target="#grupoVar" data-offset="0" class="scrollspy mx-3" id="resultList"></div>';
    document.getElementById('results').style = "border-width: 2px !important; border-style: solid !important; border-color: #17A2B8 !important; border-radius: 10px !important"
    let grupoResults = document.getElementById('resultList');

    for (let i = 0; i < vetorTabelas.length; i++) {
        if (vetorTabelas[i].tipoVar == "Qualitativa Nominal") {
            vetorTabelas[i].dados.sort();
            let obejeto = separador(vetorTabelas[i].dados);
            console.log(obejeto);
            grupoVar.innerHTML += `<a class="list-group-item list-group-item-action" style = "font-weight: bold;" href="#${vetorTabelas[i].nome}">${vetorTabelas[i].nome}</a>`;
            grupoResults.innerHTML += `<h4 id="${vetorTabelas[i].nome}" class="text-center">${vetorTabelas[i].nome}</h4>`;
            grupoResults.innerHTML += `
                <div class="table-responsive">
                    <table class="table table-hover table-danger table-sm table-bordered table-striped text-center" id="Tabela${vetorTabelas[i].nome}">
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
                                    <th scope="col">FR%</th>
                                    <th scope="col">FAC</th>
                                    <th scope="col">FAC%</th>`;
            let FrequenciaAtual = 0, FrequenciaPorAtual = 0;
            //Escreve a Tabela
            let js = 1, objMediana = {}, vetorGrafico = [];
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
            FusionCharts.ready(function () {
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
            console.log(obejeto);
            grupoVar.innerHTML += `<a class="list-group-item list-group-item-action" style = "font-weight: bold;" href="#${vetorTabelas[i].nome}">${vetorTabelas[i].nome}</a>`;
            grupoResults.innerHTML += `<h4 id="${vetorTabelas[i].nome}" class="text-center">${vetorTabelas[i].nome}</h4>`;
            grupoResults.innerHTML += `
                <div class="table-responsive">
                    <table class="table table-hover table-danger table-sm table-bordered table-striped text-center" id="Tabela${vetorTabelas[i].nome}">
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
                                    <th scope="col">FR%</th>
                                    <th scope="col">FAC</th>
                                    <th scope="col">FAC%</th>`;
            let FrequenciaAtual = 0, FrequenciaPorAtual = 0, vetorGrafico = [];
            //Escreve a Tabela
            let js = 1, objMediana = {};
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
            grupoResults.innerHTML += `
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2"></div>
                        <div class="col-md-8">
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
                <div class="col-md-2"></div>    
                </div>
            </div>
            `;

            //Gráfico
            FusionCharts.ready(function () {
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
            console.log(obejeto);
            grupoVar.innerHTML += `<a class="list-group-item list-group-item-action" style = "font-weight: bold;" href="#${vetorTabelas[i].nome}">${vetorTabelas[i].nome}</a>`;
            grupoResults.innerHTML += `<h4 id="${vetorTabelas[i].nome}" class="text-center">${vetorTabelas[i].nome}</h4>`;
            grupoResults.innerHTML += `
                <div class="table-responsive">
                    <table class="table table-hover table-danger table-sm table-bordered table-striped text-center" id="Tabela${vetorTabelas[i].nome}">
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
                                    <th scope="col">FR%</th>
                                    <th scope="col">FAC</th>
                                    <th scope="col">FAC%</th>`;
            let FrequenciaAtual = 0, FrequenciaPorAtual = 0;

            //Escrevendo a tabela.
            let js = 1, aux, objMediana = {}, vetorGrafico = [];

            for (let k in obejeto) {
                let linhaAtual = linhas[js];
                let maiorGrau;
                aux = 0;

                //Pegando o maior grau
                for (let j in vetorTabelas[i].graus) {
                    if (vetorTabelas[i].graus[j] > aux) {
                        aux = vetorTabelas[i].graus[j];
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
            grupoResults.innerHTML += `
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2"></div>
                        <div class="col-md-8">
                            <div class="card my-3 border-info" style="width: auto;">
                                <div class="card-header bg-dark text-white text-center" style="font-weight: bold;">Resultados Estatísticos</div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item text-center bg-success text-white">Moda: ${moda(obejeto)}</li>
                                    <li class="list-group-item text-center bg-success text-white">Mediana: ${mediana(objMediana, vetorTabelas[i].dados.length)}</li>
                                    <li class="list-group-item text-center bg-success text-white">Medida Separatriz ${vetorTabelas[i].separatriz * 100}%: ${medidaSeparatriz(vetorTabelas[i].separatriz, objMediana, vetorTabelas[i].dados.length)}</li>
                                </ul>
                            </div>
                        </div>
                <div class="col-md-2"></div>    
                </div>
            </div>
            `;
            //Gráfico
            FusionCharts.ready(function () {
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
            console.log(obejeto);
            grupoVar.innerHTML += `<a class="list-group-item list-group-item-action" style = "font-weight: bold;" href="#${vetorTabelas[i].nome}">${vetorTabelas[i].nome}</a>`;
            grupoResults.innerHTML += `<h4 id="${vetorTabelas[i].nome}" class="text-center">${vetorTabelas[i].nome}</h4>`;
            grupoResults.innerHTML += `
                <div class="table-responsive">
                    <table class="table table-hover table-danger table-sm table-bordered table-striped text-center" id="Tabela${vetorTabelas[i].nome}">
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
            let maxVal = 0, minVal;
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

            let ultIntervalo = minVal, intervalos = {};
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
                                    <th scope="col">FR%</th>
                                    <th scope="col">FAC</th>
                                    <th scope="col">FAC%</th>`;

            let FrequenciaAtual = 0, FrequenciaPorAtual = 0, vetorGrafico = [], objMediana = {};
            //Escrever a tabela
            let js = 1, fi;
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
            console.log(objMediana)
            let pontosMedio = {};
            let jq = 1;
            for (let ks in intervalos) {
                pontosMedio[`${parseInt(((parseInt(ks) + intervalos[ks]) / 2).toFixed(2))}`] = parseInt(linhas[jq].getElementsByTagName('td')[1].innerText);
                jq++
            }
            console.log(pontosMedio)
            grupoResults.innerHTML += `
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2"></div>
                        <div class="col-md-8">
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
                <div class="col-md-2"></div>    
                </div>
            </div>
            `;
            //Gráfico
            FusionCharts.ready(function () {
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

    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    });
}

$('#arquivo').change(function (e) {
    let files = e.target.files, f = files[0];
    let reader = new FileReader();
    let celulas_Json = {};

    reader.onload = function (e) {
        let data = new Uint8Array(e.target.result);
        let arquivo_completo = XLSX.read(data, { type: 'array', cellText: true, cellDates: true });
        //propriedades do arquivo
        // poe um if aq caso vc queira q, caso so um, retorne so o objeto, ou so pega o CELULAS_JSON E JA ERA
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
                if (vetorNaN(dados)) {
                    for (let hs = 0; hs < dados.length; hs++) {
                        dados[hs] = dados[hs].toUpperCase();
                    }
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
        document.getElementById('addVar').setAttribute('onclick', 'importando(vetorImport)');
        let importado = document.getElementById('arquivo').files[0].name;
        document.getElementsByClassName('toast-body')[0].innerText = `O arquivo "${importado}" foi importado com sucesso!`;
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

    let somaNumerador = 0, somaDenominador = 0
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

function importando(vet) {
    adicionarVariavel(tabelas);

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
        document.getElementById('addVar').setAttribute('onclick', 'adicionarVariavel(tabelas)');
    }
}