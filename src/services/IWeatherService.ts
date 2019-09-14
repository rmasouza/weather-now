/**
 *
 */
export default interface IWeatherService {
    getWeatherData(location: string): Promise<any>;
}
