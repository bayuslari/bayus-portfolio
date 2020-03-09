import React from "react";
import './style.scss'; 
import Scrollspy from 'react-scrollspy';

const Sidebar = () => (
  <div className="sidebar">
    <div className="text-center">
      <img className="author-img" src="https://colorlib.com/preview/theme/jackson/images/about.jpg" alt="author"/>
      <h1 className="author-name">Bayu Riyadi</h1>
      <span className="author-position">
        <b>Front-End Developer </b>
        in Yogyakarta
      </span>
    </div>
    <Scrollspy className="nav-primary" items={ ['section-1', 'section-2'] } currentClassName="is-current">
      <li><a href="#section-1">section 1</a></li>
      <li><a href="#section-2">section 2</a></li>
    </Scrollspy>
  </div>
);

export default Sidebar;
