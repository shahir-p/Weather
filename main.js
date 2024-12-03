const month = {
    month : "long"
    
 }

 const day = {
    day : "numeric"
 }

 const year = {
    year : "numeric"
 }

const checked = async () => {
    console.log(input.value);
    if (input.value) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=d3da86e79011291b09d6a00b03360772`)
        console.log(response);
        if (response.status == 200) {
            const weather = await response.json()
            console.log(weather);
            temp = ((weather.main.temp) - 273.15).toFixed(0);
            feels = ((weather.main.feels_like) - 273.15).toFixed(0);
            condition = (weather.weather).forEach(element => {
                description = element.main

            });
            


            inbox1.innerHTML = `
                        <div>
                            <h1>Date : ${new Date(weather.dt*1000).toLocaleString('en-US',day)}-${new Date(weather.dt*1000).toLocaleString('en-US',month)}-${new Date(weather.dt*1000).toLocaleString('en-US',year)}</h1>
                         
                       </div>
                    
                   <div>
                        <h1>Longitude : ${(weather.coord.lon).toFixed(1)} </h1>
                        <h1>Latitude : ${(weather.coord.lat).toFixed(1)}</h1>
                   </div>
                
                
         `

            inbox2.innerHTML = `
             <span id="condition">${weather.name} , ${weather.sys.country}</span>
                    <div class="value"id="degree">${temp}<div id="celsious">Celsius</div></div>
                     <span id="condition">${description}</span>
            `
            icons1.innerHTML = `
              <div class="iconBox"><img src="./img/wind.png" alt=""><span id="wind" class="unit">${weather.wind.speed}
                            mph</span>
                    </div>
                     <div class="iconBox"><img src="./img/pressure.png" alt=""><span id="pressure" class="unit">${weather.main.humidity}
                                hpa</span>
                        </div>
                    <div class="iconBox"><img src="./img/water-drop.png" alt=""><span id="humid" class="unit">${weather.main.humidity}
                            %</span></div>
                             <div class="iconBox"><span>Feels Like</span><span class="unit"
                                id="feels">${feels}<sup>o</sup></span>
                        </div>
            `

       


        } else {
            alert("Sorry..Check another place")
        }

    } else {
        alert("Enter a valid input")
    }

}