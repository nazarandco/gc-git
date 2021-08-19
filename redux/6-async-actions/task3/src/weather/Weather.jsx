import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { citiesWeatherSelector } from './weather.selectors';
import * as weatherData from './weather.actions';

const Weather = ({ citiesWeather, getWeatherData }) => {
  useEffect(() => getWeatherData(), []);
  return (
    <main className='weather'>
      <h1 className='weather__title'>Weather data</h1>
      <ul className='cities-list'>
        {citiesWeather
          ? citiesWeather.map((city) => (
              <li className='city'>
                <span className='city__name'>{city.name}</span>
                <span className='city__temperature'>{`${city.temperature} F`}</span>
              </li>
            ))
          : ''}
      </ul>
    </main>
  );
};

Weather.propTypes = {
  citiesWeather: PropTypes.array.isRequired,
};

const mapState = (state) => {
  return {
    citiesWeather: citiesWeatherSelector(state),
  };
};

const mapDispatch = {
  getWeatherData: weatherData.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
