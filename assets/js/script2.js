
$(document).ready(function(){

    
    let numero1 = "";


    $("#btnSumar").click(function(){
        
        //numero1 = document.getElementById("numero1").value;
        numero1 = $("#numero1").val();
        if(numero1 === ""){
            $("#error1").text("Error1");
            $("#error1").css("color","red");
            return;
        }


    })




});

//numero1 = document.getElementById("numero1").value;