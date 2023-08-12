import React from "react";
import Cardİnfo from "../cardinfo/Cardİnfo";
import CardImage from "../cardİmage/Cardİmage";
import CardTitle from "../cardTitle/CardTitle";
import "./card.css";
function Card() {
  return (
    <div className="card">
      <div className="card-body">
        <CardTitle />
        <CardImage />
        <Cardİnfo />
      </div>
    </div>
  );
}

export default Card;
