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
// variabili numeriche



  
function pariDispari(sommaNum) {
var numUtente = prompt("Inserisci un numero pari o dispari tra 1 e 5")
var numPc = Math.floor(Math.random()*5)
document.getElementById("numUtente").innerHTML = "il tuo numero " + numUtente 

// controlla se il numero è fra 1 e 5
while (numUtente<1 || numUtente>5) {
  numUtente = prompt("Inserisci un numero fra 1 e 5 per gareggiare")
} 

// controlla se il numero utente e pari o dispari
  var sommaNum = parseInt(numUtente)+ parseInt(numPc)
  if (sommaNum%2 === 0 && numUtente%2===0) {

    document.getElementById("gara").innerHTML = " vintoooooooo!!"

  } else {
    document.getElementById("gara").innerHTML = " perso"

  }
 

  
}
