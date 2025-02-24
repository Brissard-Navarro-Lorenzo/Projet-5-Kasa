import { useState } from "react";
import "../style/collapse/collapse.scss";

export default function Collapse({ header, content }) {
    const [ouvert, setOuvert] = useState(false);

    function ChangementEtatCollapse() {
        setOuvert(!ouvert);
    }
    return (
        <div className="collapse">
            <div className="collapse__header">
                <h2>{header}</h2>
                <i
                    className={`fa-solid fa-chevron-up collapse__icone collapse__icone${ouvert ? "--ouverte" : "--fermee"}`}
                    onClick={ChangementEtatCollapse}></i>
            </div>
            <div className={`collapse__content collapse__content${ouvert ? "--ouvert" : ""}`}>
                <p>{content}</p>
            </div>
        </div>
    );
}
