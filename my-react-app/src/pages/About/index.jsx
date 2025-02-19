import Banner from "../../components/banner";
import montagnes_banner from "../../images/montagnes_banner.png";

export default function About() {
    const alt = "Forêt et montagnes en arrière-plan";
    const titre = "";
    return (
        <main className="main">
            <Banner img={montagnes_banner} alt={alt} titre={titre} />
        </main>
    );
}
