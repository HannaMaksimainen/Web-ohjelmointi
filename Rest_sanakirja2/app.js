const express = require("express");
const fs = require("fs"); // lisätään npm i fs
const app = express(); // express on lisätty
const port = 3000;
const axios = require("axios"); // axios käyttöön

// Luodaan tyhjä aputaulukko
let sanakirja = [];

// Luetaan yhteen datamuuttujaan
let data = fs.readFileSync("./sanakirja.txt", { encoding: "utf8", flag: "r" });

// Raakadata hajoitetaan sanapareiksi
const splitLines = data.split(/\r?\n/); // suluissa oleva hajoittaa tab + rivinvaihto

splitLines.forEach((line) => {
  // tehokas silmukan läpikäynti
  const sanat = line.split(" ");
  //console.log(sanat);
  const sana = {
    fin: sanat[0], // Suomenkielinen sana
    eng: sanat[1], // Englanninkielinen sana
  };
  // Lisätään sanakirjaan sana/sana-pari
  sanakirja.push(sana);
});
// Tulostetaan sanakirja
console.log(sanakirja);

//tulee olla
app.use(express.json()); // Ilmoitetaan, että käytetään json muotoa, liittyy http:hen
app.use(express.urlencoded({ extended: true })); // Käytetään tiedonsiirrossa laajennettua muotoa

//CORS asetukset, tulee olla, että voi käyttää toisella koneella myös

// Ensin metodit, jotta voi käyttää
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*"); // Antaa mistä tahansa yhdistää

  // Request methods you wish to allow
  res.setHeader(
    // response palauttaa headerin
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE" // Metodit, joita sallitaan, tarvitaan vaan get ja post tässä ohjelmassa
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token" // Mitä sallitaan, esim. lomake + laatikot ja tiedon siirto sitä kautta
  );

  // Set to true if you need the website to include cookies in the requests sent, react käyttää monesti
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Content-type", "application/json"); // Tiedonsiirto json muodossa
  next(); // Next siirtää eteenpäin
});

//GET kaikki sanat eli tulostuu kaikki tiedostossa olevat sanat
app.get("/sanakirja", (req, res) => {
  res.json(sanakirja); // Palautetaan sanakirja taulukko JSON MUODOSSA
});

// Get suomenkielinen sana, tulostaa englanninkielisen vastineen
app.get("/sanakirja/:fin", (req, res) => {
  const fin = String(req.params.fin); // Parametriksi suomenkielinen sana
  const suomiSana = sanakirja.find((suomiSana) => suomiSana.fin === fin); // "Alustetaan" suomiSana

  res.json(suomiSana.eng); // Tulostetaan sanan englanninkielinen vastine
});

//POST, kirjoitetaan tiedostoon sanakirja.txt uusi lisättävä sanapari
app.post("/sanakirja", (req, res) => {
  //console.log(req.body); // pyyntö reqistä, postitetaan json muodossa sanapari
  const sanaPari = req.body;
  sanakirja.push(sanaPari); // Lisätään sanapari sanakirjaan
  console.log(sanakirja); // Tulostetaan sanakirja
  try {
    data = data + `\n${sanaPari.fin} ${sanaPari.eng}`; // Otetaan suomenkielinen sana ja englannin kielinen vastine
    //Tiedoston käsittely, kirjoittaa sanakirja.txt tiedostoon
    fs.writeFileSync("./sanakirja.txt", data);
    return res.status(201).json(sanaPari); // Palauttaa statukseksi 201 ja json sanaparin
  } catch (error) {
    // Jos tulee vikatilanne
    console.log(error); // Tänne mennään virheen sattuessa
    return res.status(500).json(err); // Koodi, mitä halutaan palauttaa eli tässä tilanteessa virhe 500
  }
});

app.listen(3000, () => {
  console.log("Server listening at port 3001");
});
