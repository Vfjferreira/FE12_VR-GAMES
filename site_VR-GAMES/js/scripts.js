$(document).ready(function(){
    
    $("#bars").click(function(){
        if ($("#menu").hasClass("menu-ativo")){
         $("#menu").removeClass("menu-ativo")
        }else{
         $("#menu").addClass("menu-ativo")
        }
     })
 })
    /*function mostrarmenu($event){
    let menu = document.getElementById("menu")
        if(getComputedStyle(menu).display == "none"){
           menu.style.display = "flex"
        }else{
            menu.style.display = "none"
        }   
  event.preventdefault()
} */