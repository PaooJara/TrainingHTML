/*window.addEventListener('DOMContentLoaded', change_character)*/


const rickandmorty = "https://rickandmortyapi.com/api/character";


function change_character() {
  fetch(rickandmorty) /*Metodo para llamar la API y de parametro recibe la URL*/
    .then(response => response.json())
    .then(data => {
      document.querySelector(".personajes").innerHTML = "" 
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
      });
    });
}

const all_characters= document.getElementById("all_characters")
const females= document.getElementById("females")
const males= document.getElementById("males")
const alive= document.getElementById("alive")
const dead= document.getElementById("dead")

all_characters.addEventListener("click",change_character)

/*females.addEventListener("click",change_character)
males.addEventListener("click",change_character)
alive.addEventListener("click",change_character)
dead.addEventListener("click",change_character)*/


/*Filter female*/

const filter_females = "https://rickandmortyapi.com/api/character/?gender=female";


function filter_female() {
  fetch(filter_females) /*Metodo para llamar la API y de parametro recibe la URL*/
    .then(response => response.json())
    .then(data => {
      document.querySelector(".personajes").innerHTML = "" 
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
    });
  })
}


const female= document.getElementById("females")


females.addEventListener("click",filter_female)

/*Filter Males*/

const filter_males = "https://rickandmortyapi.com/api/character/?gender=male";


function filter_male() {
  fetch(filter_males) /*Metodo para llamar la API y de parametro recibe la URL*/
    .then(response => response.json())
    .then(data => {
      document.querySelector(".personajes").innerHTML = "" 
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
      });
    });
}


const male= document.getElementById("males")


males.addEventListener("click",filter_male)

/*Filter Alive*/

const filter_alives = "https://rickandmortyapi.com/api/character/?status=alive";


function filter_alive() {
  fetch(filter_alives) /*Metodo para llamar la API y de parametro recibe la URL*/
    .then(response => response.json())
    .then(data => {
      document.querySelector(".personajes").innerHTML = "" 
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
      });
    });
}


const alives= document.getElementById("alive")


alive.addEventListener("click",filter_alive)

/*Filter Dead*/

const filter_deads = "https://rickandmortyapi.com/api/character/?status=dead";


function filter_dead() {
  fetch(filter_deads) /*Metodo para llamar la API y de parametro recibe la URL*/
    .then(response => response.json())
    .then(data => {
      document.querySelector(".personajes").innerHTML = "" 
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
      });
    });
}


const deads= document.getElementById("dead")


deads.addEventListener("click",filter_dead)



