function calcularTabuada() {
    // Obtém o número digitado pelo usuário
    var numero = parseInt(document.getElementById("numtab").value);
    // Verifica se o número está dentro do intervalo correto
    if (numero < 1 || numero > 10) {
        alert("Por favor, digite um número inteiro de 1 a 10.");
        return;
    }
    // Limpa o conteúdo do elemento de resultado
    document.getElementById("resultado").innerHTML = "";
    // Loop pelos números de 1 a 10 e calcula a tabuada
    for (var i = 1; i <= 10; i++) {
        // Calcula o produto
        var produto = numero * i;
        // Cria um elemento de parágrafo para exibir a linha da tabuada
        var p = document.createElement("p");
        // Define o conteúdo do parágrafo como a linha da tabuada
        p.innerHTML = numero + " x " + i + " = " + produto;
        // Adiciona o parágrafo à página
        document.getElementById("resultado").appendChild(p);
    }
}