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