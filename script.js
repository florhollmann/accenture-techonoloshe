let button = document.querySelector("button");
let body = document.querySelector("body");
let contador = 1
//Evento: la ejecucion de una funcion (call back) como respuesta a una accion
//LA ACCION A LA QUE RESPONDEMOS CON EL BOTON ES EL CLICK

//Las funciones en este lenguaje son objetos
// se podria haber escrito 
// var hacerClick = function(){}
// TAMBIEN ES LO MISMO QUE HACER window.hacerClick = function(){}

 //no ejecuto la funcion solo la nombros
/**
 * Reemplazar el codigo de la funcion hacerClick por:
 * 1) Crear un boton por cada click que se haga
 * 2)Cada boton nuevo se tiene que ver en el DOM
 * 3)Cada boton nuevo tiene que tener un callback en su propio evento click tambien
 * 4)odos los botones tienen que tener como texto "Boton N" donde N es un numero arrancando de uno
 * el cual se va aumentando de a una unidad
 */
function nuevoBoton() {
      let btn2 = document.createElement("button");
      btn2.innerText=("boton" + contador++); 
      body.appendChild(btn2);
      btn2.addEventListener("click", unamismaFuncionParaTodosLosBotones) 
   }
   button.addEventListener("click", nuevoBoton)

   function unamismaFuncionParaTodosLosBotones () {
      console.log ("Click de alguno de los botones")
   }

   /*
      Practicar en un HTML nuevo:
      1) Hacer una etiqueta button con un texto que diga "Crear parrafo:"

      2) En JS agarrar nodo 
      3) Registrarle un callbac a su click
      4) El callback del boton tiene que poder crear la siguiente estructura: }

      <div>
         <p>Lorem Ipsum</p>
         <buttton>Borrar</button>
      </div>
      5) El boton que tiene el texto borrar ambien tiene que hacer un click y su callback tiene que
      poder borrar el P de arriba al cual pertenece usando la funcion:

      NodoT.removeChild(NodoC) : esta funcion le reueve el NodoC al nodoT

   */

