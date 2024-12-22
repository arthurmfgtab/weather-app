interface WeatherCondition {
  text: string;
  icon: string;
}

interface CurrentWeather {
  temp_c: number;
  condition: WeatherCondition;
  humidity: number;
  pressure_mb: number;
  wind_kph: number;
}

interface Location {
  name: string;
  country: string;
}

interface ForecastDay {
  date: string;
  day: {
    avgtemp_c: number;
    condition: WeatherCondition;
  };
}

interface WeatherData {
  location: Location;
  current: CurrentWeather;
  forecast: {
    forecastday: ForecastDay[];
  };
}
