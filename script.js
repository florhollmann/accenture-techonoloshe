/**
 * Primitivos
 * 
 * String: cadena de texto entre comillas dobles o simples
 * Nbr: no se distingue entre tipos de numeros
 * Boolean
 * Undefined: una variable sin valor
 * Null

    objetos:

    1) object: se crean con llaves {}
    2) array: se crean con corchetes []
    3) function

 * 

    Variables: 
    var - let - const

    Los nombres de variables pueden arrancar con _ $ o cualquier letra, despues del primer caracter
    puede ir cualquier otro caracter

    Console -> object - nos da funciones de logueo en consola de desarrollo

    location -> object 

    history
 */

 let nombre = "Florencia"
 let apellido = "Hollmann"
 let nombre_completo = nombre + " " + apellido
 console.log(nombre_completo)

 let numeros = [10,7,5,2,0, "Flor", true]
 numeros.push("hola")
 numeros.push(45)

 console.log(numeros)
 console.log(numeros.length)
 console.log(numeros["length"])
 
 console.table(numeros)

 let persona= {
     nombre: "Horacio",
     edad: 29,
     vive: true
 }

 persona.trabajo = false
 persona.tienePerrito = 3

 for (let i = 0; i < numeros.length; i++) {
     console.log(numeros[i]);
     
 }

 for (prop in persona) {
    console.log(persona)
    
 }  

 console.clear()
 let dos= document.getElementById("item2")
 console.dir(dos)
 //hago console DIR y no console LOG asi puedo ver la variable 2 como objeto
 //si hago console log veo la etiquiet de html!
 let lis = document.getElementsByTagName("li")
 let tres = document.querySelector("#item2")

 //como creo un NODO
 let p = document.createElement("p")
 p.innerText = "Mi nuevo texto"
 p.id = "nuevo"
 p.className = "item"

 console.log(p)

 //agregar nodos al DOM 
 // Desde un nodo cualquiera que yo ya tenga seleccionado
 // nodo.appendChild(NodoNuevo) -> esto inserta el nodo nuevo como ultimo hijo de nodo
//
let body = document.querySelector("body")
body.appendChild(p)
 // Nodo.insertBefore(NodoNuevo, NodoRef)
 //

 let li2 = document.createElement("li")
 li2.innerText = "soy el nuevo primer elemento!"

 let ul = document.querySelector("ul")
 let li3 = document.querySelector("#item1")
 ul.insertBefore(li2, li3)

 let NuevoUl = document.createElement("ul")
 for (let index = 0; index < 5; index++) {
    
   let liNUEVO = document.createElement("li")
   NuevoUl.appendChild(li)
   liNUEVO.innerText = "Nueo texto" + i
    
 }

 body.appendChild(NuevoUl)
