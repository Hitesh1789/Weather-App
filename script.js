
document.querySelector(".btn").addEventListener("click",()=>{
    let search = document.getElementById('search');
    let city = search.value;
    searchData(city);
});

async function data(city){
    const url = `https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=70dd5d241249412ab56f05c136c3566f&include=minutely&city=${city}&country=India`;
    const options = {
        method: 'GET'
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    }
    catch (error) {
        console.log(error);
    }
}   

async function searchData(city) {
    let result = await data(city);
    document.querySelector(".city").innerHTML = `Weather for ${result.data[0].city_name}`;

    document.querySelectorAll(".maininfo")[0].innerHTML = `${result.data[0].temp}&deg;C`
    let ele1 = document.querySelectorAll(".info")[0];
    ele1.innerHTML = `<div>Tempertaure : ${result.data[0].temp}&deg;C</div>
    <div>Cloud coverage : ${result.data[0].clouds}%</div>
    <div>Pressure : ${result.data[0].pres} mb</div>`

    document.querySelectorAll(".maininfo")[1].innerHTML = `${result.data[0].rh}%`
    let ele2 = document.querySelectorAll(".info")[1];
    ele2.innerHTML = `Relative Humdidty : ${result.data[0].rh}%
    <div>AQI : ${result.data[0].aqi}</div>
    <div>Visibility : ${result.data[0].vis} KM</div>`

    document.querySelectorAll(".maininfo")[2].innerHTML = `${result.data[0].wind_spd} m/s`
    let ele3 = document.querySelectorAll(".info")[2];
    ele3.innerHTML = `<div>Wind Speed : ${result.data[0].wind_spd} m/s</div>
    <div>Wind Direction : ${result.data[0].wind_dir} mb</div>
    <div>Sunrise : ${result.data[0].sunrise}</div>`
}


searchData('vrindavan')

async function fillData(city ,i) {
    let result = await data(city);
    document.querySelectorAll(".othercities")[i].innerHTML += `
    <td>${result.data[0].temp}</td>
    <td>${result.data[0].clouds}</td>
    <td>${result.data[0].pres}</td>
    <td>${result.data[0].rh}</td>
    <td>${result.data[0].aqi}</td>
    <td>${result.data[0].vis}</td>
    <td>${result.data[0].wind_spd}</td>
    <td>${result.data[0].wind_dir}</td>
    <td>${result.data[0].sunrise}</td>
    `;    
}

fillData('delhi',0)
fillData('Ayodhya',1)
fillData('Kolkata',2)
fillData('Lucknow',3)

