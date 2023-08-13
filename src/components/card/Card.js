import React from "react";
import Cardİnfo from "../cardinfo/Cardİnfo";
import CardImage from "../cardİmage/Cardİmage";
import CardTitle from "../cardTitle/CardTitle";
import "./card.css";
function Card({ title, image, info }) {
  return (
    <div className="card">
      <div className="card-body">
        <CardTitle title={title} />
        <CardImage image={image} />
        <Cardİnfo info={info} />
      </div>
    </div>
  );
}

export default Card;
