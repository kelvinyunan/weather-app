const checkBtn = document.getElementById("checkBtn");
const cityInput = document.getElementById("cityInput");
const cityName = document.getElementById("cityName");
const weatherDesc = document.getElementById("weatherDesc");

const fetchData = async (city) => {
    try {
        const res = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=U42G86UB2A868E8C2GCA7QKRT`
        );
        const data = await res.json();
        displayData(data);
    } catch (err) {
        console.log(err);
    }
};

function checkCity() {
    fetchData(cityInput.value);
}

function displayData(data) {
    const { resolvedAddress, description } = data;
    cityName.innerHTML = resolvedAddress;
    weatherDesc.innerHTML = description;
}

checkBtn.addEventListener("click", checkCity);
