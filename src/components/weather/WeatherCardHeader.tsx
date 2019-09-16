import React, {FC} from "react";
import './WeatherCardHeader.scss';

interface IWeatherCardHeaderProps {
    location: string;
}

const WeatherCardHeader: FC<IWeatherCardHeaderProps> = (props) => {
    const {location} = props;
    return (
        <header className={'weather-card-header'}>
            {location}
        </header>
    )
};

export default WeatherCardHeader;
