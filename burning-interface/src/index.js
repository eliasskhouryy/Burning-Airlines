import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
//React Router
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//Put all the routes to pages here: 
import Airplanes from "./components/Airplanes"
import Flights from './components/Flights';
import Search from './components/Search';
import Reservations from './components/Reservations';
import Homepage from './components/Homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
        <Route path="/" element={<Homepage/>} />
        <Route path="Airplanes" element={<Airplanes />} />
        <Route path="Flights" element={<Flights />} />
        <Route path="Search" element={<Search />} />
        <Route path="Reservations" element={<Reservations />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
