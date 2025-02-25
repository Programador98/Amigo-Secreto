var listaAmigos = [];


//Agregamos los nombres de los amigos a el arreglo.
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;

    if(nombre == ''){
        alert('Por favor, ingrese un nombre correcto');
    } else{
        listaAmigos.push(nombre);
        actualizarLista();
        console.log(listaAmigos);
        limpiarCaja();
    }
}

//Limpia el input
function limpiarCaja(){
    document.getElementById('amigo').value="";
}

//Actualiza y muestra los nombres en formato de lista
function actualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; 

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li"); 
        li.textContent = listaAmigos[i]; 
        ul.appendChild(li); 
    }
}