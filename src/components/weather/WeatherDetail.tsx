import React, {FC, useEffect, useState} from 'react';
import './WeatherDetail.scss';

interface IWeatherDetailProps {
    value: number | string;
    unit: string;
    unitLegend: string;
}
const WeatherDetail: FC<IWeatherDetailProps> = (props) => {
    const {unit, value, unitLegend} = props;



    return (
        <section className='weather-detail'>
            <span className={'unit-legend'}>{unitLegend}</span>
            <span className={'value'}>{value}<sub className={'unit'}>{unit}</sub></span>
        </section>
    );
};

export default WeatherDetail;
