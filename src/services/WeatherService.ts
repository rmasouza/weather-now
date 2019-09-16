import axios from 'axios';
import IWeatherService from './IWeatherService';
import WeatherResponse from '../models/WeatherResponse';

/**
 * WeatherService
 */
export default class WeatherService implements IWeatherService {
    async getWeatherData(location: string): Promise<WeatherResponse> {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: location,
                appId: process.env.OPEN_WEATHER_KEY,
                units: 'metric',
            },
        });

        if (response.status != 200) {
            throw response;
        }

        const weatherResponse: WeatherResponse = {
            status: response.status,
            message: response.statusText,
            data: {
                location: `${response.data.name}, ${response.data.sys.country}`,
                humidity: response.data.main.humidity,
                pressure: response.data.main.pressure,
                temp: response.data.main.temp,
                tempMax: response.data.main.temp_max,
                tempMin: response.data.main.temp_min,
            }
        };
        return weatherResponse;
    }
}
