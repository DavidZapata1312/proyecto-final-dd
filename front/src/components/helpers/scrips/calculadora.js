function calcularNomina() {
    var salario = parseFloat(document.getElementById("salario").value);
    if (isNaN(salario) || salario <= 0) {
        alert("Ingrese un salario válido.");
        return;
    }

    var vacaciones = salario * 0.1;  
    var cesantias = salario * 0.0833;  
    var primas = salario * 0.0833;  }