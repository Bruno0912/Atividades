function calcularTabuada() {
    
    var numero = parseInt(document.getElementById("numtab").value);
   
    if (numero < 1 || numero > 10) {
        alert("Por favor, digite um número inteiro de 1 a 10.");
        return;
    }
   
    document.getElementById("resultado").innerHTML = "";
    
    for (var i = 1; i <= 10; i++) {
    
        var produto = numero * i;
        
        var p = document.createElement("p");
        
        p.innerHTML = numero + " x " + i + " = " + produto;
     
        document.getElementById("resultado").appendChild(p);
    }
}
