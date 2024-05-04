import { robots } from './robots.js';

$(document).ready(function(){

    
    let numero1 = "";
    let numero2 = "";

    let soloNumeros = /^[0-9]+$/;

    $("#btnSumar").click(function(){
        
        //numero1 = document.getElementById("numero1").value;
        numero1 = $("#numero1").val();
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
        if(numero2 === ""){
            $("#error2").text("Error2");
            $("#error1").css("color","red");
            return;
        }



    })




});

//numero1 = document.getElementById("numero1").value;