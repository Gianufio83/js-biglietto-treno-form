// chiedere all'utente il numero di km che vuole percorrere
var kilometri = parseInt(prompt("Quanti km hai intenzione di percorrere?"));
console.log(kilometri);
// chiedere all'utene la sua età
var anni = parseInt(prompt("Indica la tua età"));
console.log(anni);
// tariffa 18-65 anni
var tariffaStandard = kilometri * 0.21;
console.log(tariffaStandard);
// tariffa 0-18 anni
var under18 = ((tariffaStandard * 20) / 100) ;
console.log(under18);
// // tariffa dopo i 65 anni
var over65 = ((tariffaStandard * 40) / 100) ;
console.log(over65);


// prezzi suddivisi per fasce d'età
if ((anni >= 18) && (anni <= 65)) {
  console.log(tariffaStandard);
} else if (anni <= 18) {
  console.log(under18);
} else {
    console.log(over65);
  }
