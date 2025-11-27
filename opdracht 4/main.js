let geboorteJaar = prompt("In welke jaar ben je geboren?");
let huidigeJaar = new Date().getFullYear();
let leeftijd = huidigeJaar - geboorteJaar;

document.getElementById("leeftijd").innerText = "Je bent " + leeftijd + " jaar oud.";