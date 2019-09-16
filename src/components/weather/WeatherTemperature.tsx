import React, {FC, useEffect, useState} from 'react';
import './WeatherTemperature.scss';

interface IWeatherTemperatureProps {
    value: number;
}

const WeatherTemperature: FC<IWeatherTemperatureProps> = (props) => {
    const {value} = props;
    const [variant, setVariant] = useState<string>('-normal');

    useEffect(() => {
        if(value > 25) {
            setVariant('-hot');
        } else if (value <= 5) {
            setVariant('-cold');
        } else {
            setVariant('-normal');
        }
    }, [value]);

    return (
        <section className={`weather-temperature ${variant}`}>
            {

                value.toFixed(0)
            }
            <sup>º</sup>
        </section>
    );
};

export default WeatherTemperature;
