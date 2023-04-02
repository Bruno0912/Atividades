function somarNumeros() {
    // Inicializa a variável de soma com 0
    var soma = 0;
    // Inicializa a string de resultado com uma mensagem
    var resultado = "A soma dos números de 1 a 1000 é: ";
    // Loop pelos números de 1 a 1000 e soma cada um à variável de soma
    for (var i = 1; i <= 1000; i++) {
        soma += i;
        // Adiciona o número atual à string de resultado
        resultado += i;
        // Adiciona um sinal de adição entre os números, exceto para o último número
        if (i < 1000) {
            resultado += " + ";
        }
    }
    // Adiciona o total à string de resultado
    resultado += "Total: " + soma;
    // Exibe a string de resultado na janela do navegador
    //document.write(resultado);
    alert(resultado);
}