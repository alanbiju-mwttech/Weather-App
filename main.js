// const searchCity = async () => {
//     const city = document.getElementById('city-input').value
//     console.log(city)
//     const data = await getData(city)
//     console.log(data)
//     showWeatherData(data)
// }


// const getData = (city) => {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '708f752885mshd573b218af3faf1p1f92dbjsn6db87ac43b6c',
//             'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
//         }
//     };

//     // const weatherPromise = 
//     return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
//         .then(response => response.json())
//         .then(data => data)
//         .catch(err => console.log(err))
// }

// const showWeatherData = (res) => {
//     document.getElementById('city-name').innerHTML = res.name
//     document.getElementById('weather-type').innerHTML = res.weather[0].main
//     document.getElementById('temp').innerHTML = res.main.temp
//     document.getElementById('min-temp').innerHTML = res.main.temp_min
//     document.getElementById('max-temp').innerHTML = res.main.temp_max
// }

const search_city = async () =>{
    const city = document.getElementById('city').value
    const error = document.getElementById('error')
    if(city == ""){
        error.innerText = 'Enter city name'
    }
    else{
        const data = await getData(city)
        showData(data)
    }
}


const getData = (city) => {
    return fetch(`https://wttr.in/${city}?format=j1`)
    .then(response =>response.json())
    .then(data => data)
    .catch(err =>console.log(err))
}


const showData = (data) => {
    console.log(typeof(data.nearest_area[0].areaName[0].value))
    document.getElementById('city-name').innerText = data.nearest_area[0].areaName[0].value
    document.getElementById('weather-desc').innerText = data.current_condition[0].weatherDesc[0].value
    document.getElementById('latitude').innerText = data.nearest_area[0].latitude
    document.getElementById('longitude').innerText = data.nearest_area[0].longitude
    document.getElementById('temp').innerText = data.current_condition[0].temp_C
    document.getElementById('feels-like').innerText = data.current_condition[0].FeelsLikeC
}

// const data = getData()