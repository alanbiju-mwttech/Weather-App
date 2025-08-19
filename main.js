const search_city = async () =>{
    const city = document.getElementById('city').value
    const error = document.getElementById('error')
    if(city == ""){
        error.innerText = 'Enter city name'
    }
    else{
        const data = await getData(city)
        console.log(data)
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
    document.getElementById('city-name').innerText = data.nearest_area[0].areaName[0].value
    document.getElementById('weather-desc').innerText = data.current_condition[0].weatherDesc[0].value
    document.getElementById('latitude').innerText = data.nearest_area[0].latitude
    document.getElementById('longitude').innerText = data.nearest_area[0].longitude
    document.getElementById('temp').innerText = data.current_condition[0].temp_C
    document.getElementById('feels-like').innerText = data.current_condition[0].FeelsLikeC
}

// const data = getData()