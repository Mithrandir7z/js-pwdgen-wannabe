var nome;
var cognome;
var colorePreferito;
var passwordGen;

var nome = prompt("Inserisci il tuo nome", "Inserisci:");
var cognome = prompt("Inserisci il tuo cognome", "Inserisci:");
var colorePreferito = prompt("Inserisci il tuo colore preferito", "Inserisci:");

passwordGen = nome + cognome + colorePreferito + "21";

document.getElementById("pass").innerHTML = passwordGen;
