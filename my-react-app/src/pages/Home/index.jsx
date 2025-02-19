import Banner from "../../components/banner";
import Card from "../../components/card";
import logements from "../../logements.json";
import "../../style/home/home.scss";
import falaises_banner from "../../images/falaises_banner.png";

export default function Home() {
    const alt = "Falaises en bord de mer";
    const titre = "Chez vous, partout et ailleurs";
    return (
        <main className="main">
            <Banner img={falaises_banner} alt={alt} titre={titre} />
            <section className="grille">
                {logements.map((logement) => (
                    <Card key={logement.id} image={logement.cover} titre={logement.title} />
                ))}
            </section>
        </main>
    );
}
