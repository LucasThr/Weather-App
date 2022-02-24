import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {render} from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {createOvermind} from 'overmind';
import {config} from './overmind';
import {Provider} from 'overmind-react';
import HomeView from './views/HomeView';
import CityView from './views/CityView';
import moment from 'moment';

const overmind = createOvermind(config);

const rootElement = document.getElementById('root');
render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider value={overmind}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="meteo/:city" element={<CityView />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
