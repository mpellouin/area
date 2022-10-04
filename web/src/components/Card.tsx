import React from "react";
import '../scss/card.scss';

function Card({ name, description, image} : any) {

    return (
    <div className="card">
        <div className="card-image">
            <img src={image} alt={name} />
        </div>
        <div className="card-content">
            <h2 className="card-title">{name}</h2>
            <p className="card-description">{description}</p>
        </div>
    </div>
  );
}

export default Card;