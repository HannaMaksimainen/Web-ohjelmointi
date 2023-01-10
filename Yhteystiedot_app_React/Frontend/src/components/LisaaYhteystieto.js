import React from "react";

import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import yhteystiedotContext from "../context/YhteystiedotContext";

export default function LisaaYhteystieto() {
  let history = useNavigate();
  const [kuva, setKuva] = useState("");
  const [etunimi, setEtunimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [puhelinnumero, setPuhelinnumero] = useState("");
  const [katuosoite, setKatuosoite] = useState("");
  const [postiosoite, setPostiosoite] = useState("");
  const [maa, setMaa] = useState("");

  //const [virheet, setVirheet] = useState({});
  const YhteystiedotContext = useContext(yhteystiedotContext); //hooks

  const handleSubmit = async (e) => {
    const uusiYhteystieto = {
      kuva: kuva,
      etunimi: etunimi,
      sukunimi: sukunimi,
      puhelinnumero: puhelinnumero,
      katuosoite: katuosoite,
      postiosoite: postiosoite,
      maa: maa,
    };
    console.log("Tarkistetaan uusiYhteystieto:");
    console.log(uusiYhteystieto);

    YhteystiedotContext.setYhteystiedot(uusiYhteystieto);
    history("/");
  };
  return (
    <div className="card mb-3">
      <h1 className="display-4 mb-2">
        <span className="text-primary">Lisää yhteystieto</span>
      </h1>
      <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="kuva">Kuva</label>
            <input
              id="kuvatieto"
              type="text"
              name="kuva"
              className="form-control form-control-lg"
              placeholder="Syötä kuvan osoite..."
              value={kuva}
              onChange={(event) => setKuva(event.target.value)}
            />
          </div>
          <br></br>

          <div className="form-group">
            <label htmlFor="etunimi">Etunimi</label>
            <input
              id="etunimitieto"
              type="text"
              name="etunimi"
              className="form-control form-control-lg"
              placeholder="Syötä etunimi..."
              value={etunimi}
              onChange={(event) => setEtunimi(event.target.value)}
            />
          </div>
          <br></br>

          <div className="form-group">
            <label htmlFor="sukunimi">Sukunimi</label>
            <input
              id="sukunimitieto"
              type="text"
              name="sukunimi"
              className="form-control form-control-lg"
              placeholder="Syötä sukunimi..."
              value={sukunimi}
              onChange={(event) => setSukunimi(event.target.value)}
              //error={virheet.nimi}
            />
          </div>
          <br></br>

          <div className="form-group">
            <label htmlFor="puhelinnumero">Puhelinnumero</label>
            <input
              id="puhelinnumerotieto"
              type="text"
              name="puhelinnumero"
              className="form-control form-control-lg"
              placeholder="Syötä puhelinnumero..."
              value={puhelinnumero}
              onChange={(event) => setPuhelinnumero(event.target.value)}
              //error={virheet.puhelin}
            />
          </div>
          <br></br>

          <div className="form-group">
            <label htmlFor="katuosoite">Katuosoite</label>
            <input
              id="katuosoitetieto"
              type="text"
              name="katuosoite"
              className="form-control form-control-lg"
              placeholder="Syötä katuosoite..."
              value={katuosoite}
              onChange={(event) => setKatuosoite(event.target.value)}
              //error={virheet.nimi}
            />
          </div>
          <br></br>

          <div className="form-group">
            <label htmlFor="postiosoite">Postiosoite</label>
            <input
              id="postiosoitetieto"
              type="text"
              name="postiosoite"
              className="form-control form-control-lg"
              placeholder="Syötä postiosoite..."
              value={postiosoite}
              onChange={(event) => setPostiosoite(event.target.value)}
              //error={virheet.nimi}
            />
          </div>
          <br></br>

          <div className="form-group">
            <label htmlFor="maa">Maa</label>
            <input
              id="maatieto"
              type="text"
              name="maa"
              className="form-control form-control-lg"
              placeholder="Syötä maa..."
              value={maa}
              onChange={(event) => setMaa(event.target.value)}
              //error={virheet.nimi}
            />
          </div>
          <br></br>
          <input
            type="submit"
            value="Tallenna"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    </div>
  );
}
