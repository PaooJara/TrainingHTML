/*
* 1.Spread Operator
* 2.Destructuring
* 3.Hoisting
* 4.Bloack Scope
* 5.Closure
*/

const dogs = ["boxer","golden","pastor","criollo"]
const cats = ["persian","siamese","angora","criollo"]

const animals = [...dogs,...cats]

console.log(animals)

const personainfoBD1 = {
    nombre:"Ana Mile",
    direccion:"Belen",
    trabajo:{
        direccion:"Valhala"
    }
}

const personaInfoBD2={
    apellido:"Orrego",
    cedula:"123456",

}
const persona = {...personainfoBD1, cedula:personaInfoBD2.cedula}

//console.log(persona)

//2.Destructuring

const countries = ["colombia", "peru", "venezuela","chile","argentina",["a","b","c"]];

const[colombia,peru,venezuela,_,argentina] = countries;

/* console.log(colombia);
console.log(peru);
console.log(venezuela);
console.log(argentina);
 */

const personainfo = {
    nombre:"Ana Mile",
    direccion:"Belen",
    trabajo:{
        direccion:"Valhala"
    }
}

const{nombre,direccion,trabajo}=personainfo
console.log(nombre);
console.log(direccion);
console.log(trabajo);

const{direccion:direccionTrabajo}=trabajo;

console.log(direccionTrabajo)

/* Clousure*/

function calculadora(){
    let total=0;

    

}

