/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 4 : Change couleur (1)
Au clic sur un des boutons, colorie la page dans la couleur choisie par l'utilisateur.
*/

window.onload = function changeColor() {
    document.getElementById('red').addEventListener('click', event = () => {
    document.body.style.backgroundColor = 'red';
    });
    document.getElementById('green').addEventListener('click', event = () => {
        document.body.style.backgroundColor = 'green';
    });
    document.getElementById('yellow').addEventListener('click', event = () => {
        document.body.style.backgroundColor = 'yellow';
    });
    document.getElementById('blue').addEventListener('click', event = () => {
        document.body.style.backgroundColor = 'blue';
    });
}




