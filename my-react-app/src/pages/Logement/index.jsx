import { useParams } from "react-router";

export default function Logement() {
    const { id } = useParams();
    return <h1>Ceci est le logement {id}</h1>;
}
