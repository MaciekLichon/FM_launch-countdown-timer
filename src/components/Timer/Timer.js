import './Timer.scss';

import Container from '../Container/Container';
import Counter from './Counter';

import {useState, useEffect} from 'react';
const Timer = () => {

    const [time, setTime] = useState(777341);

    useEffect(() => {
        const timer = setInterval(() => {
            if (time > 0) {
                setTime(prevValue => prevValue - 1);
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [time])


    return (
        <Container>
            <div className="timer">
                <Counter unit="days" value={Math.floor(time / 86400)} />
                <Counter unit="hours" value={Math.floor(time / 3600 ) % 24} />
                <Counter unit="minutes" value={Math.floor(time / 60) % 60} />
                <Counter unit="seconds" value={time % 60} />
            </div>
        </Container>
    );
};

export default Timer;
