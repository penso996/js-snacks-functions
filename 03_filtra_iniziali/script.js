/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

function arrayFilter(array, letter) {
    const filteredNames = [];
    for (let i = 0; i < array.length; i++) {
        let string = array[i];
        if (string.charAt(0) === letter) {
            filteredNames.push(string);
        }
    }
    
    return filteredNames;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(arrayFilter(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]