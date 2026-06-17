const retos = {

S: {
titulo: "LETRA S ENCONTRADA",
texto: "Realiza un Ollie limpio sobre una botella."
},

K: {
titulo: "LETRA K ENCONTRADA",
texto: "Mantén un Manual durante 3 segundos."
},

A: {
titulo: "LETRA A ENCONTRADA",
texto: "Realiza un 180° limpio."
},

T: {
titulo: "LETRA T ENCONTRADA",
texto: "Realiza un Shove-It."
},

E: {
titulo: "LETRA E ENCONTRADA",
texto: "Realiza un truco sorpresa validado por un juez."
}

};

const params = new URLSearchParams(window.location.search);

const letra = params.get("reto");

if(letra && retos[letra]){

document.getElementById("title").innerText =
retos[letra].titulo;

document.getElementById("description").innerText =
retos[letra].texto;

}