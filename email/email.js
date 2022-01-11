console.log("OK")

/* 
# Mail
1-Crea un array di email;
2-Chiedi all’utente la sua email.
3-controlla che sia nella lista di chi può accedere, 
4-stampa un messaggio appropriato in console sull’esito del controllo.
*/

//ç Prendo l'elemento che mi serve per stampare
const displayElement = document.getElementById('display');

//ç Creo elenco utenti autorizzati
const allowedUsers = ['carolina@gmail.com', 'luga@gmail.com', 'luigi@gmail.com', 'roberta@gmail.com']
console.table(allowedUsers);

//ç Chiedo email all'utente
const userEmail = prompt('Inserisci la tua email').trim();
console.log(userEmail);

//ç Controllo se la mail è tra gli utenti autorizzati

const isAllowed = allowedUsers.includes(userEmail);

const message = isAllowed ? `Benvenuto ${userEmail}` : 'Spiecente, e-mail non riconosciuta.';

console.log(message)

displayElement.innerHTML = message; 