// incapsulare la nivel de functii

// fisier1.js
var games = ["test"];
setTimeout(function () {
  console.log('exemple.js', games)
}, 1000);

// fisier2.js
var games = [2]


// problem mai sus:  variabila games va avea de fapt [2] si nu ['test']
// solutia este sa folosim o functie

// fisier1.js - continut nou
function startApp() {

  var games = ["test"];

  setTimeout(function () {
    console.log('exemple.js', games)
  }, 1000);
}
startApp();
