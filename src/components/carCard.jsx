import React from 'react';

function CarCard(props) {
    return (
        <div className="carSelect__card">
            <span className="carName">{props.carName}</span>
            <img className="carSelect__cardImg" src={props.srcImg}
                 alt="Феррари"/>
            <a href="http://localhost:3000/learnMore1">
                <button className="cardBtn">Подробнее</button>
            </a>
        </div>
    )
}

export default CarCard;