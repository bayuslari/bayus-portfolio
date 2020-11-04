import React from "react";
import Title from "./../Title";
const About = () => (
    <>
      <Title super="Hi, I'm Bayu"></Title>
      <div className="row">
          <div className="col-md-6">
            <p>I am Yogyakarta-based front end developer. I was born and raised in the small
                city of Western Borneo that makes me eager to learn new things. Currently, I
                live in Yogyakarta and work for
                <a href="https://www.softwareseni.com/" rel="noopener" target="_blank"> Softwareseni</a>,
                the biggest websites and applications production company (on the planet!!). In
                the future, who knows? I’ll sure be doing web stuff. Maybe for you.</p>
          </div>
          <div className="col-md-6">
            <img className="w-100" src="https://colorlib.com/preview/theme/jackson/images/about.jpg" alt="author"/>
          </div>
      </div>
    </>
);

export default About;