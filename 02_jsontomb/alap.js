console.log(tomb)

//for of hány nagykorú
let dbNagykoru=0
for (const elem of tomb) {
    if (elem.kor>=18)
        dbNagykoru++
}
console.log(`Nagykorúak száma: ${dbNagykoru}`)

//foreach , hány debreceni
let dbDebrecen=0
tomb.forEach(elem => {
    if(elem.varos=="Debrecen")
        dbDebrecen++
});
console.log(`Debreceniek száma: ${dbDebrecen}`)
