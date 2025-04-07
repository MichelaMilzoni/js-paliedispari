// Palidroma: 
// Una sequenza di lettere o di sillabe è palindroma se si può leggere allo stesso modo da destra a sinistra e da sinistra a destra.
// NB: se la prima metà della parola è uguale alla prima metà della parola invertita, la parola è palindroma,
// Non c'è bisogno di confrontare OGNI carattere!!! solo la metà della parola

// Creare una funzione per capire se la parola inserita è palindroma
function isPalindrome(word) { //cerca di dare al nome_funzione una risposta vero / falso
                              // in questo caso èPalindroma la parola inserita dall'utente? si (vero), no (falso)
    
    let length = word.length; // creo variabile length
    
    for (let i = 0; i < length / 2; i++) // ciclo for per definire variabile i = 0
                                         // continua finchè i è inferiore a metà della lunghezza (userWord/2)
                                         // i++ vuol dire che a ogni giro del ciclo la i deve incrementare di 1
    // confronta il carattere all'inizio della userWord con quello alla fine
        if (word[i] !== word[length - 1 - i]) {
        // ES: userWord = ciao
        // IF (word[0(c)] NON è uguale a word[lunghezza_ciao(4) - 1 - 0(c)]
            return false; // non è palindroma
        }
    return true; // è palindroma
}

// Chiedere all’utente di inserire una parola
const userWord = prompt("Inserisci una parola").toLowerCase(); // .toLowerCase uniforma il testo inserito, sarà più facile confrontarlo!
                                                               // .trim elimina spazi vuoti prima e dopo la parola inserita, gli spazi NON SERVONO, ELIMINIAMOLI!

// output
if (isPalindrome(userWord)) {
    alert(`"${userWord}" è un palindromo!`);
    console.log(`"${userWord}" è un palindromo!`);
} else {
    alert(`"${userWord}" non è un palindromo!`);
    console.log(`"${userWord}" non è un palindromo!`);
}

