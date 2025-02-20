import { useState } from "react";
import "../style/slideshow/slideshow.scss";
export default function Slideshow({ tableau_images, alt }) {
    const [index, setIndex] = useState(0);
    const tailleTableau = tableau_images.length;

    function diminuerIndex() {
        index <= 0 ? setIndex(tailleTableau - 1) : setIndex(index - 1);
    }
    function augmenterIndex() {
        index >= tailleTableau - 1 ? setIndex(0) : setIndex(index + 1);
    }
    return (
        <section className="slideshow">
            <img src={tableau_images[index]} alt={`${alt} photo ${index + 1}`} className="slideshow__img" />
            <i
                className={`fa-solid fa-chevron-left slideshow__prev ${tailleTableau <= 1 ? "slideshow__none" : null}`}
                onClick={diminuerIndex}></i>
            <i
                className={`fa-solid fa-chevron-right slideshow__next ${tailleTableau <= 1 ? "slideshow__none" : null}`}
                onClick={augmenterIndex}></i>
            <p className={`slideshow__nombre ${tailleTableau <= 1 ? "slideshow__none" : null}`}>{`${index + 1}/${tailleTableau}`}</p>
        </section>
    );
}
