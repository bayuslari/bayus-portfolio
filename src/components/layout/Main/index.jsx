import React from "react";
import './style.scss'; 
import Hero from "./Hero";

const Main = () => (
    <div className="main">
        <section id="section-1" className="section hero">
            <Hero/>
        </section>
        <section id="section-2" className="section">section 2</section>

    </div>
);

export default Main;
