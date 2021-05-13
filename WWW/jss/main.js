let input = document.getElementById("email");
input.value = "a329528@uach.mx";


let password = document.getElementById("password");
let button = document.getElementById("show");
let button2 = document.getElementById("hide");

function mostrarPassword(){
  let password = document.getElementById("pass");
  password.type = 'text';
}

function ocultarPassword(){
  let password = document.getElementById("pass");
  password.type = 'password';
}

button.onclick = mostrarPassword;
button2.onclick = ocultarPassword;
