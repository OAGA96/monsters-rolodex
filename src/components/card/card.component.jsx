import React from "react";
import "./card.styles.css";

export const Card = props => (
  <div className="card-container">
    <img alt='Gibson' src={`https://robohash.org/${props.monster.id}?set=set5`} />
    <h2> {props.monster.name} </h2>
    <p> {props.monster.email} </p>
  </div>
);              