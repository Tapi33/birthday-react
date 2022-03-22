import React from 'react';
import Wish from "./Wish";

const CountDown = ({countDate, name}) => {
    if(!countDate.isItBirthday) {
        return (
            <div>
                <h1 className="head">
                    CountDown to <span>{name}'s</span> Birthday
                </h1>
                <div className="countDown-wrapper">
                    <div className="countDown-box">
                        {countDate.days}
                        <span className="timer">Days</span>
                    </div>
                    <div className="countDown-box">
                        {countDate.hours}
                        <span className="timer">Hours</span>
                    </div>
                    <div className="countDown-box">
                        {countDate.minutes}
                        <span className="timer">Minutes</span>
                    </div>
                    <div className="countDown-box">
                        {countDate.second}
                        <span className="timer">Seconds</span>
                    </div>
                </div>
            </div>
        );
    }else{
        return <Wish name={name}/>
    }
};

export default CountDown;