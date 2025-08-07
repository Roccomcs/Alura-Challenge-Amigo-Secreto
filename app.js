// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar
//  la lógica para resolver el problema.

let amigos = []

//Funcion para agregar un amigo a la lista
function agregarAmigo(){

    // Obtenemos el nombre del amigo
    let nombreAmigo = document.getElementById("amigo").value

    //Si el nombre esta vacio, mostramos error
    if (nombreAmigo == ""){
        alert("Por favor, inserte un nombre.")
    } else {
        // Si se ingreso un nombre agregarlo a la lista
        amigos.push(nombreAmigo)
        limpiarCaja()
        actualizarListaDeAmigos()
    }
}

// Funcion para limpiar la lista
function limpiarCaja() {
    let limpiar = document.getElementById("amigo").value = ""
}

// Funcion para actualizar la lista
function actualizarListaDeAmigos(){

    // Obtengo la lista del HTML
    let listaAmigos = document.getElementById("listaAmigos")

    // Limpio la lista del HTML
    listaAmigos.innerHTML = ""

    // Recorro la lista original y las agrego a la lista HTML
    for (let amigo of amigos) {

        // Creamos la lista li para cada titulo
        let item = document.createElement("li")
        item.innerHTML = amigo
        listaAmigos.append(item)
        
    }
}

function sortearAmigo(){

    if (amigos.length > 0){

        let numeroAleatorio = Math.floor(Math.random() * amigos.length);

        let amigoSeleccionado = amigos[numeroAleatorio];

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "El amigo seleccionado es: " + amigoSeleccionado;

    } else {
        alert("No hay amigos para sortear. Por favor, agregue amigos a la lista.")
    }
}

console.log("Amigos:", amigos);
console.log("Lista de amigos actualizada:", actualizarListaDeAmigos());
console.log("Amigo sorteado:", sortearAmigo());