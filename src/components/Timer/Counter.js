import './Counter.scss';

import {useState, useEffect} from 'react';
const Counter = ({ unit, value }) => {

    const [status, setStatus] = useState('');

    const newValue = () => value >= 10 ? `${value}` : `0${value}`;

    const [top, setTop] = useState(newValue);
    const [bottom, setBottom] = useState(newValue);
    const [flipper, setFlipper] = useState(newValue);


    useEffect(() => {
        // first part of the animation - fold top
        setTop(newValue);
        setStatus('top');

        // second part of the animation - show bottom
        setTimeout(() => {
            setFlipper(newValue);
            setStatus('bot');

            // once the animation is fully done
            setTimeout(() => {
                setBottom(newValue);
            }, 500 / 2);
        }, 500 / 2);
    }, [value])

    return (
        <div className="counter">
            <div className="card">
                <div className="topside">{top}</div>
                <div className={`flipper ${status}`}>{flipper}</div>
                <div className="botside">{bottom}</div>
            </div>
            <div className="counter__unit">{unit}</div>
        </div>
    );
};

export default Counter;
