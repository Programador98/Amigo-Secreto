var listaAmigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;

    if(nombre == ''){
        alert('Por favor, ingrese un nombre correcto');
    } else{
        listaAmigos.push(nombre);
        console.log(listaAmigos);
    }
}