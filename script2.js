let button = document.querySelector("button");
let body = document.querySelector("body")

function AprietoBotonCreoParrafo() {    
        let divNuevo = document.createElement("div")
        body.appendChild(divNuevo);
        let btn = document.createElement("button");
        btn.innerText = "Borrar contenido";
        divNuevo.appendChild(btn)
        let p = document.createElement("p");
        p.innerText = "Lorem ipsum";
        divNuevo.insertBefore(p, btn);
    }
button.AddEventListener("click", AprietoBotonCreoParrafo)

