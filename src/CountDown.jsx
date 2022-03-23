import React from 'react';
import Wish from "./Wish";

const CountDown = ({countDate, name}) => {
    if(!countDate.isItBirthday) {
        return (
            <div className="countdown-wrapper">
                <h1 className="countdown-header">
                    Count-Down to <span>{name}'s</span> Birthday
                </h1>
                <div className="countdown">
                    <div className="countdown-box">
                        {countDate.days}
                        <span className="countdown-box-title">Days</span>
                    </div>
                    <div className="countdown-box">
                        {countDate.hours > 9 ? countDate.hours : '0'+countDate.hours}
                        <span className="countdown-box-title">Hours</span>
                    </div>
                    <div className="countdown-box">
                        {countDate.minutes > 9 ? countDate.minutes : '0'+countDate.minutes}
                        <span className="countdown-box-title">Minutes</span>
                    </div>
                    <div className="countdown-box">
                        {countDate.second > 9 ? countDate.second : '0'+countDate.second}
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