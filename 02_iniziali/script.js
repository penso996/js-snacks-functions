/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

function extractFirstLetter(names) {
    const initials = [];
    for (let i = 0; i < names.length; i++) {
        initial.push(names[i].slice(0, 1));
    }
    return initials;
}

// Invoca la funzione qui e stampa il risultato in console.

console.log(extractFirstLetter(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]