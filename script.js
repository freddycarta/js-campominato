console.log('hi');

const playButtonEl = document.querySelector('.play-button')
const gridElement = document.querySelector('.grid')
const difficoltaSelectEl = document.querySelector('select[name="difficolta"]')

console.dir(gridElement)

playButtonEl.addEventListener('click', startGame)

let posizionibombe = []
let punteggio = []

function startGame() {
    resetGame()
    // genero la griglia
    console.log('creo griglia')
    // recupero difficolta
    const difficoltaSelezionata = difficoltaSelectEl.value;
    // console.log(difficoltaSelezionata)

    let dimensione  = calcoloDimensioneGriglia(difficoltaSelezionata)
    posizionibombe = generaBombe(dimensione ** 2)
    console.log(posizionibombe)
    //ciclare per creare  n celle con numeri a seconda della difficolt
    creaGriglia(dimensione)

}

function creaGriglia (dimensioneGriglia)  {

    const numerocelle = dimensioneGriglia**2

    for (let i = 0; i < numerocelle; i++) {
        const cella = creaCella()
        cella.style.flexBasis = `${100 / dimensioneGriglia}%`
        cella.dataset.numero = i + 1
        gridElement.append(cella)
    }
}

function generaBombe(max) {
    // creo array di 16 bombe
    const bombe = []
    // ciclo bombe
    while (bombe.length < 16) {
        // geneero num da 1 a max
        // se num non è nell'array
        const n = getRandomIntInclusive(1,max)

        if(!bombe.includes(n)) {
            bombe.push(n)
        }
        // allora pusho 
         
    }

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
    console.log(this.dataset)
    const numerocella = parseInt (this.dataset.numero)
    // console.log (numerocella)
    // console.log(posizionibombe.includes(numerocella))
    let className = 'success'
    if (posizionibombe.includes(numerocella)) {
        className = 'bomb'
        gameOver()

    } else {
        // incremento punteggio
        punteggio++
        console.log(punteggio)
    }


    this.classList.add(className)
}


function resetGame() {
    // svuoto la griglia
    gridElement.innerHTML = ''
    // resetto punteggio
    punteggio = 0
}

function gameOver() {
    document.body.innerHTML += `Hai totalizzato ${punteggio} punti`
}


function calcoloDimensioneGriglia(difficolta) {
    let dimensione = 10

    if(difficolta === 'medio') {
        dimensione = 9 
    } else if (difficolta === 'difficile'){
        dimensione = 7
    }

    return dimensione
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
