/*Tee sovellus, joka kysyy syötettävän sanan (merkkijono).
Sovellus testaa onko sana palindromi ts. sana on sama toisinpäin.
Esim. sana saippuakauppias on palindromi.

Web-ohjelmointi
Hanna Maksimainen/DTNS21*/

/*Luo ratkaisu siten että et käytä valmiita funktioita vaan teet oman algoritmin.*/

// Pyydetään arvo käyttäjältä inputilla
let input = require("readline-sync"); // Aina kun kysytään käyttäjältä, tulee olla tämä
let sana = input.question("Kerro sana niin katson onko se palindromi: "); // Kysytään käyttäjältä sana

length = sana.length; // Asetetaan arvo lenghtille

// Käydään sana for-silmukassa läpi.
for (let x = 0; x < length / 2; x++) {
  // Jos sana on palindromi, palautuu käyttäjälle hänen laittamansa sana ja teksti, "on palindromi"
  if (sana[x] === sana[length - 1 - x]) {
    console.log(sana + " on palindromi");
    break; // Jos sana on palindromi, ohjelma loppuu

    // Jos sana ei ole palindromi, palautuu käyttäjälle hänen laittamansa sana ja teksti, "ei ole palindromi"
  } else {
    console.log(sana + " ei ole palindromi");
    break; // Jos sana ei ole palindromi, ohjelma loppuu
  }
}

/*Muuta edellinen ratkaisu funktioksi joka palauttaa boolean arvon true, mikäli funktion 
parametrina oleva sana on palindromi (jos ei, niin palautetaan false).
Kutsu funktiota.*/

// Luodaan funktio, onkoPalindromi
function onkoPalindromi() {
  let input = require("readline-sync"); // Aina kun kysytään käyttäjältä, tulee olla tämä
  let sana = input.question("Kerro sana niin katson onko se palindromi: "); // Kysytään käyttäjältä sana

  length = sana.length; // Asetetaan arvo lenghtille
  let palindromi = true; // Asetetaan alkuarvo palindromille, on totta

  // Käydään sana for-silmukassa läpi.
  for (let x = 0; x < length / 2; x++) {
    // Jos sana on palindromi, palautuu käyttäjälle true
    if (sana[x] === sana[length - 1 - x]) {
      console.log(true); // Tulostetaan tulos eli true
      return true; // Palautetaan true

      // Jos sana ei ole palindromi, palautuu käyttäjälle false
    } else {
      console.log(false); // Tulostetaan tulos eli false
      //break;
      return false; // Palautetaan false
    }
  }
}

onkoPalindromi(); // Täällä kutsutaan funktiota
