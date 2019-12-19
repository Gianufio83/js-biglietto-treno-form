var kmDaPercorrere = parseInt(prompt('Inserisci il numero di km da percorrere'));
.console.log(kmDaPercorrere);
var etaUtente = parseInt(prompt('Inserisci età del passeggero'));
.console.log(etaUtente);
var prezzokm = 0.21;
var costoBiglietto = prezzokm * kmDaPercorrere;
.console.log(costoBiglietto);

var messaggio = 'Il costo del tuo biglietto è:' + costoBiglietto.tofix(2) + '€';

if (etaUtente < 18) {
  costoBiglietto -= ((costoBiglietto * 20) / 100);
  messaggio = 'Puoi usufruire di uno sconto del 20%. Il costo del tuo biglietto è: ' + costoBiglietto + '€';
} else if (etaUtente > 65) {
  costoBiglietto = costoBiglietto - ((costoBiglietto * 40) / 100);
  messaggio = 'Puoi usufruire di uno sconto del 40%. Il costo del tuo biglietto è: ' + costoBiglietto + '€';
} else {
  messaggio = 'Il costo del tuo biglietto è: ' + costoBiglietto + '€';
}
document.getElementById('messaggio').innerHTML = messaggio;
