const retos = {

S: {
titulo: "LETRA S ENCONTRADA",
texto: "Realiza un Ollie limpio sobre 2 tablas."
},

K: {
titulo: "LETRA K ENCONTRADA",
texto: "Mantén un Manual durante 10 segundos."
},

A: {
titulo: "LETRA A ENCONTRADA",
texto: "Realiza un Flip limpio."
},

T: {
titulo: "LETRA T ENCONTRADA",
texto: "Salta el gap de tierra de la curvita."
},

E: {
titulo: "LETRA E ENCONTRADA",
texto: "Realiza un truco en cajon o riel."
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
