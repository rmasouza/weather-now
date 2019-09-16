import React, {FC} from 'react';
import './App.scss';
import PageHeader from '../components/common/PageHeader';
import PageContainer from '../components/common/PageContainer';
import WeatherCard from '../components/weather/WeatherCard';
import IWeatherService from '../services/IWeatherService';
import WeatherService from '../services/WeatherService';

const weatherService: IWeatherService = new WeatherService();

const App: FC = () => {
    return (
        <article className={'app-page'}>
            <PageHeader/>
            <PageContainer>
                <WeatherCard location={'Nuuk, GL'} weatherService={weatherService} hideFooterDetails style={{gridArea: 'Nuuk-GL'}}/>
                <WeatherCard location={'Urubici, BR'} weatherService={weatherService} style={{gridArea: 'Urubici-BR'}}/>
                <WeatherCard location={'Nairobi, KE'} weatherService={weatherService} hideFooterDetails style={{gridArea: 'Nairobi-KE'}}/>
            </PageContainer>
        </article>
    );
};

export default App;
