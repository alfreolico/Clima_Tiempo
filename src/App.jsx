// import { useEffect } from 'react';
// import './App.scss';
// import axios from 'axios';
// import { useState } from 'react';
// import {
// 	LuWind,
// 	LuCloudy,
// 	LuCloudRainWind,
// 	LuThermometer,
// } from 'react-icons/lu';
// import { WiHumidity } from 'react-icons/wi';
// import { baseUrl, codes, icons } from './helpers/lib';
// import {
// 	bgatmosphere,
// 	bgclear,
// 	bgclouds,
// 	bgdrizzle,
// 	bgsnow,
// 	bgrain,
// 	bgthunderstorm,
// } from './assets/Images';

// const bgImages = [
// 	bgatmosphere,
// 	bgclear,
// 	bgclouds,
// 	bgdrizzle,
// 	bgsnow,
// 	bgrain,
// 	bgthunderstorm,
// ];

// function App() {
// 	const [coords, setCoords] = useState(null);
// 	const [weather, setWeather] = useState(null);
// 	const [isCelsius, setIsCelsius] = useState(true);
// 	const [error, setError] = useState(null);

// 	useEffect(() => {
// 		console.log(navigator.geolocation);
// 		try {
// 			navigator.geolocation.getCurrentPosition(
// 				(res) => {
// 					setCoords({
// 						lat: res.coords.latitude,
// 						lon: res.coords.longitude,
// 					});
// 				},
// 				(err) => {
// 					setError(err.message);
// 				},
// 			);
// 		} catch (error) {
// 			console.log('[GEO API]', error);
// 		}
// 	}, []);

// 	useEffect(() => {
// 		if (coords) getWeatherData(coords);
// 	}, [coords]);

// 	const getWeatherData = async ({ lat, lon }) => {
// 		try {
// 			const result = await axios.get(
// 				baseUrl +
// 					`lat=${lat}&lon=${lon}&appid=b60a59f6536ab7f654c37b1a6f3a745a`,
// 			);
// 			console.log(result.data);
// 			const codeId = result.data.weather[0].id;
// 			const codeKeys = Object.keys(codes);
// 			const codeBgImages = codeKeys;

// 			setWeather({
// 				city: result.data.name,
// 				country: result.data.sys.country,
// 				temperature: Math.floor(result.data.main.temp - 273.15),
// 				main: result.data.weather[0].main,
// 				description: result.data.weather[0].description,
// 				clouds: result.data.clouds.all,
// 				wind: result.data.wind.speed,
// 				humidity: result.data.main.humidity,
// 				// pop: result.data.list[0].pop * 100,
// 				pressure: result.data.main.pressure,
// 				icons: icons[codeKeys.find((k) => codes[k].includes(codeId))],
// 			});
// 		} catch (error) {
// 			console.log('[WEATHER API]', error);
// 		}
// 	};

// 	if (error)
// 		return (
// 			<div className="error">
// 				<h1>Please enable your location to get the weather data</h1>
// 				<h1>
// 					Por favor, active su ubicación para obtener los datos meteorológicos
// 				</h1>
// 			</div>
// 		);
// 	if (!weather)
// 		return <img alt="termometro" src="src\assets\Images\termometro.gif"></img>;

// 	const temp = isCelsius
// 		? weather.temperature + ' °C'
// 		: (weather.temperature * 9) / 5 + 32 + ' °F';

// 	return (
// 		<div className="weather" style={{ background: codeBgImages }}>
// 			<h1 className="weather__title">Weather App</h1>
// 			<p className="weather__city">
// 				{weather.city}, {weather.country}
// 			</p>

// 			<div className="weather__content">
// 				<span
// 					className="weather__icon"
// 					role="img"
// 					aria-label={weather.description}
// 					aria-hidden
// 				>
// 					{weather.icons}
// 				</span>
// 				<div className="weather__info">
// 					<h2 className="weather__info-item--temp">{temp}</h2>
// 					<h3 className="weather__info-item--main">{weather.main}</h3>
// 					<p className="weather__info-item">"{weather.description}"</p>
// 				</div>
// 			</div>

// 			<div className="weather__details">
// 				<p className="weather__details-item">
// 					<LuWind /> {weather.wind} m/s
// 				</p>
// 				<p className="weather__details-item">
// 					<LuCloudy /> {weather.clouds} %
// 				</p>
// 				<p className="weather__details-item">
// 					<WiHumidity /> {weather.humidity} %
// 				</p>
// 				{/* <p className="weather__details-item">
// 					<LuCloudRainWind /> {weather.pop} %
// 				</p> */}
// 				<p className="weather__details-item">
// 					<LuThermometer /> {weather.pressure} hPa
// 				</p>
// 			</div>

// 			<button
// 				type="button"
// 				className="btn"
// 				onClick={() => setIsCelsius(!isCelsius)}
// 			>
// 				Change to {isCelsius ? 'Fahrenhet' : 'Celsius'}
// 			</button>
// 		</div>
// 	);
// }

// export default App;

import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import {
	LuWind,
	LuCloudy,
	LuCloudRainWind,
	LuThermometer,
} from 'react-icons/lu';
import { WiHumidity } from 'react-icons/wi';
import { baseUrl, codes, icons } from './helpers/lib';
import {
	bgatmosphere,
	bgclear,
	bgclouds,
	bgdrizzle,
	bgsnow,
	bgrain,
	bgthunderstorm,
} from './assets/Images';

const bgImages = [
	bgatmosphere,
	bgclear,
	bgclouds,
	bgdrizzle,
	bgsnow,
	bgrain,
	bgthunderstorm,
];

function App() {
	const [coords, setCoords] = useState(null);
	const [weather, setWeather] = useState(null);
	const [isCelsius, setIsCelsius] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		try {
			navigator.geolocation.getCurrentPosition(
				(res) => {
					setCoords({
						lat: res.coords.latitude,
						lon: res.coords.longitude,
					});
				},
				(err) => {
					setError(err.message);
				},
			);
		} catch (error) {
			console.log('[GEO API]', error);
		}
	}, []);

	useEffect(() => {
		if (coords) getWeatherData(coords);
	}, [coords]);

	const getWeatherData = async ({ lat, lon }) => {
		try {
			const result = await axios.get(
				`${baseUrl}lat=${lat}&lon=${lon}&appid=b60a59f6536ab7f654c37b1a6f3a745a`,
			);
			const codeId = result.data.weather[0].id;
			const codeKeys = Object.keys(codes);
			const codeBgImageIndex = codeKeys.findIndex((k) =>
				codes[k].includes(codeId),
			);

			const bgImage = bgImages[codeBgImageIndex];
			document.body.style.backgroundImage = `url(${bgImage})`;

			setWeather({
				city: result.data.name,
				country: result.data.sys.country,
				temperature: Math.floor(result.data.main.temp - 273.15),
				main: result.data.weather[0].main,
				description: result.data.weather[0].description,
				clouds: result.data.clouds.all,
				wind: result.data.wind.speed,
				humidity: result.data.main.humidity,
				pressure: result.data.main.pressure,
				icons: icons[codeKeys.find((k) => codes[k].includes(codeId))],
			});
		} catch (error) {
			console.log('[WEATHER API]', error);
		}
	};

	if (error)
		return (
			<div className="error">
				<h1>Please enable your location to get the weather data</h1>
				<h1>
					Por favor, active su ubicación para obtener los datos meteorológicos
				</h1>
			</div>
		);
	if (!weather)
		return <img alt="termometro" src="src\assets\Images\termometro.gif"></img>;

	const temp = isCelsius
		? `${weather.temperature} °C`
		: `${(weather.temperature * 9) / 5 + 32} °F`;

	return (
		<div className="weather">
			<h1 className="weather__title">Weather App</h1>
			<p className="weather__city">
				{weather.city}, {weather.country}
			</p>

			<div className="weather__content">
				<span
					className="weather__icon"
					role="img"
					aria-label={weather.description}
					aria-hidden
				>
					{weather.icons}
				</span>
				<div className="weather__info">
					<h2 className="weather__info-item--temp">{temp}</h2>
					<h3 className="weather__info-item--main">{weather.main}</h3>
					<p className="weather__info-item">"{weather.description}"</p>
				</div>
			</div>

			<div className="weather__details">
				<p className="weather__details-item">
					<LuWind /> {weather.wind} m/s
				</p>
				<p className="weather__details-item">
					<LuCloudy /> {weather.clouds} %
				</p>
				<p className="weather__details-item">
					<WiHumidity /> {weather.humidity} %
				</p>
				<p className="weather__details-item">
					<LuThermometer /> {weather.pressure} hPa
				</p>
			</div>

			<button
				type="button"
				className="btn"
				onClick={() => setIsCelsius(!isCelsius)}
			>
				Change to {isCelsius ? 'Fahrenheit' : 'Celsius'}
			</button>
		</div>
	);
}

export default App;
