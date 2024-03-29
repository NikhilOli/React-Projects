
import React, { useState, useEffect } from 'react';

const App = () => {

  const [weatherData, setWeatherData] = useState({
    name: '',
    main: { temp: '', },
    weather: [{ description: '' }],
    sys: { country: '' },
    wind: { speed: '' }
  });

  const [searchQuery, setSearchQuery] = useState('');

  const [loading, setLoading] = useState(false);

  const api_key = "8f72f7da5f66875c07226edbe6be9b5e";
  const weatherApi = async () => {
    let url;
    if (!searchQuery) {

      url = `https://api.openweathermap.org/data/2.5/weather?q=kathmandu&units=metric&appid=${api_key}`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&appid=${api_key}`;

    }
    const response = await fetch(url);
    const data = await response.json();
    setWeatherData(data);
    console.log(data);
  };
  useEffect(() => {
    weatherApi();
  }, [])
  const handleSearch = () => {
    weatherApi(searchQuery);
    setSearchQuery('');
  }

  const changeTheme = (theme) => {
    document.body.style.backgroundColor = theme === 'dark' ? '#434343' : '#fff';
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-no-repeat"
    // style={{ backgroundImage: `url(${getBackgroundImage()})` }}
    >
      <div className="bg-white bg-opacity-80 p-12 rounded-md shadow-lg text-center">
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter city"
            className="p-2 border border-gray-300 rounded mr-2"
          />
          <button
            onClick={handleSearch}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </div>
        {loading ? (
          <p className="text-lg text-gray-600">Loading...</p>
        ) : (
          <>
            <h1 className="text-5xl font-bold mb-4 text-gray-800">{weatherData.name}</h1>
            <p className="text-7xl font-bold text-orange-500">{Math.round(weatherData.main.temp)}°C</p>
            <p className="text-lg text-gray-600 mb-6">{weatherData.weather[0].description}</p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center">
                <span className="w-8 h-8 bg-green-500 rounded-full inline-flex items-center justify-center text-white font-bold">
                  H
                </span>
                <p className="text-gray-600 ml-2">{`Humidity: ${weatherData.main.humidity} %`}</p>
              </div>
              <div className="flex items-center">
                <span className="w-8 h-8 bg-green-500 rounded-full inline-flex items-center justify-center text-white font-bold">
                  W
                </span>
                <p className="text-gray-600 ml-2">Wind: {weatherData.wind.speed} km/h</p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="mt-4">
        <label className="mr-2">Select Theme:</label>
        <select className='focus:outline-none' onChange={(e) => changeTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  );
};

export default App;
