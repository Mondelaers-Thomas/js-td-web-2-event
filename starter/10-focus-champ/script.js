/* EXERCICE 10 :
Au focus sur le champ, vide-le et change sa couleur de fond. Lorsqu'on clique en dehors, sa couleur de fond redevient transparente.
- VERSION 1 :
	Ne le fais que pour le champ prénom
- VERSION 2 :
	Fais-le pour le champ prénom et pour le champ nom séparément avec des fonctions différentes
- VERSION 3 :
	Fais-le de manière générique avec une seule fonction qui peut s'adapter au champ sur lequel on l'applique et associe cette fonction à tous les champs texte de la page en parcourant ceux-ci avec une boucle for.
*/

// Un seul champ
/*document.getElementById('prenom').addEventListener('focusin', e => {
    e.currentTarget.style.backgroundColor = 'rgba(80,199,255,0.2)';
    e.currentTarget.value = '';
    document.getElementById('prenom').addEventListener('focusout', e => {
        e.currentTarget.style.backgroundColor = '';
    })
})
 */
// Deux champs
/*document.getElementById('prenom').addEventListener('focusin', e => {
    e.currentTarget.style.backgroundColor = 'rgba(80,199,255,0.2)';
    e.currentTarget.value = '';
    document.getElementById('prenom').addEventListener('focusout', e => {
        e.currentTarget.style.backgroundColor = '';
    })
})
document.getElementById('nom').addEventListener('focusin', e => {
    e.currentTarget.style.backgroundColor = 'rgba(80,199,255,0.2)';
    e.currentTarget.value = '';
    document.getElementById('nom').addEventListener('focusout', e => {
        e.currentTarget.style.backgroundColor = '';
    })
})
 */

// Plusieurs champs
let form = document.querySelector('.material').firstElementChild;
form.addEventListener('focus', e => {
    if(e.target.type === 'text'){
        e.target.style.backgroundColor = 'red';
        e.target.value = '';
        form.addEventListener('focusout', e => {
            e.target.style.backgroundColor = '';
        });
    }
}, true);