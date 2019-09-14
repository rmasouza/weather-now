import WeatherResponse from '../models/WeatherResponse';

/**
 *
 */
export default interface IWeatherService {
    getWeatherData(location: string): Promise<WeatherResponse>;
}
