console.log("OK")

/* 
# Mail
1-Crea un array di email;
2-Chiedi all’utente la sua email.
3-controlla che sia nella lista di chi può accedere, 
4-stampa un messaggio appropriato in console sull’esito del controllo.
*/

//ç 1-Crea un array di email;
const partecipants = ["carolina@gmail.com", "luca.gmail.com", "pietro@hotmail.com", "sara@gmail.com"];

console.table(partecipants)

//ç 2-Chiedi all’utente la sua email.
const userAddress = prompt('Inserisci il tuo indirizzo e-mail'); 

let trovata = false;

//ç 3-controlla che sia nella lista di chi può accedere
for (let i = 0; i < partecipants.length; i++){
    if (userAddress == partecipants[i]){
        trovata = true;
    }
}

//ç 4-stampa un messaggio appropriato in console sull’esito del controllo.
if (trovata){
    console.log("la riunione iniziera' a momenti");
} else {
    console.log("Ops! la tua e-mail non è stata trovata, verifica la tua iscrizione");
}
