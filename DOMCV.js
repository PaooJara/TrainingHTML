const botonChangeMode = document.getElementById("botonChangeMode")
const navChangeMode = document.getElementById("botonChangeMode")


    function changemode () {
        document.querySelector("body").classList.toggle("change-modebody")
        /* document.querySelector("nav").classList.toggle("change-modebody") */

    }

    botonChangeMode.addEventListener("click",changemode)

  /*   function funciona(){
        alert("boton funciona") 
    }*/



      /*  if(document.getElementsByClassName("body-dark").length){
        document.getElementsByClassName("body-dark").classList.replace("body-light", "body-dark")
       }
        else{
        document.getElementsByClassName("body-light").classList.replace("body-dark", "body-light")


       }
    

    */

    
   
    

    