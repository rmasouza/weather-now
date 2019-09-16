import React from 'react';
import {mount} from 'enzyme';
import WeatherCard from './WeatherCard';
import IWeatherService from '../../services/IWeatherService';
import WeatherResponse from '../../models/WeatherResponse';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';
import App from '../../pages/App';

const mockWeatherService: IWeatherService = {
    getWeatherData(location: string): Promise<WeatherResponse> {
        const weatherResponse: WeatherResponse = {
            status: 200,
            message: 'OK',
            data: {
                location: `Limeira, BR`,
                humidity: 200,
                pressure: 200,
                temp: 200,
                tempMax: 200,
                tempMin: 200,
            },
        };

        const promisse = new Promise<WeatherResponse>((resolve) => weatherResponse);
        return promisse;
    },
};

let container: any = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('<WeatherCard />', () => {
    it('should render correctly without crash', async () => {
        act(() => {
            render(<App/>, container);
        });
    });

    it('should render correctly with "Limeira, BR" location prop', () => {
        const wrapper = mount(<WeatherCard location={'Limeira, BR'} weatherService={mockWeatherService}/>);
        expect(wrapper.find(WeatherCard).first().props().location).toBe('Limeira, BR');
    });
});
