import React, {FC, useEffect} from 'react';
import './WeatherCardFooter.scss';

interface IWeatherCardFooterProps {
    lastUpdated: Date;
}

const WeatherCardFooter: FC<IWeatherCardFooterProps> = (props) => {
    const {lastUpdated, children} = props;
    const formatter = new Intl.DateTimeFormat('pt-br', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
    const [formattedDate, setFormattedDate] = React.useState(formatter.format(lastUpdated));

    useEffect(() => {
        setFormattedDate(formatter.format(lastUpdated));
    }, [lastUpdated]);

    return (
        <footer className={'weather-card-footer'}>
            <section className={'details'}>
                {children}
            </section>
            <section className={'last-updated'}>
               Updated at {formattedDate}
            </section>
        </footer>
    );
};

export default WeatherCardFooter;
