// Pari e Dispari

// Funzione per generare un numero casuale da 1 a 5 per il PC con la funzione
function pcRandomNumber(max, min) { //function + nome_function (parametro) {
                            //tra le graffe inserisco il codice da eseguire seguito per ultimo dalla dichiarazione
                            // (valore booleano come return)}
    return Math.floor(Math.random() * max - min -1) + min; //.floor toglie i decimali / .random genera un numero tra 0 e 1 
                                              // / moltiplico per il max numenro da generare e aggiungo 1
}
// L’utente sceglie pari o dispari 
// e inserisce un numero da 1 a 5.
let userChoice = prompt("Scegli pari o dispari").toLowerCase(); //.toLowerCase x uniformare il testo inserito e confrontarlo con la stringa "pari" e "dispari" 
                                                                // x determinare il vincitore (se l'utente inserisce "PaRi" io uniformo il testo e non ho problemi,
                                                                // al contrario se non lo inserisco avrò sempre come risultato "false")
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5:")); // parseInt x verificare che sia un numero intero

// Numero generato dal computer
let pcNumber = pcRandomNumber(5, 1);
// stampo in console le scelte dell'utente e numero random del PC
console.log(`Scelta dall'utente: `, userChoice);

console.log(`Numero scelto dall'utente: ${userNumber}`);
console.log(`Numero generato dal computer: ${pcNumber}`);

// Somma dei numeri
let sum = userNumber + pcNumber;
console.log(`Somma dei numeri: ${sum}`);

//determino il vincitore 
// se somma/2 = 0 && userChoise è pari OR LOGICO se la somma/2 NON è 0 && userChoise è dispari
if ((sum % 2 === 0 && userChoice === "pari") || (sum % 2 !== 0 && userChoice === "dispari")) {
    console.log("Complimenti, hai vinto!!");
    alert("Complimenti, hai vinto!!")
} else {
    console.log("Hai perso.. Riprova!");
    alert("Hai perso.. Riprova!")
}





