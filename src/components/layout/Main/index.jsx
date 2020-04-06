import React from "react";

import About from "./About";

const Main = () => (
    <div className="main">
        <section id="about" className="section">
            <About/>
        </section>
        <section id="services" className="section">services</section>
        <section id="skills" className="section">skills</section>
        <section id="experiences" className="section">experiences</section>
        <section id="works" className="section">works</section>
        <section id="contact" className="section">contact</section>

    </div>
);

export default Main;
