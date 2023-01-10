import React from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Ylatunniste = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
      <div className="container">
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Alkuun
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/yhteystieto/lisaa" className="nav-link">
                Lisää yhteystieto
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tietoa" className="nav-link">
                Ylläpitäjän tiedot
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Ylatunniste.propTypes = {
  turvataso: PropTypes.string.isRequired,
};
export default Ylatunniste;
