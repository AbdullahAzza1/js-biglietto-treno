const numChilometri = parseInt(prompt("quanti km vuoi percorrere?"));
const eta = parseInt(prompt("eta del passeggero"));
const tariffa = 0.21;
const percorrenza = numChilometri * tariffa;
console.log(percorrenza);

if ("sotto i 18"){
    document.getElementById("minorenni").innerHTML = percorrenza / 100 * 80 + 'euro';
} else if ("over65"){
    document.getElementById("over65").innerHTML = percorrenza / 100 * 60 + 'euro';
}
console.log(percorrenza.toFixed(2))
document.getElementById("biglietto").innerHTML = 'il biglietto e di ' + (percorrenza.toFixed(2)) + 'euro';
document.getElementById("minorenni").innerHTML = 'il biglietto under18 ' + (percorrenza.toFixed(1)) / 100 * 80 + 'euro';
document.getElementById("over65").innerHTML = 'il biglietto over65 ' + (percorrenza.toFixed(2)) / 100 * 60 + 'euro';

   






