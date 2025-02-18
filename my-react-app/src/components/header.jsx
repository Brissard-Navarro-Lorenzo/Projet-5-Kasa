import { Link } from "react-router";
import "../style/header/header.scss";
import logo_Kasa from "../images/logo_kasa.svg";

export default function Header() {
    return (
        <header className="header">
            <img src={logo_Kasa} alt="Logo de Kasa" />
            <nav className="navbar">
                <Link to="/" className="navbar__link navbar__link--underline">
                    Accueil
                </Link>
                <Link to="/about" className="navbar__link">
                    A propos
                </Link>
            </nav>
        </header>
    );
}
