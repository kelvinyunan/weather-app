const checkBtn = document.getElementById("checkBtn");
const cityInput = document.getElementById("cityInput");
const cityName = document.getElementById("cityName");
const weatherDesc = document.getElementById("weatherDesc");
const statusDesc = document.getElementById("statusDesc");
const updateTime = document.getElementById("updateTime");
const temperature = document.getElementById("temperature");
const realTimeStat = document.getElementById("realTimeStat");

const fetchData = async (city) => {
    try {
        const res = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=U42G86UB2A868E8C2GCA7QKRT`
        );
        const data = await res.json();
        displayData(data);
    } catch (err) {
        alert('The location you are looking for does not exist, please enter a valid location');
    }
};

function checkCity() {
    fetchData(cityInput.value);
}

function displayData(data) {
    const { resolvedAddress, description, currentConditions } = data;
    const { datetime, temp, conditions } = currentConditions;
    cityName.innerHTML = resolvedAddress;
    weatherDesc.innerHTML = description;
    statusDesc.innerHTML = conditions;
    realTimeStat.innerHTML = "Real Time Status"
    updateTime.innerHTML = `Last Update at ${datetime}`;
    temperature.innerHTML = Math.round((parseInt(temp) - 32) * 5 / 9) + '°C';
}

checkBtn.addEventListener("click", checkCity);
