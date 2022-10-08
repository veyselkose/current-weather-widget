import React from 'react'

import { WeatherCard } from 'current-weather-widget'
import 'current-weather-widget/dist/index.css'

const App = () => {
  return (
    <WeatherCard
      location='Erzincan'
      tempType='metric'
      apiKey='226f8b19fdce6422e159452d02cf9240'
      lang='en'
      width='180px'
    />
  )
}

export default App
