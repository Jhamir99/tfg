import { useTranslation } from "react-i18next";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About";
import NavBar from "./components/NavBar";

import "./styles/App.css";

function App() {
  const { t } = useTranslation();

  return (
    <HashRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" exact element={<About />}></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
