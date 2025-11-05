// Replace this with your own free OpenWeather API key
const API_KEY = "93e898eba9e94c794bb1184f5f148815"; 
const weatherContainer = document.getElementById("weatherContainer");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const tempFilter = document.getElementById("tempFilter");

// Store last search results for filtering
let weatherData = [];

async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("City not found");
  }
  const data = await response.json();
  return data;
}

function renderWeather(dataList) {
  weatherContainer.innerHTML = "";

  if (dataList.length === 0) {
    weatherContainer.innerHTML = "<p>No results found.</p>";
    return;
  }

  dataList.forEach((data) => {
    const card = document.createElement("div");
    card.className = "weather-card";

    card.innerHTML = `
      <h2>${data.name}</h2>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
      <p><strong>${data.main.temp.toFixed(1)}°C</strong></p>
      <p>${data.weather[0].main}</p>
      <p>Humidity: ${data.main.humidity}%</p>
    `;

    weatherContainer.appendChild(card);
  });
}

function applyFilter() {
  const filterValue = tempFilter.value;

  let filteredData = [...weatherData];
  if (filterValue === "cold") {
    filteredData = weatherData.filter(d => d.main.temp < 20);
  } else if (filterValue === "warm") {
    filteredData = weatherData.filter(d => d.main.temp >= 20 && d.main.temp <= 30);
  } else if (filterValue === "hot") {
    filteredData = weatherData.filter(d => d.main.temp > 30);
  }

  renderWeather(filteredData);
}

searchBtn.addEventListener("click", async () => {
  const city = searchInput.value.trim();
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  try {
    const data = await fetchWeather(city);
    // Prevent duplicates
    if (!weatherData.find((w) => w.name.toLowerCase() === data.name.toLowerCase())) {
      weatherData.push(data);
    }
    applyFilter();
  } catch (err) {
    alert(err.message);
  }
});

tempFilter.addEventListener("change", applyFilter);
