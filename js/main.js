let tabelas = [];
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
            <input type="number" class="form-control text-center" id="grau${i}" placeholder="1, 2, 3"></div></li>`;
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
    let cabecalho = document.getElementById('linhaCabecalhoPreview').innerHTML = '';
    let corpo = document.getElementById('corpoTabelaPreview').innerHTML = '';
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

function calcular(vetorTabelas) {
    document.getElementsByTagName('header')[0].innerHTML = `<h1 class="text-center">Resultados</h1>`;
    document.getElementById('ocultar').innerHTML = '';
    let grupoVar = document.getElementById('grupoVar');
    document.getElementById('results').innerHTML = '<div data-spy="scroll" data-target="#grupoVar" data-offset="0" class="scrollspy" id="resultList"></div>';
    let grupoResults = document.getElementById('resultList');
    for (let i = 0; i < vetorTabelas.length; i++) {
        if (vetorTabelas[i].tipoVar == "Qualitativa Nominal") {
            vetorTabelas[i].dados.sort();
            let obejeto = separador(vetorTabelas[i].dados);
            console.log(obejeto);
            grupoVar.innerHTML += `<a class="list-group-item list-group-item-action" href="#${vetorTabelas[i].nome}">${vetorTabelas[i].nome}</a>`;
            grupoResults.innerHTML += `<h4 id="${vetorTabelas[i].nome}">${vetorTabelas[i].nome}</h4>
            <table class="table table-hover table-dark table-sm table-bordered table-striped text-center" id="Tabela${vetorTabelas[i].nome}">
                <thead class="thead-light">
                    <tr id="linhaCabecalho">

                    </tr>
                </thead>
                <tbody id="corpoTabela">

                </tbody>
            </table>`;
            let totalLinhas = 0;
            let totalFrequencia = 0;
            for (let i in obejeto) {
                totalLinhas++
                totalFrequencia += obejeto[i];
            }
            let tabelaAtual = document.getElementById(`Tabela${vetorTabelas[i].nome}`)
            let cabecalho = tabelaAtual.getElementsByTagName('tr')[0];
            let corpo = tabelaAtual.getElementsByTagName('tbody')[0];

            //Escreve todas as linha da tabela
            for (let i = 1; i <= totalLinhas; i++) {
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
            let js = 1
            for (let i in obejeto) {
                let linhaAtual = linhas[js];
                    linhaAtual.innerHTML = `<td>${i}</td>
                                            <td>${obejeto[i]}</td>
                                            <td>${(obejeto[i]/totalFrequencia * 100).toFixed(2)}</td>
                                            <td>${FrequenciaAtual += obejeto[i]}</td>
                                            <td>${(FrequenciaPorAtual += obejeto[i]/totalFrequencia * 100).toFixed(2)}</td>`;
                js++
            }
        }
    }
}