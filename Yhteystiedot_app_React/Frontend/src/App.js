import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ylatunniste from "./components/Ylatunniste";
import Tietoa from "./components/pages/Tietoa";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalState from "./context/GlobalState";
import LisaaYhteystieto from "./components/LisaaYhteystieto";
import MuokkaaYhteystieto from "./components/MuokkaaYhteystieto";
import Yhteystiedot from "./components/Yhteystiedot";

function App() {
  return (
    <GlobalState>
      <Router>
        <div className="App">
          <Ylatunniste turvataso="keskisuuri" />
          <div className="container">
            <Routes>
              <Route path="/" element={<Yhteystiedot />} />
              <Route path="/yhteystieto/lisaa" element={<LisaaYhteystieto />} />
              <Route
                path="/yhteystieto/muokkaa/:id"
                element={<MuokkaaYhteystieto />}
              />
              <Route path="/tietoa" element={<Tietoa />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GlobalState>
  );
}

export default App;
