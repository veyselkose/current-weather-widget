# current-weather-widget

> current weather widget

[![NPM](https://img.shields.io/npm/v/current-weather-widget.svg)](https://www.npmjs.com/package/current-weather-widget) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save current-weather-widget
```

| Variable Name             | Description                    |
| ------------------------- | ------------------------------ |
| `location` **\*required** | city name                      |
| `tempType`                | metric or empty                |
| `lang`                    | 2 Letter Language Codes(tr,en) |
| `width` **\*required**    | auto or pixels (180px)         |
| `apiKey` **\*required**   | openweathermap.org api key     |

## Usage

```jsx
import React, { Component } from 'react'

import {WeatherCard} from 'current-weather-widget'
import 'current-weather-widget/dist/index.css'

class Example extends Component {
  render() {
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
}
```

## License

MIT © [veyselkose](https://github.com/veyselkose)
