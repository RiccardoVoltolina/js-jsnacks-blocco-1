/* :barretta_cioccolato: :barretta_cioccolato: Snack Bonus:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */



let arrayVuoto = [];
for (let i = 0; i < 6; i++) {
    const domanda = Number (prompt ('inserisci un numero'));
    if (domanda % 2 !== 0) {
        arrayVuoto.push (domanda)
        console.log(arrayVuoto);
    } else {
        console.log('pari');
    }
  
    
}