/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function vowelCounter(string) {
    let vowelNumber = 0;
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        if ("aeiou".includes(letter)) {
            vowelNumber += 1;
        }
    }
    return vowelNumber;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(vowelCounter(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)