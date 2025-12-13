// const apiKey = "a9382d2cea08997aa6c37a461fce32e7";
const apiKey = "4bfb4f807ce54eedb4955806251312";


const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
const cityNameInp = document.getElementById("cityNameInp");
const main = document.querySelector(".main");


searchBtn.addEventListener("click" , ()=>{
  const city = cityNameInp.value.trim();
  if(!city){
    alert("Please enter a city name.");
    return;
  }

  getWeather(city);
})

clearBtn.addEventListener("click" , ()=>{
  cityNameInp.value = "";
  main.innerHTML = "";
});

async function getWeather(cityName) {

  main.innerHTML = `

  <div class="spinner-center">
  <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
  </div>
  </div> 
  `  
  try{
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`;

    const res = await fetch(url);

    if(!res.ok){
      if(res.status === 400 || res.status === 401){
        throw new Error("City not found.");
      }
      throw new Error("Network response was not ok.");
    }

    const data = await res.json();
    console.log(data);
    
    
    const timestamp = data.location && data.location.localtime ? data.location.localtime : "-";

    const icon = data.current && data.current.condition ?`https:${data.current.condition.icon}` : "" ;

    const text = data.current && data.current.condition ? data.current.condition.text : "-" ;

    const temperature = data.current ? data.current.temp_c : "-";

    const humidity = data.current ? data.current.humidity : "-";

    const windSpeed = data.current ? data.current.wind_kph : "-";

    // console.log(timestamp);
    // console.log(icon);
    // console.log(text);
    // console.log(temperature);
    // console.log(humidity);
    // console.log(windSpeed);

    main.innerHTML = `

    <div class="result">
    <h4>${timestamp}</h4>
    <div class="temp-row">
    ${icon ? `<img src="${icon}" alt="${text}" />` : ""}

    <h1>${temperature}°C</h1>
    </div>
    <p>${text}</p>
    <div class="small-info">
    <div>
    <div class="text-muted">Humidity</div>
    <div>${humidity}%</div>
    </div>

    <div>
    <div class="text-muted">Wind</div>
    <div>${windSpeed}</div>

    </div>
    </div>
    </div>        
    `
  }catch(error){
    console.error("Error --->" , error);
    showError("Could not fetch weather. Check City name or Api Key");
  }
}


function showError(message){
  main.innerHTML = `<div class="error">${message}</div>`;
}