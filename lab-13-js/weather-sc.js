const API_KEY = `eaa925e73af933520ff1ffe066422925`
const searchTemperature = () =>{
    const city = document.getElementById("city-name").value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=az`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}
const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text
}
const displayTemperature = temperature =>{
    console.log(temperature)
    setInnerText('city',temperature.name)
    setInnerText('weather',temperature.weather[0].description)
    setInnerText('temp',Math.round(temperature.main.temp))

    const url =`http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById("image-icon")
    imgIcon.setAttribute('src',url)
}