import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import montagnes_banner from "../../images/montagnes_banner.png";
import "../../style/About/About.scss";

const contenuCollapse = [
    {
        header: "Fiabilité",
        content:
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
        header: "Respect",
        content:
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
        header: "Service",
        content:
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
        header: "Sécurité",
        content:
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
];

export default function About() {
    const alt = "Forêt et montagnes en arrière-plan";
    const titre = "";
    return (
        <main className="main">
            <Banner img={montagnes_banner} alt={alt} titre={titre} />
            <section className="collapse__container">
                {contenuCollapse.map((texte, index) => (
                    <Collapse key={`${texte.header}-${index}`} header={texte.header} content={texte.content} />
                ))}
            </section>
        </main>
    );
}
