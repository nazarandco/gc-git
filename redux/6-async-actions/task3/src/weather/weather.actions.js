const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';
export const GET_DATA = 'WEATHER/GET_DATA';

export const getData = (weatherData) => {
  return {
    type: GET_DATA,
    payload: {
      weatherData,
    },
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    fetch(baseUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('FETCH ERROR');
      })
      .then((weatherData) => {
        dispatch(getData(weatherData));
      });
  };
};
