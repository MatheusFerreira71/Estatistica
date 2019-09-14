//Função para verificar RA e CPF são validos
function validarCPF(cpf, ra) {
    //verificar se o Ra é valido
    if (ra.length != 13) {
        console.log('false')
        return false;
    }
    // if conferir para verificar se o CPF não é uma sequencia '00000000000' 
    if (cpf == "00000000000") {
        return false;
        console.log('falso')
    }
    // Variaveis para acumular as somas e as multiplicações 
    let soma1 = 0
    let soma2 = 0
    //For é usado para fazer as somas e as multiplicações 
    for (let i = 1; i < 11; i++) {
        if (i < 10) {
            soma1 += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }
        soma2 += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    console.log(soma1)
    console.log(soma2)
    //Buscar o resto das multiplicações e somas 
    let resto1 = (soma1 * 10) % 11
    let resto2 = (soma2 * 10) % 11
    console.log(resto1)
    console.log(resto2)
    //Comparar se é 10 ou 11, para atribuir o número 0
    if ((resto1 == 10) || (resto1 == 11)) {
        resto1 = 0
    }
    if ((resto2 == 10) || (resto2 == 11)) {
        resto2 = 0
    }
    //Verificar se o valor dos digitos é correto
    if (resto1 == parseInt(cpf.substring(9, 10)) & (resto2 == parseInt(cpf.substring(10, 11)))) {
        console.log(true);
        return true;

    } else {
        console.log(false);
        return false;

    }
}
//cpf = document.getElementById('senha')
//ra = documetn.getElementById('login')
cpf = '35034767848'
ra = '1090481821032'
let res = validarCPF(cpf, ra)
if (res == true) {
    window.location.replace("_login\Estatistica\index.html")
    alert('okay')
} else {
    //window.location.reload()
    aler('okay1')
}