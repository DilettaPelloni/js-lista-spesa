// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

//creo la lista della spesa
const items = [
    'Acqua',
    'Latte',
    'Yogurt',
    'Cannella',
    'Ogni cosa bella'
]

//vado a prendere <ul>
const itemList = document.getElementById('item-list');

//creo un indice
let i = 0;

//stampo la lista della spesa inserendo un <li> dentro a <ul> per ogni elemento della lista
while (i < items.length) {

    //creo un <li>
    const item = document.createElement('li');

    //ci metto dentro l'i-esimo valore dell'array
    item.innerHTML = items[i];

    //aggiungo il <li> al contenuto di <ul>
    itemList.append(item);

    //incremento i
    i++;
}