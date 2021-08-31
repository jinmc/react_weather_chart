import axios from 'axios';

const API_KEY = '8bbca77db946c20b6eb3f38ea3de2f5c';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&mode=xml`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    // console.log("fetchweather call")
    const url = `${ROOT_URL}&q=${city},us`;
    const response = axios.get(url);
    console.log('response: ', response);
    // console.log(response);
    return {
        type: FETCH_WEATHER,
        payload: response
    }
}