import React, { useEffect, useState } from 'react'
import style from './styles.module.css'
export function WeatherCard({ tempType, location, apiKey, lang, width }) {
  const [weatherData, setWeatherData] = useState('')
  function convertDate(date, lang, type = 'long') {
    return {
      weakDay: new Intl.DateTimeFormat(lang, {
        weekday: type
      }).format(date * 1000),
      hours: new Intl.DateTimeFormat(lang, {
        hour: '2-digit',
        minute: '2-digit'
      }).format(date * 1000)
    }
  }
  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${tempType}&lang=${lang}`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
  }, [])
  if (weatherData !== '') {
    return (
      <div
        className={`${style.weatherCard} ${
          style['bg-' + weatherData.weather[0].icon]
        }`}
        style={{ width: width }}
      >
        <span className=''>{weatherData.name}</span>
        <h3 className=''>{weatherData.weather[0].description}</h3>
        <img
          className=''
          src={`https://raw.githubusercontent.com/veyselkose/Weather-App/main/src/icons/${weatherData.weather[0].icon}.svg`}
          alt=''
        />
        <span className=''>
          {weatherData.main.temp}°{tempType === 'metric' ? 'C' : 'F'}
        </span>
        <h5 className=''>
          {convertDate(weatherData.dt, lang).weakDay},{' '}
          {convertDate(weatherData.dt, lang).hours}{' '}
        </h5>
      </div>
    )
  } else {
    return <span>Loading</span>
  }
}
