import Banner from "../../components/banner";
import Card from "../../components/card";
import logements from "../../logements.json";
import "../../style/home/home.scss";

export default function Home() {
    return (
        <main className="main">
            <Banner />
            <section className="grille">
                {logements.map((logement) => (
                    <Card key={logement.id} image={logement.cover} titre={logement.title} />
                ))}
            </section>
        </main>
    );
}
