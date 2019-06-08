//FORM: Ingreso de informacion desde nuestro usuario al servidor
// Todo esto lo mandamos a procesar al backend       

/* ANTES LOS FORMULARIOS TENIAN DOS ATRIBUTOS:

submit : es un evento que se dispara cuando un formulario intenta ser enviado
*/



/*form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    console.log(input.value)
   //  haciendo console.dir(e.target[0].value) ME EVITO HACER EL QUERY SELECTOR DEL IMPUT!!}

   
}

//string.length __> te devuelve el numero de largo del string
   //string.trim() >>> te borra los espacios en blanco antes y desp del string

{string|Array}.indexOf() __> number
Te dice el lugar en donde se encuentra el caracter que vos estas buscando. Si no lo encuentra te da menos 1.

{string|Array}.includes() => boolean
Retorna verdadero o falso dependiendo si X se encuentra o no

MAYUSCULAS Y MINUSCULAS
evento 
change : se dispara cuando un control de formulario cambia su valor
*/

let form = document.querySelector("form")
let input = document.querySelector("input")
let nombre = document.querySelector("#nombre")
let select = document.querySelector("#Nac")
let option = document.querySelectorAll("option")
let paises = {
    ar : ["Buenos Aires", "La Pampa"],
    ve : ["Margarita", "Caracas"],
    ch : ["Beijing", "Shangai"]
}

form.addEventListener("change", agregoProvincias)

function agregoProvincias(e) {
    e.preventDefault()
    let opcionElegida = e.target.value
    console.log(opcionElegida)

    let provinciaDePaises = paises[opcionElegida]
    console.log(provinciaDePaises)

    if (opcionElegida == 0) {
        let p = document.createElement("p")
        document.body.appendChild(p)
        p.id = "parrafo"
        p.innerText = "Tiene que seleccionar una opcion"
    }   
}



/*

    opcionElegida = paises[select]
    console.log(opcionElegida)
1) Seleccionar el select
2) Asignarle un evento change
3) el call back del change tiene que poder agarrar el valor del select
4) Con el valor obtenido buscar en el objeto "paises" la propiedad que le corresponda
5) Si la propiedad no existe se tiene que ver en pantalla un mensaje qu diga
"tiene que seleccionar una opcion" en color rojo
6) Si la propiedd ecste, tenemos que recorrer el array que tiene como valor asociado
7)Por cada valor del array se tiene que crear un option
8)Agregar todos los OPTION creados a un <select>
9)Agregar el <select> al DOM


*/