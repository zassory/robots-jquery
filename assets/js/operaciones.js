
let resultadoLabel = "";

export const sumar = ( num1 = "1" ,num2 = "1" ) => {
    return parseInt(num1) + parseInt(num2);
}

export const restar = (num1,num2) => {
    return parseInt(num1) - parseInt(num2);
}

export const limpiar = () => {
    $("#numero1").val("");
    $("#numero2").val("");
}

export const getResultado = (resultado) => {    
    resultadoLabel = document.getElementById("resultado");
    resultadoLabel.innerHTML = resultado;
    resultadoLabel.style.color = "red";
}