/* :barretta_cioccolato: Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */
 
/* let risultato = document.querySelector('div')
let parola1 = prompt ('inserisci qui la tua prima parola')
let parola2 = prompt ('inserisci qui la tua seconda parola')
if (parola1.length > parola2.length) {
    risultato.innerHTML = ('La prima parola scelta (' + parola1 + ')' + ' è più lunga rispetto alla seconda parola scelta (' + parola2 + ')');

} else if (parola1.length < parola2.length) {
    risultato.innerHTML = ('La seconda parola scelta (' + parola2 + ')' + ' è più lunga rispetto alla prima parola scelta (' + parola1 + ')');
} else {
    risultato.innerHTML = ('Le parole selezionate hanno lo stesso numero di caratteri ( ' + parola1 + ' e ' + parola2 + ')');
} */



/* (con while) Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

let i = 1
let listaParole = []


while (i <= 2) {
    let paroleUtente = prompt ('Inserisci una parola')
    i++
    listaParole.push(paroleUtente)
}


if (listaParole[0].length < listaParole[1].length) {
    console.log('La seconda parola selezionata è più lunga ( ' + listaParole[1] + ' )');
} else if (listaParole[0].length > listaParole[1].length) {
    console.log('La prima parola selezionata è più lunga ( ' + listaParole[0] + ' )');
} else {
    console.log('Le parole selezionate hanno la stessa lunghezza');
}

