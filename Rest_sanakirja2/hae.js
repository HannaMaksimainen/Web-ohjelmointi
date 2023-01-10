let input = require("readline-sync"); // Aina kun kysytään käyttäjältä, tulee olla tämä
let kayttajanKysymys = input.question("Anna suomenkielinen sana: ");

url = "http://localhost:3000/sanakirja";

//Axios get
const axios = require("axios"); // axios käyttöön
const promise = axios.get(url); // Osoite sanakirjalle, josta haetaan vastine suomenkieliselle sanalle
promise.then((response) => {
  const sanaSuomi = response.data; // Jos löytyy
  sanaSuomi.map((etsittavaSana) => {
    if (etsittavaSana.fin == kayttajanKysymys) {
      // Jos etsittävä suomenkielinen sana on sama kuin käyttäjän kysymys
      console.log(
        "Sana ",
        kayttajanKysymys,
        " on englanniksi ",
        etsittavaSana.eng
      ); // Tulostetaan englanninkielinen sana käyttäjälle
    }
  });
});
