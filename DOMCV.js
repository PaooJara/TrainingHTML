const botonChangeMode = document.getElementById("botonChangeMode")
botonChangeMode.addEventListener("click",changemode)


function changemode () {
   /*  let body= */
    document.querySelector("body").classList.toggle("change-modebody")

    document.querySelectorAll(".linkheader").classList.toggle("change-modelink")

        /* let etiqueta= */ 
    document.querySelectorAll("a").etiqueta.forEach(element => {element.classList.toggle("change-modeetiqueta")

})
}



/* const navChangeMode = document.getElementById("botonChangeMode") */

/* function changemode () {
  
  if (document.querySelectorAll(".text-base-dark").length){
    document.querySelectorAll(".text-base-dark").forEach(function(element){
      element.classList.replace("text-base-dark","text-base-light");
    });
  }  else {
      document.querySelectorAll("text-base-light").forEach(function(element){
        element.classList.replace("text-base-light","text-base-dark");
      });
    
}
} */



        /* document.querySelector(".enlace").classList.toggle("change-modebody") */
        /* document.querySelector("nav").classList.toggle("change-modebody")*/
 

   

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

    
   
    

    