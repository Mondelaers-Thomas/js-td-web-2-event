/*
EXERCICE 6 : Change couleur (4) - v1
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 1  : une fonction par bouton radio
	À faire après pour préparer la version 2 : 
		(1) un alert dans une fonction pour voir à quoi correspond e.target
		(2) un alert dans chaque fonction pour voir à quoi correspond e.target.value
*/
document.getElementById('rouge').addEventListener("click", (event) => {
    document.body.style.backgroundColor = document.getElementById('rouge').getAttribute('value');
    alert(event.target);
    alert(event.target.value);
})
document.getElementById('vert').addEventListener("click", (event) => {
    document.body.style.backgroundColor = document.getElementById('vert').getAttribute('value');
    alert(event.target.value);
})
document.getElementById('bleu').addEventListener("click", (event) => {
    document.body.style.backgroundColor = document.getElementById('bleu').getAttribute('value');
    alert(event.target.value);
})
document.getElementById('jaune').addEventListener("click", (event) => {
    document.body.style.backgroundColor = document.getElementById('jaune').getAttribute('value');
    alert(event.target.value);
})