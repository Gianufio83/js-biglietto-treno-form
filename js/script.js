// var kmDaPercorrere = parseInt(prompt('Inserisci il numero di km da percorrere'));
// .console.log(kmDaPercorrere);
// var etaUtente = parseInt(prompt('Inserisci età del passeggero'));
// .console.log(etaUtente);
// var prezzokm = 0.21;
// var costoBiglietto = prezzokm * kmDaPercorrere;
// .console.log(costoBiglietto);
// var messaggio;
//
// var messaggio = 'Il costo del tuo biglietto è:' + costoBiglietto.tofix(2) + '€';
//
// if (etaUtente < 18) {
//   costoBiglietto -= ((costoBiglietto * 20) / 100);
//   messaggio = 'Puoi usufruire di uno sconto del 20%. Il costo del tuo biglietto è: ' + costoBiglietto + '€';
// } else if (etaUtente > 65) {
//   costoBiglietto = costoBiglietto - ((costoBiglietto * 40) / 100);
//   messaggio = 'Puoi usufruire di uno sconto del 40%. Il costo del tuo biglietto è: ' + costoBiglietto + '€';
// } else {
//   messaggio = 'Il costo del tuo biglietto è: ' + costoBiglietto + '€';
// }
// document.getElementById('messaggio').innerHTML = messaggio;

var buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener('click',
function() {
  var inputNome = document.getElementById('nome-utente');
  var nome = inputNome.value;
  console.log(nome);

  var inputKm = document.getElementById('km');
  var kmDaPercorrere = inputKm.value;
  console.log(kmDaPercorrere);

  var fasciaEtaSelect = document.getElementById('fascia-eta');
  var fascia = fasciaEtaSelect.value;
  console.log(fascia);

  var prezzokm = 0.21;
  var costoBiglietto = prezzokm * kmDaPercorrere;
  console.log(costoBiglietto);

  if (fascia == 'minorenne') {
    costoBiglietto -= ((costoBiglietto * 20) / 100);
    offerta = 'Sconto Minorenne';
  } else if (fascia == 'over65') {
    costoBiglietto = costoBiglietto - ((costoBiglietto * 40) / 100);
    offerta = 'Sconto Silver';
  } else (fascia == 'maggiorenne')
    costoBiglietto;
    offerta = 'Prezzo standard';
  }
// );

  var carrozza = Math.floor(Math.random() * 9) + 1;
  var codice = Math.floor(Math.random() * (100000 - 90000 + 1) );

  document.getElementById('nome-passeggero').innerHTML = nome;
  document.getElementById('offerta').innerHTML = offerta;
  document.getElementById('carrozza').innerHTML = carrozza;
  document.getElementById('codice-cp').innerHTML = codice;
  document.getElementById('costo').innerHTML = costoBiglietto.tofix(2);

// var dettaglioBigliettoDiv = document.getElementById('ticket');
// dettaglioBigliettoDiv.classList.remove('nascosta');
// dettaglioBigliettoDiv.classList.add('evidente');
// }
// );
