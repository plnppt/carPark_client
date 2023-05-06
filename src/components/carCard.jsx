import React from 'react';

function CarCard(props) {
    return (
        <div className="carSelect__card">
            <span className="carName">{props.carName}</span>
            <img className="carSelect__cardImg" src={props.srcImg}
                 alt="Феррари"/>
            <button className="cardBtn">Подробнее</button>
        </div>
    )
}

export default CarCard;