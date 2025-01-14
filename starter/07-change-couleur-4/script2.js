/*
EXERCICE 6 : Change couleur (4) - v2
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 2 : une seule fonction qui utilise e.target pour s'adapter au  bouton sur lequel on clique
AJOUT : Quand on clique sur le bouton, la couleur de fond de la page change de manière aléatoire
*/
    document.getElementById('formCouleur').addEventListener('click', (e) => {
        if(e.target.id === 'boutonCouleur'){
            document.body.style.backgroundColor = `rgba(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.random()})`;
        } else {
        document.body.style.backgroundColor = e.target.value;
        }
    });