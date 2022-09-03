/* window.addEventListener('DOMContentLoaded', change_character)*/




const rickandmorty = "https://rickandmortyapi.com/api/character";


function change_character() {
  fetch(rickandmorty) /*Metodo para llamar la API y de parametro recibe la URL*/
    .then(response => response.json())
    .then(data => {
      data.results.forEach(element => {
        const box = document.createRange().createContextualFragment(
          `<div>
        <div class="name">${element.name}</div>
        <img  class="image" src= ${element.image} >
        <div class= "gender">${element.gender}</div>
        <div class= "status">${element.status}</div>
        </div>`
        )
        const personaje = document.querySelector(".personajes")
        personaje.append(box)
        
const borrar = document.getElementById("mensaje_categorias").innerHTML = "" 
      });
    });
}

const all_characters= document.getElementById("all_characters")
const females= document.getElementById("females")
const males= document.getElementById("males")
const alive= document.getElementById("alive")
const dead= document.getElementById("dead")

all_characters.addEventListener("click",change_character)
females.addEventListener("click",change_character)
males.addEventListener("click",change_character)
alive.addEventListener("click",change_character)
dead.addEventListener("click",change_character)

