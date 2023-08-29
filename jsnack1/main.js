/* Snack 1:
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

let risultato = document.querySelector('div')
let numero1 = prompt ('Inserisci qui il tuo primo numero')
let numero2 = prompt ('Inserisci qui il tuo secondo numero')
if (numero1 < numero2) {
    console.log(numero2);
    risultato.innerHTML = 'Il numero più grande selezionato è il secondo (' + numero2 + ')'

} else if (numero1 > numero2) {
    console.log('entrambi avete scelto il numero: ' + numero1 );
    risultato.innerHTML = 'Il numero più grande selezionato è il primo (' + numero1 + ')'

} else {
    console.log(numero1);
    risultato.innerHTML = 'I numeri selezionati sono uguali (' + numero1 + ')'
}
