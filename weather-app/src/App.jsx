
import React, { useState, useEffect } from 'react';


// const App = () => {
//   const [weatherData, setWeatherData] = useState(null);

//   useEffect(() => {
//     // Fetch weather data from an API (replace with your own API)
//     // For simplicity, let's assume you have an API endpoint that provides weather data
//     fetch('https://api.example.com/weather')
//       .then((response) => response.json())
//       .then((data) => setWeatherData(data))
//       .catch((error) => console.error('Error fetching weather data:', error));
//   }, []);

//   const getBackgroundImage = () => {
//     if (!weatherData) return '';

//     const weatherCondition = weatherData.condition.toLowerCase();

//     switch (weatherCondition) {
//       case 'hot':
//         return 'hot-bg-image.jpg'; // Replace with your hot background image
//       case 'cold':
//         return 'cold-bg-image.jpg'; // Replace with your cold background image
//       case 'rainy':
//         return 'rainy-bg-image.jpg'; // Replace with your rainy background image
//       default:
//         return 'default-bg-image.jpg'; // Replace with a default background image
//     }
//   };

//   return (
//     <div
//       className="flex flex-col items-center justify-center h-screen"
//       style={{
//         backgroundImage: `url(${getBackgroundImage()})`,
//         backgroundSize: 'cover',
//       }}
//     >
//       <div className="bg-white p-8 rounded-md shadow-md">
//         {weatherData ? (
//           <>
//             <h1 className="text-3xl font-bold mb-4">{weatherData.city}</h1>
//             <p className="text-lg">{weatherData.temperature}°C</p>
//             <p className="text-md">{weatherData.description}</p>
//           </>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     </div>
//   );
// };

const App = () => {
  const [weatherData, setWeatherData] = useState({
    city: 'Cityville',
    temperature: 25,
    condition: 'sunny',
    description: 'Sunny and clear skies',
  });

  const getBackgroundImage = () => {
    if (!weatherData) return '';

    const weatherCondition = weatherData.condition.toLowerCase();

    switch (weatherCondition) {
      case 'hot':
        return 'hot-bg-image.jpg'; // Replace with your hot background image
      case 'cold':
        return 'https://source.unsplash.com/1600x900/?cold'; // Random cold place image from Unsplash
      case 'rainy':
        return 'rainy-bg-image.jpg'; // Replace with your rainy background image
      default:
        return 'default-bg-image.jpg'; // Replace with a default background image
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${getBackgroundImage()})` }}
    >
      <div className="bg-white bg-opacity-80 p-12 rounded-md shadow-lg text-center">
        {weatherData ? (
          <>
            <h1 className="text-5xl font-bold mb-4 text-gray-800">{weatherData.city}</h1>
            <p className="text-7xl font-bold text-orange-500">{weatherData.temperature}°C</p>
            <p className="text-lg text-gray-600 mb-6">{weatherData.description}</p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center">
                <span className="w-8 h-8 bg-blue-500 rounded-full inline-flex items-center justify-center text-white font-bold">
                  H
                </span>
                <p className="text-gray-600 ml-2">Humidity: 70%</p>
              </div>
              <div className="flex items-center">
                <span className="w-8 h-8 bg-green-500 rounded-full inline-flex items-center justify-center text-white font-bold">
                  W
                </span>
                <p className="text-gray-600 ml-2">Wind: 15 km/h</p>
              </div>
            </div>
          </>
        ) : (
          <p className="text-lg text-gray-600">Loading...</p>
        )}
      </div>
    </div>
  );
};


export default App;
