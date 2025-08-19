let nombresDeAmigos = [];

function agregarAmigo(){

    let nombreAmigo = document.getElementById("amigo").value;
    
    if(nombreAmigo === ""){
        alert("Por favor insertar nombre");
    } else {
       nombresDeAmigos.push(nombreAmigo);
    } // Verifica si nombre colocado es valido y lo almacena en el array

    limpiarCaja(); // Deja vacia la caja para que el usuario coloque otro nombre
    console.log(nombreAmigo);
    console.log(nombresDeAmigos);
}
    agregarAmigo();

function limpiarCaja(){
    document.querySelector("#amigo").value = "";
}

 