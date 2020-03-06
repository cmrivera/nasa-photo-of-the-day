import React from "react";

const NasaCard = props => {
  return (
    <div className="" key={props.url}>
      <p>Date: {props.date}</p>
      <h2>title: {props.title}</h2>
      <div className="">
        <img src={props.img} alt="nasaPicture"></img>
        <p>{props.explanation}</p>
      </div>
    </div>
  );
};

export default NasaCard;
