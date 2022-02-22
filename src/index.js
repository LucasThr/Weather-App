import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {render} from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import {createOvermind} from 'overmind';
import {config} from './overmind';
import CityWeather from './views/CityWeather';

const overmind = createOvermind(config);

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="meteo/:city" element={<CityWeather />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
