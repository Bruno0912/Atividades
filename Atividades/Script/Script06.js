//script atividade 06
let alturaArr = []
let sexoArr = []
let cont = 0
let masculino = 0
let feminino = 0
let alturaDigitado
let sexoDigitado

function verificaCampoVazio() {

    alturaDigitado = document.getElementById("txtAltura").value
    if (alturaDigitado != '' ){
        verificaCampoSomenteNumero()
    }else{
        alert('Campo Altura Vazio')
    }
}

function verificaCampoSomenteNumero(){
    let retorno = alturaDigitado.replace(/^-?\d*(\.\d+)?$/, '')

    if (!retorno > 0) {
        verificaRadioEscolhido()        
    }else{
        alert('Formato Incorreto!')
    }

}

function verificaRadioEscolhido(){
    let radio = document.getElementById("radioM")

    if (radio.checked){
        sexoDigitado = 'Masculino'
        masculino ++
    }else{
        sexoDigitado = 'Feminino'
        feminino ++
    }
    incluirDadosArray()
}

function incluirDadosArray() {

    document.getElementById('txtAltura').value =''
    if (cont < 5){
        alturaArr.push(alturaDigitado)
        sexoArr.push(sexoDigitado)
        cont++
    }
    if (cont === 5){
        document.getElementById('botaoInserir').disabled = true
        verificaMaiorAltura()
    }     
    atualizaDadosTela()

    console.log('altura: '+ alturaArr)
    console.log('sexo: '+ sexoArr)
    
}

function verificaMaiorAltura(){

    let maior = 0
    let index

    for (i = 0; i< 5; i++){

        if (alturaArr[i] > maior){
            maior = alturaArr[i]
            index = i
        }
    }

    document.querySelector("#msg").innerHTML = 'A maior altura é de: ' + maior + ', e pertence a uma pessoa do sexo: ' + sexoArr[index]
    alert('Foram digitados ' + masculino + ' pessoas do sexo masculino e ' + feminino + ' pessoas do sexo feminino')
    

}

function atualizaDadosTela(){

    document.querySelector("#qtdM").innerHTML = masculino
    document.querySelector("#qtdF").innerHTML = feminino

    document.querySelector("#alturaDigitado").innerHTML = alturaArr
    document.querySelector("#sexoDigitado").innerHTML = sexoArr

}