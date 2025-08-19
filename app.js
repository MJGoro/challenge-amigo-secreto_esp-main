let nombresAmigos = [];

function agregarAmigo(){

    let nombreAmigo = document.getElementById("amigo").value;
    if(nombreAmigo == ""){
        alert("Por favor insertar nombre");
    }

    limpiarCaja();
    console.log(nombreAmigo);
}
    agregarAmigo();

function limpiarCaja(){
    document.querySelector("#amigo").value = "";
}

