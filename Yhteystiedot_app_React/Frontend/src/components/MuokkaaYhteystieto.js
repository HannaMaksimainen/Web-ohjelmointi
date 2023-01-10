import React, { useEffect, useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import yhteystiedotContext from "../context/YhteystiedotContext";

const MuokkaaYhteystieto = () => {
  const [kuva, setKuva] = useState("");
  const [etunimi, setEtunimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [puhelinnumero, setPuhelinnumero] = useState("");
  const [katuosoite, setKatuosoite] = useState("");
  const [postiosoite, setPostiosoite] = useState("");
  const [maa, setMaa] = useState("");
  const [list, setList] = useState([]);

  const YhteystiedotContext = useContext(yhteystiedotContext); //hooks
  const { id } = useParams();

  let history = useNavigate();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const yhteystieto = YhteystiedotContext.getYhteystieto(id).then((res) => {
        setKuva(res.kuva);
        setEtunimi(res.etunimi);
        setSukunimi(res.sukunimi);
        setPuhelinnumero(res.puhelinnumero);
        setKatuosoite(res.katuosoite);
        setPostiosoite(res.postiosoite);
        setMaa(res.maa);
      });
    } else mounted = false;
  }, []);

  const handleSubmit = async (e) => {
    const paivitettyYhteystieto = {
      kuva: kuva,
      etunimi: etunimi,
      sukunimi: sukunimi,
      puhelinnumero: puhelinnumero,
      katuosoite: katuosoite,
      postiosoite: postiosoite,
      maa: maa,
    };

    YhteystiedotContext.setYhteystieto(id, paivitettyYhteystieto);
    history("/");
  };
  const onChangeKuva = (e) => {
    setKuva(e.target.value);
  };

  const onChangeEtunimi = (e) => {
    setEtunimi(e.target.value);
  };
  const onChangeSukunimi = (e) => {
    setSukunimi(e.target.value);
  };

  const onChangePuhelinnumero = (e) => {
    setPuhelinnumero(e.target.value);
  };
  const onChangeKatuosoite = (e) => {
    setKatuosoite(e.target.value);
  };
  const onChangePostiosoite = (e) => {
    setPostiosoite(e.target.value);
  };
  const onChangeMaa = (e) => {
    setMaa(e.target.value);
  };

  return (
    <div className="card mb-3">
      <h1 className="display-4 mb-2">
        <span className="text-primary">Muokkaa yhteystieto</span>
      </h1>

      <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="kuva">Kuva</label>
            <input
              type="text"
              name="kuva"
              className="form-control form-control-lg"
              placeholder="Syötä kuvan osoite..."
              value={kuva}
              onChange={onChangeKuva}
            />
          </div>
          <br></br>

          <div className="form-group">
            <label htmlFor="etunimi">Etunimi</label>
            <input
              type="text"
              name="etunimi"
              className="form-control form-control-lg"
              placeholder="Syötä etunimi..."
              value={etunimi}
              onChange={onChangeEtunimi}
            />
          </div>
          <br></br>

          <div className="form-group">
            <label htmlFor="sukunimi">Sukunimi</label>
            <input
              type="text"
              name="sukunimi"
              className="form-control form-control-lg"
              placeholder="Syötä sukunimi..."
              value={sukunimi}
              onChange={onChangeSukunimi}
            />
          </div>
          <br></br>

          <div className="form-group">
            <label htmlFor="puhelinnumero">Puhelin</label>
            <input
              type="text"
              name="puhelin"
              className="form-control form-control-lg"
              placeholder="Syötä puhelinnumero..."
              value={puhelinnumero}
              onChange={onChangePuhelinnumero}
            />
          </div>
          <br></br>

          <div className="form-group">
            <label htmlFor="katuosoite">Katuosoite</label>
            <input
              type="text"
              name="katuosoite"
              className="form-control form-control-lg"
              placeholder="Syötä katuosoite..."
              value={katuosoite}
              onChange={onChangeKatuosoite}
            />
          </div>
          <br></br>

          <div className="form-group">
            <label htmlFor="postiosoite">Postiosoite</label>
            <input
              type="text"
              name="postiosoite"
              className="form-control form-control-lg"
              placeholder="Syötä postiosoite..."
              value={postiosoite}
              onChange={onChangePostiosoite}
            />
          </div>
          <br></br>

          <div className="form-group">
            <label htmlFor="maa">Maa</label>
            <input
              type="text"
              name="maa"
              className="form-control form-control-lg"
              placeholder="Syötä maa..."
              value={maa}
              onChange={onChangeMaa}
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
};
export default MuokkaaYhteystieto;
