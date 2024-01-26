const temperatureRef = document.querySelector('.temperature');
const locationRef = document.querySelector('.location');
const conditionRef = document.querySelector('.condition');

const btn = document.querySelector('.search-btn');

const fetchData = async (location) => {
	const response = await fetch(
		`https://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${location}&aqi=no`
	);
	const data = await response.json();
	renderWeatherData(data);
};

const renderWeatherData = (data) => {
	const temperatureRef = document.querySelector('.temperature');
	const locationRef = document.querySelector('.location');
	const conditionRef = document.querySelector('.condition p');
	const conditionImg = document.querySelector('.condition img');

	temperatureRef.innerText = data.current.temp_c + '🌡️';
	locationRef.innerText = data.location.name;
	conditionRef.innerText = data.current.condition.text;
	conditionImg.src = data.current.condition.icon;
};

btn.addEventListener('click', () => {
	const input = document.getElementById('searchInput');
	const location = input.value;
	fetchData(location);
});
