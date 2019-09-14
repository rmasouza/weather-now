import WeatherModel from './WeatherModel';

export default interface WeatherResponse {
    status: number;
    message: string;
    data: WeatherModel;
}

