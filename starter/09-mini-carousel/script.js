/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 9 : 
Au clic sur le bouton, change la source de l'image par celle de l'image suivante dans le tableau <strong>gallery</strong>. Fais-en une boucle.
*/
/* 
AIDE : voici les étapes :
1. On initialise un index
2. On recherche l'élément img
3. On associe image aux éléments du tableau (suivant le numéro d'index)
4. On incrémente l'index de 1 pour faire défiler les images
5. En fin de longueur du tableau, on redémarre au début de l'index
*/
const gallery = ['img/becode-seal.png', 'img/bell.svg', 'img/clock.svg', 'img/compass.svg',
                        'img/kiss.svg', 'img/kiss-wink-heart.svg', 'img/lemon.svg', 'img/mpa.svg'];
let compteur = 1;
imgLoop = document.querySelector('.material').firstElementChild.firstElementChild;
document.getElementById('next').addEventListener('click', e => {
    if(compteur >= gallery.length-2){
        compteur = 0
    } else {
        compteur++;
    }
    imgLoop.setAttribute('src', gallery[compteur]);
});
