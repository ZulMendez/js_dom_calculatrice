import{touches,operateur,egal,effacer,calculatrice} from './_calcul.js'

// events
touches.forEach(button => {
    button.addEventListener('click', () => {
        calculatrice.ajouter(button.innerText)
        calculatrice.affiche()
    })
});
    
operateur.forEach(button => {
    button.addEventListener('click', () => {
        calculatrice.choisiroperation(button.innerText)
        calculatrice.affiche()
    })
});
    
egal.addEventListener('click', () => {
    calculatrice.calcul()
    calculatrice.affiche()
});
    
effacer.addEventListener('click', () => {
    calculatrice.effacer()
    calculatrice.affiche()
});