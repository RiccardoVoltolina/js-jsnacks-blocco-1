/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */




const divElement = document.querySelector ('div')
let risultato = 0;
for (let i = 0; i < 10; i++) {
    let sceltaNumeri = Number(prompt ('scegli un numero'))
    risultato += sceltaNumeri
  }
console.log(risultato);
divElement.innerHTML = risultato