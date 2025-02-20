import { useParams } from "react-router";
import logements from "../../logements.json";
import Collapse from "../../components/collapse";
import "../../style/logement/logement.scss";
import Tag from "../../components/tag";
import Rating from "../../components/rating";

export default function Logement() {
    const { id } = useParams();
    const logementEnCours = logements.find((logement) => logement.id === id);
    const note = parseInt(logementEnCours.rating);
    return (
        <main className="main">
            <section className="logement">
                <div className="logement__contenu">
                    <div className="infos">
                        <div className="infos__titre">
                            <h1 className="infos__titre__h1">{logementEnCours.title}</h1>
                            <h2 className="infos__titre__h2">{logementEnCours.location}</h2>
                        </div>
                        <div className="infos__tags">
                            {logementEnCours.tags.map((tag, index) => (
                                <Tag key={`${tag}-${index}`} texte={tag} />
                            ))}
                        </div>
                    </div>
                    <div className="references">
                        <div className="references__host">
                            <h3 className="references__host__h3">{logementEnCours.host.name}</h3>
                            <img
                                className="references__host__img"
                                src={logementEnCours.host.picture}
                                alt={`Photo de profil de ${logementEnCours.host.name}`}
                            />
                        </div>
                        <div className="references__ratings">
                            <Rating note={note} />
                        </div>
                    </div>
                </div>
                <div className="detail">
                    <div className="detail__collapse">
                        <Collapse header={"Description"} content={logementEnCours.description} />
                    </div>
                    <div className="detail__collapse">
                        <Collapse header={"Equipements"} content={logementEnCours.equipments} />
                    </div>
                </div>
            </section>
        </main>
    );
}
