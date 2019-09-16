import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import {register} from './ServiceWorker';
import './styles/global.scss';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

register();


