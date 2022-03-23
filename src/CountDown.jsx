import React from 'react';
import Wish from "./Wish";

const CountDown = ({countDate, name}) => {
    if(!countDate.isItBirthday) {
        return (
            <div className="countdown-wrapper">
                <h1 className="countdown-header">
                    CountDown to <span>{name}'s</span> Birthday
                </h1>
                <div className="countdown">
                    <div className="countdown-box">
                        {countDate.days}
                        <span className="countdown-box-title">Days</span>
                    </div>
                    <div className="countdown-box">
                        {countDate.hours}
                        <span className="countdown-box-title">Hours</span>
                    </div>
                    <div className="countdown-box">
                        {countDate.minutes}
                        <span className="countdown-box-title">Minutes</span>
                    </div>
                    <div className="countdown-box">
                        {countDate.second}
                        <span className="countdown-box-title">Seconds</span>
                    </div>
                </div>
            </div>
        );
    }else{
        return <Wish name={name}/>
    }
};

export default CountDown;