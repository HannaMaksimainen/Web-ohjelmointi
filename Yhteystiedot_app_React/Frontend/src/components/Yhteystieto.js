import React from "react";

import { Link } from "react-router-dom";

import { useState, useContext } from "react";
import yhteystiedotContext from "../context/YhteystiedotContext";
import { useNavigate } from "react-router-dom";

const Yhteystieto = (props) => {
  const YhteystiedotContext = useContext(yhteystiedotContext); //hooks
  let history = useNavigate();
  const [naytaYhteystieto, setnaytaYhteystieto] = useState(false);
  const onDeleteClick = (id) => {
    YhteystiedotContext.poistaYhteystieto(id);
    window.location.reload();
    history("/");
  };
  const onShowClick = (e) => {
    let lippu = !naytaYhteystieto;
    setnaytaYhteystieto(lippu);
  };
  const {
    id,
    kuva,
    etunimi,
    sukunimi,
    puhelinnumero,
    katuosoite,
    postiosoite,
    maa,
  } = props.yhteystieto;
  return (
    <div className="card card-body mb-3 display:flex, justifyContent: flex-end">
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <h4>
          {etunimi} {sukunimi}
        </h4>

        <div>
          <button className="btn btn-dark" onClick={onShowClick.bind(this)}>
            Tiedot
          </button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div>
          <Link to={`yhteystieto/muokkaa/${id}`}>
            <button className="btn btn-dark">Muokkaa</button>
          </Link>
          <br></br>
          <br></br>
          <button
            className="btn btn-dark"
            onClick={onDeleteClick.bind(this, { id })}
          >
            Poista
          </button>
        </div>
      </div>
      <br></br>
      {naytaYhteystieto ? (
        <ul className="list-group">
          <img src={kuva} style={{ alignSelf: "center" }} alt="Kuva:" />
          <li className="list-group-item">Etunimi: {etunimi}</li>
          <li className="list-group-item">Sukunimi: {sukunimi}</li>
          <li className="list-group-item">Puhelinnumero: {puhelinnumero}</li>
          <li className="list-group-item">Katuosoite: {katuosoite}</li>
          <li className="list-group-item">Postiosoite: {postiosoite}</li>
          <li className="list-group-item">Maa: {maa}</li>
        </ul>
      ) : null}
    </div>
  );
};
/*Puhelintieto.propTypes = {
yhteystieto: PropTypes.object.isRequired,
//deleteClickHandler: PropTypes.func.isRequired,//ei tarvita enää
};*/
export default Yhteystieto;
