import React, { useContext, useEffect } from "react";

import Puhelintieto from "./Yhteystieto";
import yhteystiedotContext from "../context/YhteystiedotContext";

const Yhteystiedot = () => {
  const YhteystiedotContext = useContext(yhteystiedotContext); //hooks
  console.log(YhteystiedotContext);
  useEffect(() => {
    //kun komponentti ladataan muistiin -> tapaht. useEffect
    YhteystiedotContext.getYhteystiedot(); //haetaan yhteystiedot
    console.log(YhteystiedotContext);
  }, []); //Kun komponentti piirretään, suoritetaan kerran
  return (
    <>
      <h1 className="display-4 mb-2">
        <span className="text-primary">Yhteystiedot</span>
      </h1>
      <React.Fragment>
        {YhteystiedotContext.yhteystiedot.length
          ? YhteystiedotContext.yhteystiedot.map((yhteystieto) => (
              <Puhelintieto key={yhteystieto.id} yhteystieto={yhteystieto} />
            ))
          : null}
      </React.Fragment>
    </>
  );
};
export default Yhteystiedot;
