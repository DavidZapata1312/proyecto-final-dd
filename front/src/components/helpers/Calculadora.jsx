const Calculadora = () =>{
return(
    
    <div><h2>Calculadora de Nómina</h2>
    <div>
        <label for="salario">Salario:</label>
        <input type="number" id="salario">
        <button onclick="calcularNomina()">Calcular</button>
    </div>
    <div id="resultado"></div></div>
    
)

}