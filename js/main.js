// obj = {
//     nome: "Idade",
//     tipoAnalise: "População",
//     separatriz: 0.1,
//     tipoVariavel: "QC",
//     dados: [12, 23, 23, 12, 23, 21]
// }
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
        }
    }

    //Popula a quantidade de variedades dentro dos dados para fazer a verificação das variáveis.
    // Obejeto = separador(obj.dados);
    // let aux = 0
    // for (let i in Obejeto) {
    //     aux++
    // }

    //Verifica qual o tipo de variável
    // if (vetorNaN(obj.dados) && ) {
    //     obj.tipoVar = 'Qualitativa Nominal';
    // } else if (!vetorNaN(obj.dados) && aux > 7) {
    //     obj.tipoVar = 'Quantitativa Continua';
    // } else if (!vetorNaN(obj.dados) && aux <= 7) {
    //     obj.tipoVar = 'Quantitativa Discreta';
    // } else {
    //     obj.tipoVar = 'Qualitativa Ordinal';
    // }
    obj.tipoVar = document.getElementById('TipoVar').value
    vetorTabelas.push(obj);
    console.log(vetorTabelas);
    document.getElementById('nomeVariavel').value = "";
    document.getElementById('entrarDados').value = "";
    document.getElementById('TipoVar').value = "Escolha...";
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
                linhaAtual.innerHTML += `<td>${vetorTabelas[j].dados[i - 1]}</td>`
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