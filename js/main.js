let tabelas = [];
let barra = document.getElementById('RangeSeparatriz');

Highcharts.setOptions({
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, color],
                [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    })
});

Highcharts.theme = {
    colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
        '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
    chart: {
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
                [0, '#2a2a2b'],
                [1, '#3e3e40']
            ]
        },
        style: {
            fontFamily: '\'Unica One\', sans-serif'
        },
        plotBorderColor: '#606063'
    },
    title: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase',
            fontSize: '20px'
        }
    },
    subtitle: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase'
        }
    },
    xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            style: {
                color: '#A0A0A3'

            }
        }
    },
    yAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
            color: '#F0F0F0'
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                color: '#F0F0F3',
                style: {
                    fontSize: '13px'
                }
            },
            marker: {
                lineColor: '#333'
            }
        },
        boxplot: {
            fillColor: '#505053'
        },
        candlestick: {
            lineColor: 'white'
        },
        errorbar: {
            color: 'white'
        }
    },
    legend: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        itemStyle: {
            color: '#E0E0E3'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        },
        title: {
            style: {
                color: '#C0C0C0'
            }
        }
    },
    credits: {
        style: {
            color: '#666'
        }
    },
    labels: {
        style: {
            color: '#707073'
        }
    },

    drilldown: {
        activeAxisLabelStyle: {
            color: '#F0F0F3'
        },
        activeDataLabelStyle: {
            color: '#F0F0F3'
        }
    },

    navigation: {
        buttonOptions: {
            symbolStroke: '#DDDDDD',
            theme: {
                fill: '#505053'
            }
        }
    },

    // scroll charts
    rangeSelector: {
        buttonTheme: {
            fill: '#505053',
            stroke: '#000000',
            style: {
                color: '#CCC'
            },
            states: {
                hover: {
                    fill: '#707073',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                },
                select: {
                    fill: '#000003',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                }
            }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
            backgroundColor: '#333',
            color: 'silver'
        },
        labelStyle: {
            color: 'silver'
        }
    },

    navigator: {
        handles: {
            backgroundColor: '#666',
            borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
            color: '#7798BF',
            lineColor: '#A6C7ED'
        },
        xAxis: {
            gridLineColor: '#505053'
        }
    },

    scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
    }
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

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

function mediana(tipoVar, dados, totalFrequencia) {
    if (tipoVar == 'Qualitativa Nominal' || tipoVar == 'Qualitativa Ordinal' || tipoVar == 'Quantitativa Discreta') {
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
    } else if (tipoVar == 'Quantitatíva Contínua') {

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

        document.getElementById('cardBordado').classList.add('border-info')
        vars.innerHTML += `<li class="list-group-item border-info">
                                <button class="btn btn-success" onclick="tabelaOrdinal(tabelas);" style="width: 100%;">Salvar</button>
                            </li>`;

        card.getElementsByTagName('div')[0].classList.add('border-info');
    } else {
        vetorTabelas.push(obj);
        console.log(vetorTabelas);
        document.getElementById('nomeVariavel').value = "";
        document.getElementById('entrarDados').value = "";
        document.getElementById('TipoVar').value = "Escolha...";
    }
}

function tabelaOrdinal(vetorTabelas) {
    document.getElementsByTagName('header')[0].classList.add('my-3');
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

    let Obejeto = separador(obj.dados);
    let grauObj = {};
    for (let i in Obejeto) {
        grauObj[`${i}`] = document.getElementById(`grau${i}`).value;
    }
    obj.graus = grauObj;
    document.getElementById('nomeVariavel').value = "";
    document.getElementById('entrarDados').value = "";
    document.getElementById('TipoVar').value = "Escolha...";
    vetorTabelas.push(obj);
    console.log(vetorTabelas);
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
    grupoVar.style = "border-width: 2px !important; border-style: solid !important; border-color: #17A2B8 !important; border-radius: 7px !important"
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
                objGrafico.name = z;
                objGrafico.y = parseFloat((obejeto[z] / totalFrequencia * 100).toFixed(2));
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
                                    <li class="list-group-item text-center bg-success text-white">Mediana: ${mediana(vetorTabelas[i].tipoVar, objMediana, vetorTabelas[i].dados.length)}</li>
                                </ul>
                            </div>
                        </div>
                <div class="col-md-1"></div>    
                </div>
            </div>
            <div class="container-fluid my-3">
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10">
                        <div id="chart${vetorTabelas[i].nome}" style="height: 400px; width: auto;"></div>
                    </div>
                    <div class="col-md-1"></div>
                </div>
            </div>
            `;

            //Gráfico
            Highcharts.chart(`chart${vetorTabelas[i].nome}`, {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie',
                    options3d: {
                        enabled: true,
                        alpha: 45,
                        beta: 0
                    }
                },
                title: {
                    text: `${vetorTabelas[i].nome}`
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true,
                        depth: 35
                    }
                },
                series: [{
                    name: 'FR%',
                    colorByPoint: true,
                    data: vetorGrafico
                }]
            });

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
            let FrequenciaAtual = 0, FrequenciaPorAtual = 0;
            //Escreve a Tabela
            let js = 1, objMediana = {};
            for (let z in obejeto) {
                let linhaAtual = linhas[js];
                linhaAtual.innerHTML = `<td>${z}</td>
                                            <td>${obejeto[z]}</td>
                                            <td>${(obejeto[z] / totalFrequencia * 100).toFixed(2)}</td>
                                            <td>${FrequenciaAtual += obejeto[z]}</td>
                                            <td>${(FrequenciaPorAtual += obejeto[z] / totalFrequencia * 100).toFixed(2)}</td>`;
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
                                    <li class="list-group-item text-center bg-success text-white">Mediana: ${mediana(vetorTabelas[i].tipoVar, objMediana, vetorTabelas[i].dados.length)}</li>
                                </ul>
                            </div>
                        </div>
                <div class="col-md-2"></div>    
                </div>
            </div>
            `;
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
            let js = 1, aux, objMediana = {};

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
                                    <li class="list-group-item text-center bg-success text-white">Mediana: ${mediana(vetorTabelas[i].tipoVar, objMediana, vetorTabelas[i].dados.length)}</li>
                                </ul>
                            </div>
                        </div>
                <div class="col-md-2"></div>    
                </div>
            </div>
            `;
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

            let FrequenciaAtual = 0, FrequenciaPorAtual = 0;
            //Escrever a tabela
            let js = 1, fi;
            for (let z in intervalos) {
                let linhaAtual = linhas[js];
                linhaAtual.innerHTML = `<td>${z} |-- ${intervalos[z]}</td>`;
                fi = 0;
                for (let s in obejeto) {
                    if (s >= z && s < intervalos[z]) {
                        fi += obejeto[s];
                    }
                }
                linhaAtual.innerHTML += `<td>${fi}</td>
                    <td>${(fi / totalFrequencia * 100).toFixed(2)}</td>
                    <td>${FrequenciaAtual += fi}</td>
                    <td>${(FrequenciaPorAtual += fi / totalFrequencia * 100).toFixed(2)}</td>`;
                js++
            }
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
                                    <li class="list-group-item text-center bg-success text-white">Mediana: </li>
                                </ul>
                            </div>
                        </div>
                <div class="col-md-2"></div>    
                </div>
            </div>
            `;

        }
    }
    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    })
}
