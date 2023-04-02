
function start() {
    // Função que calcula os primeiros 10 números da sequência de Fibonacci
    function fibonacci() {
        var fib = [0, 1];
        for (var i = 2; i < 11; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib;
    }

    // Escreve os números da sequência de Fibonacci na página HTML
    var fib = fibonacci();
    var list = document.getElementById("fibonacci");
    for (var i = 1; i < 11; i++) {
        var item = document.createElement("li");
        item.appendChild(document.createTextNode(fib[i]));
        list.appendChild(item);
    }

}

