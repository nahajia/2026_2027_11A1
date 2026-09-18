console.log(tomb)

//hány nő
let dbNo=0
for (const elem of tomb) {
    if(elem.nem==="nő")
        dbNo++
}
console.log(`Ennyi nő van: ${dbNo}`)

//van e nő
//eldontés

let volt= false
for (const elem of tomb) {
    if(elem.nem==="nő"){
        volt=true
        break
    }
}
if(volt)
    console.log(`Van nő.`)
else
    console.log(`Nincs nő`)

//válogassuk ki a nőket tömbbe

let tombNok = []
for (const elem of tomb) {
    if (elem.nem === "nő")
        tombNok.push(elem)
}
console.log(tombNok)

//A nők közül hány éves a legfiatalabb?

let legfiatalabb=999
for (const elem of tombNok) {
    if (elem.kor<legfiatalabb)
        legfiatalabb=elem.kor
}
console.log(`A legfiatalabb nő ennyi éves: ${legfiatalabb}`)

//nők átlag életkora
let osszeg=0
for (const elem of tombNok) {
    osszeg+=elem.kor
}
console.log(`A nők átlag életkora: ${osszeg/tombNok.length}`)

//A debreceniek kulon tombbe
let debreceniek=[]
for (const elem of tomb) {
    if(elem.varos==="Debrecen")
        debreceniek.push(elem)
}
console.log(debreceniek)

//a Debreceni férfiak közül ki a legfiatalabb
let legfiatalDeb=999
for (const elem of debreceniek) {
    if (elem.kor<legfiatalDeb && elem.nem==="férfi")
        legfiatalDeb=elem.kor
}
console.log(`A debreceni férfiak közül a legfiatalabb: ${legfiatalDeb}`)

//Debreceniek nek mennyi az átlag magassága

let osszegMag=0
for (const elem of debreceniek) {
    osszegMag+=elem.magasság
}
console.log(`A debreceniek nek az átlag magassága: ${osszegMag/debreceniek.length}`)

//van e a debreceniek között van e férfi?

let voltH=false
for (const elem of debreceniek) {
    if(elem.nem==="férfi"){
        voltH=true
        break
    }
}
if(voltH)
    console.log(`Van`)
else
    console.log(`Nincs`)