// obj = {
//     nome: "Idade",
//     tipoAnalise: "População",
//     separatriz: 0.1,
//     tipoVariavel: "QC",
//     dados: [12, 23, 23, 12, 23, 21]
// }
let tabelas = [];

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
    obj.separatriz = document.getElementById('MedidaValor').innerText;
    obj.dados = (document.getElementById('entrarDados').value).split(';');

    // Transforma em número se for possível
    for (let i = 0; i < obj.dados.length; i++) {
        if (!isNaN(parseInt(obj.dados[i]))) {
            obj.dados[i] = parseInt(obj.dados[i]);
        }
    }

    //Popula a quantidade de variedades dentro dos dados para fazer a verificação das variáveis.
    Obejeto = separador(obj.dados);
    let aux = 0
    for (let i in Obejeto) {
        aux++
    }

    
    // if (vetorNaN(obj.dados) && ) {
    //     obj.tipoVar = 'Qualitativa Nominal';
    // } else if (aux > 7) {
    //     obj.tipoVar = 'Quantitativa Continua';
    // } else if (aux <= 7) {
    //     obj.tipoVar = 'Quantitativa Discreta';
    // } else {
    //     obj.tipoVar = 'Qualitativa Ordinal';
    // }

    vetorTabelas.push(obj);
    console.log(vetorTabelas);
    document.getElementById('nomeVariavel').value = "";
    document.getElementById('entrarDados').value = "";
}