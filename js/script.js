// Passi logici

// ripeto fino a ottenere cinque numeri casuali univoci
    // genero un numero casuale intero
    // se il numero generato non è già parte della lista di numeri
        // allora lo aggiungo alla lista
// stampo in pagina la lista di numeri generata
// dopo trenta secondi tolgo i numeri dalla pagina
// ripeto quanto segue tante volte, quanto è lunga la lista di numeri da indovinare
    // chiedo all'utente di scrivere uno dei numeri mostrati in pagina
    // confronto il numero scritto dall'utente con tutti i numeri della lista
        // se trovo corrispondenza
            // allora inserisco il numero nella lista dei numeri indovinati
// stampo in pagina i numeri indovinati dall'utente

const listaNumeri = [];

// ripeto fino a ottenere cinque numeri casuali univoci
while (listaNumeri.length < 5) {

    // genero un numero casuale intero
    let numero = numeroCasuale(1, 100);

    // se il numero generato non è già parte della lista di numeri
    if (!listaNumeri.includes(numero)) {

        // allora lo aggiungo alla lista
        listaNumeri.push(numero);
    }
}

console.log("Numeri generati:", listaNumeri);

// stampo in pagina la lista di numeri generata
listaNumeri.forEach(elemento => {
    document.getElementById("contenitore-numeri").innerHTML +=
    `<div class="numero">${elemento}</div>`;
});

// dopo dieci secondi
setTimeout(() => {

    // tolgo i numeri dalla pagina
    document.getElementById("contenuto-iniziale").classList.add("nascondi");

    const numeriIndovinati = [];
    let contatoreIndovinati = 0;
    // ripeto quanto segue tante volte, quanto è lunga la lista di numeri da indovinare
    for (let i = 0; i < listaNumeri.length; i++) {

        // chiedo all'utente di scrivere uno dei numeri mostrati in pagina
        let numeroUtente = parseInt(prompt("Scrivi uno dei numeri che hai visto sullo schermo."));

        // confronto il numero scritto dall'utente con tutti i numeri della lista
        if (listaNumeri.includes(numeroUtente)) {

            // se trovo corrispondenza
            // allora inserisco il numero nella lista dei numeri indovinati
            numeriIndovinati.push(numeroUtente);

            // incremento il contatore dei numeri indovinati
            contatoreIndovinati++;
        }
    }

    console.log("numeri indovinati:", numeriIndovinati);

    document.getElementById("contenuto-finale").classList.remove("nascondi");

    document.getElementById("contenuto-finale").innerHTML +=
    `<h3>Hai indovinato ${contatoreIndovinati} numeri:</h3>`;

    // stampo in pagina i numeri indovinati dall'utente
    numeriIndovinati.forEach(elemento => {
        document.getElementById("numeri-finale").innerHTML +=
        `<div class="numero">${elemento}</div>`;
    });

    

}, 10000);

    


// funzioni

function numeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}