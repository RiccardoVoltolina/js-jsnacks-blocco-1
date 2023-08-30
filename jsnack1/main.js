/* Snack 1:
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

/* let risultato = document.querySelector('div')
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
} */




/* Da fare con WHILE tutti I prossimi snacks
Snack 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

let i = 1

let listaNumeri = [];

while (i <= 2) {
    const numeroUtente = Number(prompt('Inserisci un numero'));

    if (isNaN(numeroUtente)) {
        alert('Perfavore, inserisci un numero');
        i--;
    } else {
        listaNumeri.push(numeroUtente)
        
    }
    i++
}

console.log(listaNumeri);

if (listaNumeri[0] > listaNumeri [1]) {
    console.log('Il primo numero è il più grande ' + listaNumeri[1]);
} else if (listaNumeri[1] > listaNumeri [0]) {
    console.log('Il secondo numero è il più grande ' + listaNumeri[0]);
} else {
    console.log('I numeri scelti sono uguali' + listaNumeri[0]);
}
