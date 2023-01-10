/*
Tee puhelinluettelo.
Puhelinluetteloon lisäät taulukkoon objekteja (eli henkilöitä joilla nimi ja puhelinnumero).
Käyttäjältä kysytään henkilön nimi ja puhelinnumero.
Henkilön poisto -toimintoa ei tarvitse tässä versiossa olla.

Tee hakutoiminto jossa haet nimen perusteella puhelinnumeron.

----

Tee puhelinnumeron haku funktioksi.
Funktion parametrina on taulukko josta haetaan ja henkilön nimi.
Funktio palauttaa puhelinnumeron.
Kutsu funktiota.

Käyttöliittymän voit tehdä millaiseksi haluat (komentokehoite -pohjainen kuitenkin)

Hanna Maksimainen
Web-ohjelmointi
Syksy2022
*/

// KORJATTU VERSION AIEMMASTA PALAUTUKSESTA

// Luodaan taulukko, johon lisätään henkilöiden nimet ja puhelinnumerot
let henkilot = [
  {
    nimi: "Matti",
    puhelinnumero: 1345678,
  },
  {
    nimi: "Teppo",
    puhelinnumero: 9876541,
  },
  {
    nimi: "Seppo",
    puhelinnumero: 45612354,
  },
];

//Input, jotta käyttäjää voidaan opastaa valikon kanssa.
let input = require("readline-sync"); // Aina kun kysytään käyttäjältä, tulee olla tämä
let kayttajanKysymys = input.question(
  "PAINA 1: JOS HALUAT LISATA TIETOJA, PAINA 2: JOS HALUAT HAKEA HENKILON PUHELINNUMERO NIMELLA, PAINA MITA TAHANSA MUUTA NAPPAINTA: JOS HALUAT, ETTA OHJELMA PAATTYY: "
);

// Käydään käyttäjän vaihtoehdot While-loopilla läpi eli käyttäjä voi lisätä henkilön, hakea henkilön tai lopettaa ohjelman
while (true) {
  if (kayttajanKysymys == 1) {
    // Jos käyttäjä valitsee 1, hän voi lisätä henkilön
    let input = require("readline-sync"); // Aina kun kysytään käyttäjältä, tulee olla tämä
    console.log("HENKILON LISAYS"); // Ilmoitus, että on valittu henkilön lisäys
    let nimi = input.question("Anna henkilon nimi: "); // Pyydetään henkilön nimi
    let puhelinnumero = input.question("Anna henkilon puhelinnumero: "); // Pyydetään henkilön puhelinnumero
    puhelinnumero = parseInt(puhelinnumero); // Muokkaa string muodosta numeraaliseen muotoon
    console.log("Henkilo on lisatty."); // Ilmoitus, että henkilö on lisätty.
    henkilot.push({ nimi, puhelinnumero }); // Lisätään uusi henkilö taulukkoon
    console.log(henkilot); // Näytetään koko taulukko

    let jatko = input.question(
      "Jos haluat jatkaa, paina 1, jos haluat lopettaa, paina mita tahansa muuta nappainta: " // Jos käyttäjä haluaa jatkaa, painaa 1, ohjelma päättyy millä tahansa muulla näppäimellä
    );
    if (jatko == 1) {
    } else {
      henkilot.push({ nimi, puhelinnumero }); // Lisätään uusi henkilö
      console.log("Henkilo on lisatty."); // Ilmoitus, että henkilö on lisätty.
      console.log(henkilot); // Näytetään koko taulukko

      // Jos käyttäjä painaa muuta kuin 1, ohjelma päättyy
      console.log("Ohjelma paattyy, kiitos ja hei!");
      break;
    }
  } else if (kayttajanKysymys == 2) {
    let input = require("readline-sync"); // Aina kun kysytään käyttäjältä, tulee olla tämä
    console.log("HENKILON HAKU"); // Ilmoitus, että on valittu henkilön haku

    let nimiVastaus = input.question(
      "Anna henkilon nimi niin katson loytyyko hanen numeronsa: "
    ); // Pyydetään käyttäjältä henkilön nimi
    console.log(haePuhelinnumero(henkilot, nimiVastaus)); // haePuhelinnumero() functiota kutsutaan tässä

    let jatko = input.question(
      // Jos käyttäjä haluaa jatkaa, painaa 1, ohjelma päättyy millä tahansa muulla näppäimellä
      "Jos haluat jatkaa, paina 1, jos haluat lopettaa, paina mita tahansa muuta nappainta: "
    );
    if (jatko == 1) {
    } else {
      // Jos käyttäjä painaa muuta kuin 1, ohjelma päättyy
      console.log("Ohjelma paattyy, kiitos ja hei!");
      break;
    }
  } else {
    console.log("Ohjelma paattyy, kiitos ja hei!"); // Ohjelma päättyy jos ei valitse valikosta joko 1 tai 2
    break;
  }
}

// Tehdään funktio haePuhelinnumero, jonka parametreina ovat taulukko henkilöt ja nimi
function haePuhelinnumero(henkilot, nimi) {
  console.log("Haetaan henkilon " + nimi + " puhelinnumero:"); // Ilmoitetaan käyttäjälle, että haetaan henkilön x puhelinnumero
  var henkilotTulos = henkilot.map((henkilo) => {
    // Käydään henkilotTulos läpi mapin kautta
    if (henkilo.nimi == nimi) {
      // Jos haettu nimi on nimi taulukossa
      return henkilo.puhelinnumero; // Palautetaan puhelinnumero
    }
  });
  // henkilotTulos taulukko sisältää listan, jossa on kyseisen henkilön puhelinnumero sekä tyhjiä kenttiä (undefined).
  // Parsitaan undefined pois, jotta saadaan puhelinnumero, liittyy map function returniin.
  var tulos = henkilotTulos.filter(function (element) {
    return element !== undefined;
  });
  tulos = tulos[0];

  return tulos; // Map-funktio palauttaa 3:n arvon taulukon, josta ensimmäinen on funktion tulos, jota tarvitaan. Sen takia otetaan [0] indeksi
}
