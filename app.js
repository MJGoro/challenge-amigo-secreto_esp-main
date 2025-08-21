let nombresDeAmigos = [];

// Verifica si nombre colocado es valido y no es un campo vacio
function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value;
    
    if(nombreAmigo === ""){
        alert("Por favor insertar un nombre");
    } else {
       nombresDeAmigos.push(nombreAmigo);
       mostrarListaDeAmigos()
    } 

    limpiarCaja(); // Deja vacia la caja para que el usuario coloque otro nombre

}

// Limpia el campo de texto
function limpiarCaja(){
    document.querySelector("#amigo").value = "";
}

//Muestra el contenido del array en una lista
function mostrarListaDeAmigos(){
    let listaHTML = document.getElementById("listaAmigos")
    listaHTML.innerHTML = ""; // limpiamos la lista antes de añadir los nombres

    for (let i=0; i< nombresDeAmigos.length; i++){
        const nombre = nombresDeAmigos[i];
        const li = document.createElement("li");
        li.textContent = nombre;
        listaHTML.appendChild(li);
    }
}

function sortearAmigo(){

if (nombresDeAmigos.length === 0 ){
    alert ("Por favor, añadir amigos para poder sortear");
    return;
}


}