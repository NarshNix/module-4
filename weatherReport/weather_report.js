function showweatherDetails(event){
    event.preventDefault();

    const city = document.getElementById('city').value;
    const weatherInfo = document.getElementById("weatherInfo");
    const apiKey = '8c2ed7796e657ae7f6f0bf5abec72118';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl).then(response => response.json()).then((data) => {weatherInfo.innerHTML = `<h2>${data.name}</h2><p>Temprature: ${data.main.temp} &#451;</p><p>Weather: ${data.weather[0].description}</p>`}).catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );