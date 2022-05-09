import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { BsGlobe } from "react-icons/bs";
import cookies from "js-cookie";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import "./App.css";
import logo from "./logo.svg";

const collpaseSize = "sm";

function LangSelector(props) {
  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "es",
      name: "Español",
      country_code: "es",
    },
    {
      code: "ca",
      name: "Català",
      country_code: "es-ct",
    },
  ];

  const currentlanguageCode = cookies.get("i18next") || "en";
  const currentlanguage = languages.find((l) => l.code === currentlanguageCode);

  return (
    <>
      <div className="dropdown dropdown-toggle me-3">
        <button
          className="btn btn-link"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ color: "white" }}
        >
          <BsGlobe />
        </button>
        <ul
          className={`dropdown-menu dropdown-menu-${collpaseSize}-end`}
          aria-labelledby="dropdownMenuButton1"
        >
          {languages.map(({ code, name, country_code }) => (
            <li key={country_code}>
              <button
                className={`dropdown-item ${
                  code === currentlanguageCode ? "active" : ""
                }`}
                onClick={() => i18next.changeLanguage(code)}
                disabled={code === currentlanguage}
              >
                <span
                  className={`flag-icon flag-icon-${country_code} mx-2`}
                ></span>
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="d-flex flex-column align-items-start"></div>
    </>
  );
}

function CustomNavBar(props) {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      sticky="top"
      expand={collpaseSize}
      collapseOnSelect
    >
      <Navbar.Brand className="ms-3">
        <img src={logo} className="App-logo" alt="logo" height="34px" /> Logo
      </Navbar.Brand>

      <Navbar.Toggle className="me-3"/>
      <Navbar.Collapse>
        <Nav className={`mx-3 mx-${collpaseSize}-auto`}>
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#about">About us</Nav.Link>
        </Nav>
        <LangSelector />
      </Navbar.Collapse>
    </Navbar>
  );
}

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <CustomNavBar />

      <div className="container">{t("welcome_to_react")}</div>
    </div>
  );
}

export default App;
