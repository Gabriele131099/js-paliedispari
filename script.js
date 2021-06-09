var parola = prompt("inserisci una parola");
var parolaOutput = document.getElementById("parola")

var parolaInversa = invertiParola(parola);

function invertiParola(testo){
  var testoInverso = testo.split('').reverse().join('');  
  return testoInverso;
}
if(parola == parolaInversa){
    parolaOutput.innerHTML= 'la parola è palindroma'
} else {
    parolaOutput.innerHTML= 'la parola non è palindroma'
}
  
// pari e dispari numero da 1 a 5 random 

var numUtente = prompt("Inserisci un numero pari o dispari tra 1 e 5")
var numero1 = document.getElementById("numeroUtente")
while (numUtente<1 || numUtente>5) {
  numUtente = prompt("Inserisci un numero fra 1 e 5 per gareggiare")
} 
var valoreUtente = false

  
function pariDispari(sommaNum) {
  var numPc = Math.floor(Math.random()*5)
  var sommaNum = parseInt(numUtente)+ parseInt(numPc)
  if (sommaNum%2 === 0) {

    document.getElementById("gara").innerHTML = "Hai vintoooooooo!!"

  } else {
    document.getElementById("gara").innerHTML = "Hai perso"

  }

  
}
