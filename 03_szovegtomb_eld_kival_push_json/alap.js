const gyumolcsok=["eper","mangó","sárgabarack","őszibarack","dinnye","szilva","sárkánygyümölcs","alma","sárgadinnye","áfonya"]

console.log(gyumolcsok)

//hány 6 karakternél hosszabb van?
let db=0
for (const elem of gyumolcsok) {
    if(elem.length>6)
        db++
}
console.log(`Ennyi 6 karakternél hosszabb van: ${db}`)

//eldöntés algoritmusa
//van e 10 karakternél hosszabb?

let volt = false
for (const elem of gyumolcsok) {
    if (elem.length>10){
        volt = true
        break
    }
}
if (volt)
    console.log(`Van 10 karakternél hosszabb szó`)
else
    console.log(`Nincs 10 karakternél hosszabb szó`)

//Kiválogatás algoritmusa
//A 10nel hosszabbakat új tömbbe

let gyumi10 = []
for (const elem of gyumolcsok) {
    if (elem.length>10)
        gyumi10.push(elem)
}
console.log(gyumi10)

//A 10nel hosszabbak kozül a legrövidebb
let legrovidebb = gyumi10[0]
for (const elem of gyumi10) {
    if(elem.length<legrovidebb.length)
        legrovidebb = elem
}
console.log(`A 10nél hosszabbak közül a legrövidebb: ${legrovidebb}`)
