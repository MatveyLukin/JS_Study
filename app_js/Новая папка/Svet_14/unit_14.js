const param = {
    url: "https://api.openweathermap.org/data/2.5/",
    appid: "0469ae2dcbb8a10db905d7d36be0ef1c", //my_key
}

const cities = {
    703448: "KYIV",
    706483: "KHARKIV",
    698740: "ODESA",
    709930: "DNIPRO",
    702550: "LVIV",
    702569: "LUTSK",
}

function createSelector() {

    let select = document.createElement('select');
    select.id = 'city';
    
    for (let key in cities) {
        let option = document.createElement('option');
        option.value = key;
        option.textContent = cities[key];
        select.append(option);
    }
    document.querySelector('.select').append(select);
}
createSelector()


function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}
function showWeather(data) {
    console.log(data);
    document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + '&deg;';
    document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector('.description').textContent = data.weather[0]['description'];
    document.querySelector('.direction_of_the_wind').innerHTML = `${data.wind.deg} `;
    document.querySelector('.wind_speed').innerHTML = `${data.wind.speed} m/s`;
    document.querySelector('.pressure').innerHTML = `${data.main.pressure} millibars`;
}
getWeather()

getWeather();
document.querySelector('#city').onchange = getWeather;


