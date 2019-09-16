import React, {FC, useEffect, useState} from 'react';
import './WeatherCardContent.scss';


const WeatherCardContent: FC = (props) => {
    const { children } = props;
    return (
        <section className='weather-card-content'>
            {children}
        </section>
    );
};

export default WeatherCardContent;
