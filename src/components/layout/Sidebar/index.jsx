import React from "react";
import Scrollspy from 'react-scrollspy';

const Sidebar = () => (
  <div className="sidebar">

    <div className="author__profile">
      <img className="author__img show--onscroll" src="https://colorlib.com/preview/theme/jackson/images/about.jpg" alt="author"/>
      <h1 className="author__name">Bayu Riyadi</h1>
      <span className="author__position">
        <b>Front-End Developer </b>
        <span className="show--onscroll">in Yogyakarta</span>
      </span>
    </div>

    <Scrollspy className="nav-primary" items={ ['about', 'services', 'skills', 'experiences', 'works', 'contact'] } currentClassName="active">
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#experiences">Experiences</a></li>
      <li><a href="#works">Works</a></li>
      <li><a href="#contact">Contact</a></li>
    </Scrollspy>

    <div className="copyright">
      © Copyright ©2020 All rights reserved | Made with ❤ by Me
    </div>
  </div>
);

export default Sidebar;
