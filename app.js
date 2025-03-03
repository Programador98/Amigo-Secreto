var listaAmigos = [];


//Agregamos los nombres de los amigos a el arreglo.
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;

    if(nombre == ''){
        alert('Por favor, ingrese un nombre correcto');
    } else{
        listaAmigos.push(nombre);
        actualizarLista();
        document.getElementById('amigo').value="";
    }
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

//Sortear al Amigo Secreto
function sortearAmigo(){


    if(listaAmigos.length===0){
        alert('No hay ningun nombre agregado, Agregue un nombre')
    }else {
        let ul = document.getElementById('resultado');
        let amigoSorteado = Math.floor(Math.random()*listaAmigos.length);
        let li = document.createElement('li');
        li.textContent = listaAmigos[amigoSorteado];
        ul.appendChild(li);
    }
}

//Reinicia todo el juego
function reiniciar(){
    //Eliminamos todos los elementos del arreglo
    listaAmigos = [];
    
    //Eliminamos todos los nombres de los amigos
    let ul = document.getElementById("listaAmigos");
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }

    //Eliminar el nombre sorteado
    let ul2 = document.getElementById('resultado');
    ul2.removeChild(ul2.firstChild);

}