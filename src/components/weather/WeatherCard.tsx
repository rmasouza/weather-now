import React, {CSSProperties, FC, useEffect, useState} from 'react';
import './WeatherCard.scss';
import IWeatherService from '../../services/IWeatherService';
import WeatherModel from '../../models/WeatherModel';
import Loading from '../icons/Loading';
import Error from '../common/Error';
import WeatherCardHeader from './WeatherCardHeader';
import WeatherCardFooter from './WeatherCardFooter';
import WeatherDetail from './WeatherDetail';
import WeatherCardContent from './WeatherCardContent';
import {Machine, assign} from 'xstate';
import {useMachine} from '@xstate/react/lib';
import WeatherTemperature from './WeatherTemperature';

interface IWeatherCardProps {
    location: string;
    weatherService: IWeatherService,
    hideFooterDetails?: boolean;
    style?: CSSProperties
}

interface WeatherCarContext {
    data: WeatherModel | null,
}

const weatherCardMachine = Machine<WeatherCarContext, any, any>({
    key: 'WeatherCard',
    initial: 'updating',
    context: {
        data: null,
    },
    states: {
        updating: {
            invoke: {
                src: 'getWeatherData',
                onDone: {
                    target: 'showWheather',
                    actions: assign({
                        data: (c: any, event: any) => event.data,
                    }),
                },
                onError: {
                    target: 'showError',
                },
            },
        },
        showWheather: {
            on: {
                UPDATE_SILENTILY: 'updatingSilentily',
            },
            activities: ['setTumeout'],
        },
        showError: {
            on: {
                TRY_AGAIN: 'updating',
            },
        },
        updatingSilentily: {
            invoke: {
                src: 'getWeatherData',
                onDone: {
                    target: 'showWheather',
                    actions: assign({
                        data: (c: any, event: any) => event!.data,
                    }),
                },
                onError: {
                    target: 'showError',
                },
            },
        },
    },
});

const WeatherCard: FC<IWeatherCardProps> = (props) => {
    const {location, weatherService, hideFooterDetails, style} = props;

    const getWeatherData = async () => {
        const res = await weatherService.getWeatherData(location);
        setLastUpdate(new Date());
        // setWeather(res.data);
        console.log('hello', res);
        return res.data;
    };

    const setTumeout = () : any => {

        const timeout = setTimeout(() => {
            send('UPDATE_SILENTILY');
        }, 600000);
        return () => clearTimeout(timeout);
    };

    const tryUodaintgWheatherAgain = () => {
        send('TRY_AGAIN');
    };

    const [current, send] = useMachine(weatherCardMachine, {
        services: {
            getWeatherData,
        },
        activities: {
            setTumeout,
        },
    });
    const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
    const {data} = current.context;

    return (
        <section className='weather-card' style={{...style}}>
            <WeatherCardHeader location={location} />
            <WeatherCardContent>
                {
                    current.matches('updating') &&
                    <Loading/>
                }
                {
                    current.matches('showError') &&
                    <Error message={'Something went wrong!'} action={tryUodaintgWheatherAgain}/>
                }
                {
                    (
                        current.matches('showWheather') ||
                        current.matches('updatingSilentily')
                    ) &&
                    <WeatherTemperature value={data!.temp}/>
                }
            </WeatherCardContent>

            {
                (
                    current.matches('showWheather') ||
                    current.matches('updatingSilentily')
                ) &&
                <WeatherCardFooter lastUpdated={lastUpdate}>
                    {
                        !hideFooterDetails &&
                        <>
                            <WeatherDetail value={data!.humidity} unit={'%'} unitLegend={'humidity'}/>
                            <WeatherDetail value={data!.pressure} unit={'hPa'} unitLegend={'pressure'}/>
                        </>
                    }
                </WeatherCardFooter>

            }
        </section>
    );
};

WeatherCard.defaultProps = {
    hideFooterDetails: false,
};

export default WeatherCard;
