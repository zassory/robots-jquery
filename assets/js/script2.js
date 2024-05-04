import { sumar , restar , getResultado , limpiar } from './operaciones.js';

$(document).ready(function(){

    
    let numero1 = "";
    let numero2 = "";

    let resultado = "";

    //Expresiones regulares
    let soloNumeros = /^[0-9]+$/;

    $("#btnSumar").click(function(){
        
        
        $("#error1").text("");
        $("#error2").text("");

        numero1 = $("#numero1").val();
        console.log(numero1);
        if(numero1 === ""){
            $("#error1").text("Debe agregar el primer número");
            $("#error1").css("color","red");
            return;
        }

        if(!soloNumeros.test(numero1)){
            $("#error1").text("Solo acepta números");
            $("#error1").css("color","red");
            return;
        }
        

        numero2 = $("#numero2").val();
        console.log(numero2);
        if(numero2 === ""){
            $("#error2").text("Debe agregar el segundo número");
            $("#error2").css("color","red");
            return;
        }

        if(!soloNumeros.test(numero2)){
            $("#error2").text("Solo acepta números");
            $("#error2").css("color","red");
            return;
        }

        resultado = sumar(numero1,numero2);
        getResultado(resultado);
        limpiar();

    });

    $("#btnRestar").click(function(){
        
        
        $("#error1").text("");
        $("#error2").text("");

        numero1 = $("#numero1").val();
        console.log(numero1);
        if(numero1 === ""){
            $("#error1").text("Debe agregar el primer número");
            $("#error1").css("color","red");
            return;
        }

        if(!soloNumeros.test(numero1)){
            $("#error1").text("Solo acepta números");
            $("#error1").css("color","red");
            return;
        }
        

        numero2 = $("#numero2").val();
        console.log(numero2);
        if(numero2 === ""){
            $("#error2").text("Debe agregar el segundo número");
            $("#error2").css("color","red");
            return;
        }

        if(!soloNumeros.test(numero2)){
            $("#error2").text("Solo acepta números");
            $("#error2").css("color","red");
            return;
        }

        resultado = restar(numero1,numero2);
        getResultado(resultado);
        limpiar();
        $("#numero1").focus();
    });

    $("#btnLimpiar").click(function(){
        limpiar();
    })




});

//numero1 = document.getElementById("numero1").value;