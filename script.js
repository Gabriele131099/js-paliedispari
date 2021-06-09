var parola = prompt("inserisci una parola");
document.getElementById("palindromo").innerHTML ="la tua parola è " + parola
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

 
function pariDispari(sommaNum) {
  // variabili numeriche
  var max = 5
  var min =1
  var numUtente = prompt("Inserisci un numero pari o dispari tra 1 e 5")
  var numPc = Math.floor(Math.random()*max)
  document.getElementById("numPc").innerHTML = "il numero del pc è " + numPc

  // controlla se il numero è fra 1 e 5
  while (numUtente<min || numUtente>max) {
    numUtente = prompt("Inserisci un numero fra 1 e 5 per gareggiare")
  } 
  document.getElementById("numUtente").innerHTML = "il tuo numero " + numUtente 


// controlla se il numero utente e pari o dispari
  var sommaNum = parseInt(numUtente)+ parseInt(numPc)
  if (sommaNum%2 === 0 && numUtente%2===0) {

    document.getElementById("gara").innerHTML = " vintoooooooo!! , il numero è pari"

  } else if (sommaNum%2 === min && numUtente%2===max) {

    document.getElementById("gara").innerHTML = " vintoooooooo!!, il numero è dispari"

  } else{
    document.getElementById("gara").innerHTML = " perso.... Ha vinto il pc"

  }
}
