
const key = "3fd0319f310d86264bd3b8396282ae65";
// const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";


// const searchBox = document.querySelector(".search");
// const searchBtn = document.querySelector(".search input");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

}



