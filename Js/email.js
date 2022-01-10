console.log("OK")

/* 
# Mail
1-Crea un array di email;
2-Chiedi all’utente la sua email.
3-controlla che sia nella lista di chi può accedere, 
4-stampa un messaggio appropriato in console sull’esito del controllo.
*/

//1-Crea un array di email;
const partecipants = [`carolina@gmail.com`, `luca.gmail.com`, `pietro@hotmail.com`, `sara@gmail.com`];

console.table(partecipants)

//2-Chiedi all’utente la sua email.
const userAddress = parseInt(prompt('Inserisci il tuo indirizzo e-mail')); 

//3-controlla che sia nella lista di chi può accedere
for (let i = 0; i < partecipants; i++){
    if (userAddress = partecipants[i]){
        console.log("la riunione iniziera' a momenti")
    }
    else !(userAddress = partecipants[i]){
        console.log("Ops! la tua e-mail non è stata trovata, verifica la tua iscrizione")
    }
}