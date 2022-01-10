
/*
# Gioco dei dadi
1-Generare un numero random da 1 a 6 per il giocatore.
2-Generare un numero random da 1 a 6 per il computer.
3-Stabilire il vincitore, in base a chi fa il punteggio più alto.
4-Stampare in console i tiri di dado e il risultato. 
*/

//ç 1-Generare un numero random da 1 a 6 per il giocatore.
const gamerNumber = (Math.floor(Math.random() * 6) + 1);
console.log(gamerNumber);

//ç 2-Generare un numero random da 1 a 6 per il computer.
const computerNumber = (Math.floor(Math.random() * 6) + 1);
console.log(computerNumber);

//ç 3-Stabilire il vincitore, in base a chi fa il punteggio più alto.
let winner = false;

if (gamerNumber > computerNumber){
    winner = true;
    console.log(`Hai vinto!`);
}else {
        console.log(`Hai perso!`);
    }


