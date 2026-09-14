// json tomb
const tomb =[
    {
        "nev":"Anna",
        "kor": 17,
        "varos":"Debrecen",
        "nem":"nő"
    },
    {
        "nev":"Béla",
        "kor": 19,
        "varos":"Debrecen",
        "nem":"férfi"
    },
    {
        "nev":"Attila",
        "kor": 22,
        "varos":"Budapest",
        "nem":"férfi"
    },
    {
        "nev":"Aliz",
        "kor": 16,
        "varos":"Debrecen",
        "nem":"nő"
    },


]
console.log(tomb)
// háy nő van
let dbNo =0
for (const elem of tomb) {
    if (elem.nem==="nő")
        dbNo++
}
console.log(`Ennyi nő van:${dbNo}`)