import React from 'react';
import './BigContainer.css';

const BigContainer = (props) => {
    return (
        <div className="containerB">
            <div className="social">
                <div className="logo">
                    <img src={props.image} alt="" />
                </div>
                <h3 className="user">{props.user}</h3>
            </div>
            <div className="number">
                <h1>{props.number}</h1>
            </div>
            <div className="fall">{props.fallsub}</div>
            <div className="today">
                <img src={props.Up} alt="" />
                <h3>{props.numberToday} Today</h3>
            </div>
        </div>
    )
}


export default BigContainer;