
/*
# Gioco dei dadi
1-Generare un numero random da 1 a 6 per il giocatore.
2-Generare un numero random da 1 a 6 per il computer.
3-Stabilire il vincitore, in base a chi fa il punteggio più alto.
4-Stampare in console i tiri di dado e il risultato. 
*/

//ç 1-Generare un numero random da 1 a 6 per il giocatore.
const gamerNumber = Math.random();
console.log(Math.floor(gamerNumber * 6) + 1);

//ç 2-Generare un numero random da 1 a 6 per il computer.
const computerNumber = Math.random();
console.log(Math.floor(computerNumber * 6) + 1);

//ç 3-Stabilire il vincitore, in base a chi fa il punteggio più alto.
let winner = false;

if (gamerNumber > computerNumber){
    winner = true;
    console.log(`Hai vinto!`);
    else {
        console.log(`Hai perso!`);
    }
}

