
/*
# Gioco dei dadi
1-Generare un numero random da 1 a 6 per il giocatore.
2-Generare un numero random da 1 a 6 per il computer.
3-Stabilire il vincitore, in base a chi fa il punteggio più alto.
4-Stampare in console i tiri di dado e il risultato. 
*/

// ç Prendo elemento per stampare in pagina
const displayElement = document.getElementById('display');

//ç Genero due numeri casuali 
const userNumber = Math.floor(Math.random() * 6) + 1;
const cpuNumber = Math.floor(Math.random() * 6) + 1;

console.log(userNumber, cpuNumber);

let message = 'Pareggio!';
//ç Verifico il vincitore
if (userNumber > cpuNumber) {
    message = 'Hai vinto!';
} else if (cpuNumber > userNumber) {
    message = 'Hai perso!';
}

displayElement.innerHTML = `
<div>Tiro Giocatore: <strong>${userNumber}</strong></div>
<div>Tiro Computer: <strong>${cpuNumber}</strong></div>
<h3>${message}</h3>
`;