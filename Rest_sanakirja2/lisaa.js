const axios = require("axios"); // axios käyttöön

let input2 = require("readline-sync");
let sananLisaysFin = input2.question("Anna lisattava sana suomeksi: "); // Pyydetään käyttäjältä sana suomeksi
let sananLisaysEng = input2.question("Anna lisattava sana englanniksi: "); // Pyydetään suomekielinen sana englanniksi

url = "http://localhost:3000/sanakirja/";

async function postData() {
  let sanat = {
    // Määritellään sanat
    fin: sananLisaysFin,
    eng: sananLisaysEng,
  };

  // Tarkastetaan sana try-catch lohkossa
  try {
    const response = await axios.post(url, sanat);
    console.log("Sanapari lisatty!"); // Jos sanapari lisätään onnistuneesti, ilmoitetaan se käyttäjälle
  } catch (error) {
    // Muutoin tulee virhe
    if (error.response) {
      console.log(error.reponse.status);
    } else {
      console.log(error.message);
    }
  }
}

postData(); // Kutsutaan funktiota
