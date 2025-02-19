import { useParams } from "react-router";
import logements from "../../logements.json";
import Collapse from "../../components/collapse";
import "../../style/logement/logement.scss";

export default function Logement() {
    const { id } = useParams();
    const logementEnCours = logements.find((logement) => logement.id === id);
    return (
        <main className="main">
            <section className="logement">
                <div className="infos">
                    <div className="infos__titre">
                        <h1 className="infos__titre__h1">{logementEnCours.title}</h1>
                        <h2 className="infos__titre__h2">{logementEnCours.location}</h2>
                    </div>
                    <div className="infos__host">
                        <h3 className="infos__host__h3">{logementEnCours.host.name}</h3>
                        <img
                            className="infos__host__img"
                            src={logementEnCours.host.picture}
                            alt={`Photo de profil de ${logementEnCours.host.name}`}
                        />
                    </div>
                </div>
                <div className="references">
                    <div className="references__tags"></div>
                    <div className="references__ratings"></div>
                </div>
                <div className="detail">
                    <Collapse header={"Description"} content={logementEnCours.description} />
                    <Collapse header={"Equipements"} content={logementEnCours.equipments} />
                </div>
            </section>
        </main>
    );
}
