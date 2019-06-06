//FORM: Ingreso de informacion desde nuestro usuario al servidor
// Todo esto lo mandamos a procesar al backend       

/* ANTES LOS FORMULARIOS TENIAN DOS ATRIBUTOS:

submit : es un evento que se dispara cuando un formulario intenta ser enviado
*/


let form = document.querySelector("form")
let input = document.querySelector("input")

form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    console.log(input.value)
   //  haciendo console.dir(e.target[0].value) ME EVITO HACER EL QUERY SELECTOR DEL IMPUT!!
}

form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    console.log(input.value)
   //  haciendo console.dir(e.target[0].value) ME EVITO HACER EL QUERY SELECTOR DEL IMPUT!!
}