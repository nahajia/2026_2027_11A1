//termekek arait taroljuk veletlenszeru legyen, 1000 nel olcsobbak 20db

let tomb=[]
for (let i = 0; i < 20; i++) {
    let veletlen=Math.floor(Math.random() * 1000) + 1;
    tomb.push(veletlen)
}
console.log(tomb)
//van e 10 forint alatti
let volt= false
for (const elem of tomb) {
    if(elem<10){
        volt=true
        break
    }
}
if(volt)
    console.log("Van 10 forinttól olcsóbb")
else
    console.log("Nincs 10 forinttól olcsóbb")
    
