import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { BsGlobe } from "react-icons/bs";
import cookies from "js-cookie";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { COLORS, collpaseSize } from "../utilities/Constants";

import "../styles/NavBar.css";
import logo from "../logo.svg";

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

  return (
    <>
      <div className="dropdown">
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

function NavBar(props) {
  const {t} = useTranslation();
  return (
    <Navbar
      style={{ background: COLORS.secondary }}
      variant="dark"
      sticky="top"
      expand={collpaseSize}
      collapseOnSelect
    >
      <Navbar.Brand className="ms-3">
        <img src={logo} className="App-logo mx-3" alt="logo" height="34px" /> Environmental print calculator
      </Navbar.Brand>

      <Navbar.Toggle className="me-3"/>

      <Navbar.Collapse>
        <Nav className="mx-auto navLinks">
          <Nav.Link className="mx-3" href="/#">{t("home")}</Nav.Link>
          <Nav.Link className="mx-3" href="/#/about">{t("about_us")}</Nav.Link>
        </Nav>
        <LangSelector />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
