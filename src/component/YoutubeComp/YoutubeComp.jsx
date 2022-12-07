import React from "react";
import "./YoutubeComp.css";

const YoutubeComp = (props) => {
    return (
        <div className="card-wrapper">
            <p>{props.thumbnail}</p>
            <p>{props.title}</p>
            <p>{props.description}</p>
        </div>
    );
}

YoutubeComp.defaultProps ={
    thumbnail: "default thumbnail",
    title: "default title",
    description: "default description"
}

export default YoutubeComp;