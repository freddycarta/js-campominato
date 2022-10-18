console.log('hi');

const playButtonEl = document.querySelector('.play-button')
const gridElement = document.querySelector('.grid')
const difficoltaSelectEl = document.querySelector('select[name="difficolta"]')

playButtonEl.addEventListener('click',creaGriglia)

let posizionibombe = []

function creaGriglia() {
    resetGame()
    // genero la griglia
    console.log('creo griglia')
    // recupero difficolta
    const difficoltaSelezionata = difficoltaSelectEl.value;
    console.log(difficoltaSelezionata)

    let numerocelle = calcolaCelleGriglia(difficoltaSelezionata)
    //ciclare per creare  n celle con numeri a seconda della difficolt
    for (let i = 0; i < numerocelle; i++) {
        // console.log('cella n: ', i + 1)
        const cella = creaCella()
        cella.style.flexBasis = `${100 / dimensione}%`
        cella.innerHTML = i+1
        gridElement.append(cella)
    }

}

function generaBombe(max) {
    // creo array di 16 bombe
    const bombe = []
    // ciclo bombe

    return bombe
}


function creaCella() {
    // creo elemento del dom e aggiungo classe cella
    const el = document.createElement('div')
    el.classList.add('cella')
    // aggiungo listener al click
    el.addEventListener('click',onClick)

    return el
}

function onClick() {
    console.log(this)
    this.classList.add('clicked')

}

function resetGame() {
    // svuoto la griglia
    gridElement.innerHTML = ''
}

function calcolaCelleGriglia(difficoltaSelezionata) {
    let numerocelle = 100

    if(difficoltaSelezionata === 'medio') {
        numerocelle = 91 
    } else if (difficoltaSelezionata === 'difficile'){
        numerocelle = 49
    }

    return numerocelle
}
