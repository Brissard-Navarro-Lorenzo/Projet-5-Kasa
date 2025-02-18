import "../style/banner/banner.scss";
import falaises_banner from "../images/falaises_banner.png";

export default function Banner() {
    return (
        <section className="banner">
            <img src={falaises_banner} alt="Falaises et bord de mer" className="banner__img" />
            <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
        </section>
    );
}
