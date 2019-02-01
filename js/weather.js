const weather = document.querySelector("#js-weather");

const API_KEY = "6f97b3ac9e978504650151cd47b64abc";
const COORD_LS = "location";

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(reponse){
        return reponse.json();
    }).then(function(json){
        const temp = json.main.temp;
        const name = json.name;
        weather.innerText = `기온 : ${temp},위치 : ${name}`;
        
    })
}

function saveCoord(geoObj){
    localStorage.setItem(COORD_LS, JSON.stringify(geoObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const geoObj = {
        latitude,
        longitude
    }
    saveCoord(geoObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("Can't get yout location!");
    
}

function getLocation(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoord(){
    const loadCoord = localStorage.getItem(COORD_LS);
    if(loadCoord === null){
        getLocation();
    }else{
        const parse = JSON.parse(loadCoord);
        getWeather(parse.latitude, parse.longitude);
    }
}

function init(){
   loadCoord();
}
init();