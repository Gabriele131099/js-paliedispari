var parola = prompt("inserisci una parola");
var parolaOutput = document.getElementById("parola")

var parolaInversa = invertiParola(parola);

function invertiParola(testo){
  var testoInversa = testo.split('').reverse().join('');  
  return testoInversa;
}
if(parola == parolaInversa){
    parolaOutput.innerHTML= 'la parola è palindroma'
} else {
    parolaOutput.innerHTML= 'la parola non è palindroma'
}
  
