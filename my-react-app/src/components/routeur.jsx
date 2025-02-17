import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import Erreur from "../pages/Erreur";
import About from "../pages/About";

export default function Routeur() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Erreur />} />
            </Routes>
        </BrowserRouter>
    );
}
