const apiKey = '8ad8ac0811da6d288503826ee0879f83';
const historyList = document.getElementById('historyList');
const weatherDetails = document.getElementById('weatherDetails');

async function searchWeather() {
    const locationInput = document.getElementById('locationInput');
    const location = locationInput.value.trim();

    if (location === '') {
        alert('Please enter a valid location.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    try {
        const data = await fetch(apiUrl)
        const response = await data.json();
        displayCurrentWeather(response);
        addToHistory(location);

    } catch (error) {
        console.error('Error fetching current weather:', error);
        alert('Unable to fetch current weather. Please try again.');
    }

    const dailyApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`;

    fetch(dailyApiUrl)
        .then(response => response.json())
        .then(data => {
            displayDailyForecast(data);
        })
        .catch(error => {
            console.error('Error fetching daily forecast:', error);
            alert('Unable to fetch daily forecast. Please try again.');
        });
}

function addToHistory(location) {
    const listItem = document.createElement('li');
    listItem.textContent = location;
    listItem.addEventListener('click', () => {
        document.getElementById('locationInput').value = location;
        searchWeather();
    });
    historyList.appendChild(listItem);
}

function displayCurrentWeather(data) {
    weatherDetails.innerHTML = '';
    const currentWeatherDiv = document.createElement('div');
    currentWeatherDiv.innerHTML = `
        <h2>Current Weather</h2>
        <p>Location: ${data.name}, ${data.sys.country}</p>
        <p>Temperature: ${data.main.temp} &deg;C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
    weatherDetails.appendChild(currentWeatherDiv);
}

function displayDailyForecast(data) {
    const dailyForecast = data.list.filter(entry => entry.dt_txt.includes('12:00:00'));

    const dailyForecastDiv = document.createElement('div');
    dailyForecastDiv.innerHTML = '<h2>Daily Forecast</h2>';

    dailyForecast.forEach(entry => {
        const date = new Date(entry.dt * 1000);
        dailyForecastDiv.innerHTML += `
            <p>${formatDate(date)} - ${entry.main.temp} &deg;C - ${entry.weather[0].description}</p>
        `;
    });

    weatherDetails.appendChild(dailyForecastDiv);
}

function applyFilter() {
    const filterSelect = document.getElementById('filterSelect');
    const selectedFilter = filterSelect.value;

    weatherDetails.innerHTML = '';
    if (selectedFilter === 'all') {
        const locationInput = document.getElementById('locationInput').value;

        const currentApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}`;

        fetch(currentApiUrl)
            .then(response => response.json())
            .then(data => {
                displayCurrentWeather(data);
            })
            .catch(error => {
                console.error('Error fetching current weather:', error);
                alert('Unable to fetch current weather. Please try again.');
            });

        const dailyApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${locationInput}&appid=${apiKey}`;

        fetch(dailyApiUrl)
            .then(response => response.json())
            .then(data => {
                displayDailyForecast(data);
            })
            .catch(error => {
                console.error('Error fetching daily forecast:', error);
                alert('Unable to fetch daily forecast. Please try again.');
            });
    } else if (selectedFilter === 'current' || selectedFilter === 'daily') {
        const locationInput = document.getElementById('locationInput').value;
        const apiUrl = `https://api.openweathermap.org/data/2.5/${selectedFilter === 'current' ? 'weather' : 'forecast'}?q=${locationInput}&appid=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (selectedFilter === 'current') {
                    displayCurrentWeather(data);
                } else {
                    displayDailyForecast(data);
                }
            })
            .catch(error => {
                console.error(`Error fetching ${selectedFilter} data:`, error);
                alert(`Unable to fetch ${selectedFilter} data. Please try again.`);
            });
    }
}
const formatDate = function (date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}