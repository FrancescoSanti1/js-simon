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

document.getElementById("contenuti").innerHTML =
`<h3>Hai dieci secondi per memorizzare questi cinque numeri:</h3>
<div id="contenitore-numeri" class="contenitore-flex"></div>`;

console.log("Numeri generati:", listaNumeri);

// stampo in pagina la lista di numeri generata
stampaNumeri(listaNumeri);

// dopo dieci secondi
setTimeout(() => {

    // tolgo i numeri dalla pagina
    document.getElementById("contenuti").innerHTML = "";

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

    document.getElementById("contenuti").innerHTML =
    `<h3>Hai indovinato ${contatoreIndovinati} numeri:</h3>
    <div id="contenitore-numeri" class="contenitore-flex"></div>`;

    // stampo in pagina i numeri indovinati dall'utente
    stampaNumeri(numeriIndovinati);    

}, 10000);

    


// funzioni

function numeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function stampaNumeri(listaDaStampare) {
    listaDaStampare.forEach(elemento => {
        document.getElementById("contenitore-numeri").innerHTML +=
        `<div class="numero">${elemento}</div>`;
    });
}