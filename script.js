const numero = "#24"
let textname = prompt("nome");
let textsurname = prompt("cognome");
let textcolor = prompt("colore");
const password = textname + textsurname + textcolor + numero;
document.writeln("La tua password e: "+ textname + textsurname + textcolor + numero);