$(document).ready(function(){
    
    $("#bars").click(function(){
        if ($("#menu").hasClass("menu-ativo")){
         $("#menu").removeClass("menu-ativo")
        }else{
         $("#menu").addClass("menu-ativo")
        }
     })
 })
    
 function cadastrarNewsletter(){
    let email = document.getElementById("campo-email").value
    alert(email)
 }