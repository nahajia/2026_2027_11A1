console.log("hello")
tomb=[17,18,16,17,18,21,15]
console.log(tomb)

//hány nagykorú
let db=0
for (let i = 0; i < tomb.length; i++) {
   if (tomb[i]>=18)
        db++
}
console.log(`Ennyi nagykorú van: ${db}`)

//for of
let db2=0
for (const elem of tomb) {
       if (elem>=18)
        db2++
}
console.log(`Ennyi nagykorú van: ${db2}`)

//foreach
let db3=0
tomb.forEach(elem => {
        if (elem>=18)
           db3++
});
console.log(`Ennyi nagykorú van: ${db3}`)

//for in
let db4=0
for (const i in tomb) {
        if (tomb[i]>=18)
          db4++
}
console.log(`Ennyi nagykorú van: ${db4}`)

//for loop, legfiatalabb életkora
let legfiatalabb=999
for (let i = 0; i < tomb.length; i++) {
        if (tomb[i]<legfiatalabb)
                legfiatalabb=tomb[i]
}
console.log(`A legfiatalabb: ${legfiatalabb}`)

//for of, átlagéletkor
let osszeg=0
for (const elem of tomb) {
        osszeg+=elem
}
console.log(`Átlagéletkor: ${osszeg/tomb.length}`)

//foreach, legöregebb életkora
let legor=-999
tomb.forEach(elem => {
        if (elem>legor)
           legor=elem
});
console.log(`A legöregebb: ${legor}`)


//for in, hány 16-nál fiatalabb
let db16=0
for (const i in tomb) {
        if (tomb[i]<16)
            db16++
 }
console.log(`16 évesnél fiatalabbak száma: ${db16}`)
