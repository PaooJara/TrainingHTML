window.addEventListener('DOMContentLoaded',chistesAleatorios)

let chisteParteI = document.getElementById("texto-inicial");
let chisteParteII = document.getElementById("texti-respuesta");

boton.addEventListener("click",chistesAleatorios)

function chistesAleatorios (){}

    const endpoint= "https://api.dadjokes.io/api/random/joke";
    async function apiAsync()
    try {
        const response= await fetch(endpoint);
        const data = await response.json()
        console.log(data)
        const ListaChistes = data.body;
        const primerChiste= ListChistes[0];
        const respuesta = primerChiste.setup;
            document.getElementById("texto-inicial").textContent = chiste;
            document.getElementById("texto-respuesta").textContent = respuesta;
            console.log(chiste,respuesta);
    } catch (error){
        console.log('ups!!')
    }

    apiAsync()

    //Pagina para visualizar mejor el JSON Json Viewer