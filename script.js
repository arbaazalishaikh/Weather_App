
const apikey = "3fd0319f310d86264bd3b8396282ae65";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=mumbai";


// const searchBox = document.querySelector(".search");
// const searchBtn = document.querySelector(".search input");

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

}



