import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import CountDown from "./CountDown";

const Birthday = () => {
    const {name, day, month} = useParams();
    const [time, setTime] = useState({
        second: 0,
        minutes: 0,
        hours: 0,
        days: 0,
        isItBirthday: false,
    });


    const currentTime = new Date();
    const currentYear = new Date().getFullYear();

    const isItBirthday = currentTime.getDate() === day && currentTime.getMonth() === month - 1;

    useEffect(() => {
        setInterval(() => {
            const countDown = () => {
                const dateAtm = new Date();

                let birthdayDay = new Date(currentYear, month - 1, day);
                if (dateAtm > birthdayDay) {
                    birthdayDay = new Date(currentYear + 1, month - 1, day)
                } else if (dateAtm.getFullYear() === birthdayDay.getFullYear() + 1) {
                    birthdayDay = new Date(currentYear, month - 1, day)
                }

                const currentTime = dateAtm.getTime();
                const birthdayTime = birthdayDay.getTime();
                const timeRemaining = birthdayTime - currentTime;

                let second = Math.floor(timeRemaining / 1000);
                let minutes = Math.floor(second / 60);
                let hours = Math.floor(minutes / 60);
                let days = Math.floor(hours / 24)

                second %= 60;
                minutes %= 60;
                hours %= 24;

                setTime({
                    ...time,
                    second,
                    minutes,
                    hours,
                    days,
                    isItBirthday,
                })
            };

            if (!isItBirthday) {
                countDown()
            } else {
                setTime({
                    ...time,
                    isItBirthday: true,
                })
            }

        }, 1000)
    }, [currentYear, day, isItBirthday, month, time])


    let birth = new Date(currentYear, month - 1, day);
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    let monthBday = monthNames[birth.getMonth()];

    return (
        <div className='page'>
            <CountDown countDate={time} name={name}/>
            <div className="birthday_date">
                Birth-Day: {day} {monthBday} {}
            </div>
        </div>
    );
};

export default Birthday;
