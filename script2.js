// objeto evento: objeto que te llega como primer parametro de cualquier funcion registrada en un evento
// funcion (call back) 
//Evento.target = es una referencia al nodo que acaba de disparar el evento
//Nodo.parentNode = es una referncia al nodo padre
    
let button = document.querySelector("button");
let body = document.querySelector("body")

function AprietoBotonCreoParrafo() {    
        let divNuevo = document.createElement("div")
        body.appendChild(divNuevo);
        let btn = document.createElement("button");
        btn.innerText = "Borrar contenido";
        divNuevo.appendChild(btn)
        btn.addEventListener("click", borrarContenido)
        function borrarContenido () {
            body.removeChild(divNuevo)
        }
        let p = document.createElement("p");
        p.innerText = "Lorem ipsum";
        divNuevo.insertBefore(p, btn);
    }
button.addEventListener("click", AprietoBotonCreoParrafo)

//comportamientos por default con los que ya viene una etiqueta
//Eventos default: son comportamientos con los que ya vienen alguno nodos en determinados eventos

///////////COMO SE CANCELA EL EVENTO POR DEFAULT!???? //// con PREVENT DEFAULT
let a = document.querySelector("a")

a.addEventListener("click", PreguntarUsuarioSiQuiereAbandonarPag)
function PreguntarUsuarioSiQuiereAbandonarPag(e) {
    e.preventDefault()
    let nuevoDiv = document.createElement("div")
    nuevoDiv.classList.add("popup") //agregarle una clase al div!!!!
    body.appendChild(nuevoDiv)
    let nuevoP = document.createElement("p")
    nuevoP.innerText = "Esta seguro que quiere abandonar esta pagina?"
    nuevoDiv.appendChild(nuevoP)
    let btn1 = document.createElement("button")
    btn1.innerText = "Aceptar"
    nuevoDiv.appendChild(btn1)
    btn1.addEventListener("click", redirigirUsuario)
    function redirigirUsuario() {
        window.location.href = "http://google.com"
    }   

    let btn2 = document.createElement("button")
    btn2.innerText = "Cancelar"
    nuevoDiv.appendChild(btn2)
    btn2.addEventListener("click", mantenerUsuarioEnSitio)

    function mantenerUsuarioEnSitio () {
        body.removeChild(nuevoDiv)
    }
}

/*
1) EN el callback de <a> hacer la siguiente estructura
<div>
     <p>Esta seguro que quiere salir de esta pagina?</p>
     <button>Aceptar</button>
     <button>Cancelar</button>
 </div>
 2)Si se hace click en ACEPTAR se tiene que redirigir al usuario al href del <a>
 3) Si se hace click en CANCELAR se tiene que borrar todo el div que contenia el boton
*/ 

