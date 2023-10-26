const numChilometri = parseInt(prompt("quanti km vuoi percorrere?"));
const eta = parseInt(prompt("eta del passeggero"));
const tariffa = 0.21;
const percorrenza = numChilometri * tariffa;
document.getElementById("biglietto").innerHTML = 'il biglietto e ' + percorrenza + 'euro';
console.log(percorrenza);

if ("eta <= 18"){
    document.getElementById("minorenni").innerHTML = ((percorrenza / 100) * 80) + 'euro';
} 
    






