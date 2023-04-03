function somarNumeros() {
   
    var soma = 0;
    
    var resultado = "A soma dos números de 1 a 1000 é: ";
    
    for (var i = 1; i <= 1000; i++) {
        soma += i;
       
        resultado += i;

        if (i < 1000) {
            resultado += " + ";
        }
    }
   
    resultado += "Total: " + soma;
    
  
    alert(resultado);
}
