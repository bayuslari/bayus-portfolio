import React from "react";

const Title = (props) => (
    <>
        <h2 className="super__title">
            {props.super}
        </h2>
        <h4>
            {props.sub}
        </h4>
        <h2>
            {props.title}
        </h2>

    </>
    
);

export default Title;