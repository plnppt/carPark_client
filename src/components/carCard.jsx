import React from 'react';
import {useNavigate} from "react-router-dom";

const CarCard = (props) => {
    const navigate = useNavigate()
    return (
        <div className="carSelect__card">
            <span className="carName">{props.carName}</span>
            <img className="carSelect__cardImg" src={props.srcImg}/>

                <button onClick={(event) => {
                    navigate(`/learnMore1/${props.objId}`)
                }}
                        className="cardBtn">Подробнее</button>

        </div>
    )
}

export default CarCard;