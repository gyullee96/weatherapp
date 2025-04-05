import './App.css';
import './WeatherButton.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

// 1. 화면이 뜨자마자 현재 위치의 날씨가 나온다. (지역, 섭씨, 화씨, 날씨)
// 2. 그 밑에는 5개의 버튼이 있다. (현재 위치 1개, 다른 나라 도시 4개)
// 3. 도시버튼을 클릭하면 도시별 날씨가 나온다.
// 4. 현재위치버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 5. 데이터를 들고 오는 동안 로딩 스피너가 돌아간다.

function App() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);
  const cities = ['Paris', 'New York', 'Tokyo', 'Seoul']
  const [apiError, setAPIError] = useState("");


  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat, lon);
    });
  }

  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      setLoading(true);
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7657ac7041e2a19e52d07d00c8fc3307&units=metric`
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }
  };

  const getWeatherByCity = async () => {
    try {
      setLoading(true);
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7657ac7041e2a19e52d07d00c8fc3307&units=metric`
      let response = await fetch(url)
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setAPIError(err.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (city == "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city])


  return (
    <div>
      {loading ? (<div className='container'><ClipLoader
        color="#f88c6b"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>) : (<div className='container'>
        <WeatherBox weather={weather} />
        <WeatherButton cities={cities} setCity={setCity} city={city} />
      </div>)}

    </div>
  );
}

export default App;
