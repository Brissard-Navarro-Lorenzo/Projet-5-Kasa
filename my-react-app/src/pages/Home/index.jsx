import Banner from "../../components/banner";
import Card from "../../components/card";
import logements from "../../logements.json";
import "../../style/Home/Home.scss";
import falaises_banner from "../../images/falaises_banner.png";
import { Link } from "react-router";

export default function Home() {
    const alt = "Falaises en bord de mer";
    const titre = "Chez vous, partout et ailleurs";
    return (
        <main className="main">
            <Banner img={falaises_banner} alt={alt} titre={titre} />
            <section className="grille">
                {logements.map((logement) => (
                    <Link to={`/logement/${logement.id}`} key={logement.id}>
                        <Card image={logement.cover} titre={logement.title} />
                    </Link>
                ))}
            </section>
        </main>
    );
}
