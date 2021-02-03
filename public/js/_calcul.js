// fonctions
class Calculatrice {
    constructor(premierElement, elementActuel) {
    this.premierElement = premierElement
    this.elementActuel = elementActuel
    this.effacer()
    }
    effacer() {
    this.operateur2 = ''
    this.operateur1 = ''
    this.operation = undefined
    }
    ajouter(number) {
    if (number === '.' && this.operateur2.includes('.')) 
    return
    this.operateur2 = this.operateur2.toString() + number.toString()
    }
    choisiroperation(operation) {
    if (this.operateur2 === '') 
    return
    if (this.operateur1 !== '') {
        this.calcul()
    }
    this.operation = operation
    this.operateur1 = this.operateur2
    this.operateur2 = ''
    }
    calcul() {
    let calcul
    let a = parseInt(this.operateur1)
    let b = parseInt(this.operateur2)
    if (isNaN(a) || isNaN(b)) 
    return
    switch (this.operation) {
    case '+':
        calcul = a + b
        break
    case '-':
        calcul = a - b
        break
    case '*':
        calcul = a * b
        break
    case '/':
        calcul = a / b
        break
    default:
        return
    }
    this.operateur2 = calcul
    this.operation = undefined
    this.operateur1 = ''
}
affiche() {
    this.elementActuel.innerText =
    this.operateur2
    if (this.operation != null) {
    this.premierElement.innerText =
        `${this.operateur1} ${this.operation}`
    } else {
    this.premierElement.innerText = ''
    }
}
};
// variables
let touches = document.querySelectorAll('[data-number]');
let operateur = document.querySelectorAll('[data-operation]');
let egal = document.querySelector('[data-equals]');
let effacer = document.querySelector('[data-all-clear]');
let premierElement = document.querySelector('[data-previous-operand]');
let elementActuel = document.querySelector('[data-current-operand]');

let calculatrice = new Calculatrice(premierElement, elementActuel);

export {touches,operateur,egal,effacer,calculatrice};