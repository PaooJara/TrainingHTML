window.addEventListener('DOMContentLoaded', chistesAleatorios)

const boton = document.getElementById("boton_chiste");

if(boton) {
    boton.addEventListener('click', chistesAleatorios)
}

function chistesAleatorios (){ 
    const endpoint="https://api.dadjokes.io/api/random/joke";

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            document.getElementById("joke").textContent= data.body[0].setup
            document.getElementById("answer").textContent= data.body[0].punchline
        }).catch(error => {
            document.getElementById("joke").textContent= "Error"
        })
}