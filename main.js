const numChilometri = prompt("quanti km vuoi percorrere?");

const chilometri = numChilometri();
const tariffa = tariffa(0.21);

document.getElementById("biglietto").innerHTML = 'chilometri * tariffe';



const biglietto = prompt("eta del passeggero");