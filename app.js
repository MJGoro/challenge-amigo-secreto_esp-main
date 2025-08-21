let nombresDeAmigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value;
    
    if(nombreAmigo === ""){
        alert("Por favor insertar un nombre");
    } else {
       nombresDeAmigos.push(nombreAmigo);
    } // Verifica si nombre colocado es valido y lo almacena en el array

    limpiarCaja(); // Deja vacia la caja para que el usuario coloque otro nombre
}
    
function limpiarCaja(){
    document.querySelector("#amigo").value = "";
}

 function asignarElementoYTexto(texto){
    let elementoHTML = document.querySelector("#listaAmigos");
    elementoHTML.innerHTML = texto;
    return;
 }

 function listaDeAmigos(){
    elementoHTML = "";
    asignarElementoYTexto(`${agregarAmigo()}`);
    return;
 }

    listaDeAmigos();