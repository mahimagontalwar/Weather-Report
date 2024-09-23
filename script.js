const jsObjects = [{"location":{"name":"Sanaa","region":"San","country":"Yemen","lat":15.36,"lon":44.21,"tz_id":"Asia/Aden","localtime_epoch":1709067864,"localtime":"2024-02-28 0:04"},"current":{"last_updated_epoch":1709067600,"last_updated":"2024-02-28 00:00","temp_c":15.7,"temp_f":60.3,"is_day":0,"condition":{"text":"Clear ","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":4.0,"wind_kph":6.5,"wind_degree":199,"wind_dir":"SSW","pressure_mb":1015.0,"pressure_in":29.96,"precip_mm":0.0,"precip_in":0.0,"humidity":69,"cloud":8,"feelslike_c":15.7,"feelslike_f":60.3,"vis_km":10.0,"vis_miles":6.0,"uv":1.0,"gust_mph":5.5,"gust_kph":8.9}},
  {"location":{"name":"Baghdad","region":"Baghdad","country":"Iraq","lat":33.34,"lon":44.39,"tz_id":"Asia/Baghdad","localtime_epoch":1709148262,"localtime":"2024-02-28 22:24"},"current":{"last_updated_epoch":1709147700,"last_updated":"2024-02-28 22:15","temp_c":11.0,"temp_f":51.8,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":5.6,"wind_kph":9.0,"wind_degree":310,"wind_dir":"NW","pressure_mb":1020.0,"pressure_in":30.13,"precip_mm":0.0,"precip_in":0.0,"humidity":47,"cloud":0,"feelslike_c":7.9,"feelslike_f":46.3,"vis_km":10.0,"vis_miles":6.0,"uv":1.0,"gust_mph":29.0,"gust_kph":46.7}},
  {"location":{"name":"Rabat","region":"","country":"Morocco","lat":34.03,"lon":-6.84,"tz_id":"Africa/Casablanca","localtime_epoch":1709148297,"localtime":"2024-02-28 20:24"},"current":{"last_updated_epoch":1709147700,"last_updated":"2024-02-28 20:15","temp_c":14.0,"temp_f":57.2,"is_day":0,"condition":{"text":"Partly cloudy","icon":"//cdn.weatherapi.com/weather/64x64/night/116.png","code":1003},"wind_mph":4.3,"wind_kph":6.8,"wind_degree":320,"wind_dir":"NW","pressure_mb":1023.0,"pressure_in":30.21,"precip_mm":0.0,"precip_in":0.0,"humidity":67,"cloud":25,"feelslike_c":13.2,"feelslike_f":55.8,"vis_km":8.0,"vis_miles":4.0,"uv":1.0,"gust_mph":12.2,"gust_kph":19.7}},
  {"location":{"name":"Delhi","region":"Ontario","country":"Canada","lat":42.85,"lon":-80.5,"tz_id":"America/Toronto","localtime_epoch":1709148313,"localtime":"2024-02-28 14:25"},"current":{"last_updated_epoch":1709147700,"last_updated":"2024-02-28 14:15","temp_c":-0.5,"temp_f":31.1,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":15.0,"wind_kph":24.1,"wind_degree":310,"wind_dir":"NW","pressure_mb":1000.0,"pressure_in":29.52,"precip_mm":0.01,"precip_in":0.0,"humidity":77,"cloud":0,"feelslike_c":-8.3,"feelslike_f":17.1,"vis_km":2.0,"vis_miles":1.0,"uv":1.0,"gust_mph":32.0,"gust_kph":51.5}},
  {"location":{"name":"Mumbai","region":"Maharashtra","country":"India","lat":18.98,"lon":72.83,"tz_id":"Asia/Kolkata","localtime_epoch":1709148333,"localtime":"2024-02-29 0:55"},"current":{"last_updated_epoch":1709147700,"last_updated":"2024-02-29 00:45","temp_c":29.0,"temp_f":84.2,"is_day":0,"condition":{"text":"Overcast","icon":"//cdn.weatherapi.com/weather/64x64/night/122.png","code":1009},"wind_mph":3.8,"wind_kph":6.1,"wind_degree":160,"wind_dir":"SSE","pressure_mb":1011.0,"pressure_in":29.85,"precip_mm":0.0,"precip_in":0.0,"humidity":43,"cloud":0,"feelslike_c":31.1,"feelslike_f":87.9,"vis_km":2.5,"vis_miles":1.0,"uv":1.0,"gust_mph":19.2,"gust_kph":30.9}},
  {"location":{"name":"Goa","region":"Goa","country":"India","lat":15.4,"lon":73.8,"tz_id":"Asia/Kolkata","localtime_epoch":1709148356,"localtime":"2024-02-29 0:55"},"current":{"last_updated_epoch":1709147700,"last_updated":"2024-02-29 00:45","temp_c":27.0,"temp_f":80.7,"is_day":0,"condition":{"text":"Clear ","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":7.6,"wind_kph":12.2,"wind_degree":357,"wind_dir":"N","pressure_mb":1009.0,"pressure_in":29.8,"precip_mm":0.0,"precip_in":0.0,"humidity":70,"cloud":18,"feelslike_c":29.3,"feelslike_f":84.7,"vis_km":10.0,"vis_miles":6.0,"uv":1.0,"gust_mph":12.2,"gust_kph":19.6}},
  {"location":{"name":"London","region":"City of London, Greater London","country":"United Kingdom","lat":51.52,"lon":-0.11,"tz_id":"Europe/London","localtime_epoch":1709148551,"localtime":"2024-02-28 19:29"},"current":{"last_updated_epoch":1709147700,"last_updated":"2024-02-28 19:15","temp_c":11.0,"temp_f":51.8,"is_day":0,"condition":{"text":"Light drizzle","icon":"//cdn.weatherapi.com/weather/64x64/night/266.png","code":1153},"wind_mph":10.5,"wind_kph":16.9,"wind_degree":210,"wind_dir":"SSW","pressure_mb":1013.0,"pressure_in":29.91,"precip_mm":0.6,"precip_in":0.02,"humidity":94,"cloud":75,"feelslike_c":8.9,"feelslike_f":48.1,"vis_km":10.0,"vis_miles":6.0,"uv":1.0,"gust_mph":17.0,"gust_kph":27.4}},
  {"location":{"name":"Chandigarh","region":"Chandigarh","country":"India","lat":30.74,"lon":76.79,"tz_id":"Asia/Kolkata","localtime_epoch":1709148919,"localtime":"2024-02-29 1:05"},"current":{"last_updated_epoch":1709148600,"last_updated":"2024-02-29 01:00","temp_c":13.1,"temp_f":55.5,"is_day":0,"condition":{"text":"Clear ","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":5.8,"wind_kph":9.4,"wind_degree":357,"wind_dir":"N","pressure_mb":1013.0,"pressure_in":29.93,"precip_mm":0.0,"precip_in":0.0,"humidity":41,"cloud":0,"feelslike_c":12.4,"feelslike_f":54.3,"vis_km":10.0,"vis_miles":6.0,"uv":1.0,"gust_mph":12.2,"gust_kph":19.7}},
  {"location":{"name":"Milan","region":"Lombardia","country":"Italy","lat":45.47,"lon":9.2,"tz_id":"Europe/Rome","localtime_epoch":1709148879,"localtime":"2024-02-28 20:34"},"current":{"last_updated_epoch":1709148600,"last_updated":"2024-02-28 20:30","temp_c":11.0,"temp_f":51.8,"is_day":0,"condition":{"text":"Partly cloudy","icon":"//cdn.weatherapi.com/weather/64x64/night/116.png","code":1003},"wind_mph":2.2,"wind_kph":3.6,"wind_degree":329,"wind_dir":"NNW","pressure_mb":1018.0,"pressure_in":30.06,"precip_mm":0.0,"precip_in":0.0,"humidity":82,"cloud":75,"feelslike_c":10.4,"feelslike_f":50.8,"vis_km":10.0,"vis_miles":6.0,"uv":1.0,"gust_mph":8.5,"gust_kph":13.8}},
  {"location":{"name":"Vienna","region":"Wien","country":"Austria","lat":48.2,"lon":16.37,"tz_id":"Europe/Vienna","localtime_epoch":1709148918,"localtime":"2024-02-28 20:35"},"current":{"last_updated_epoch":1709148600,"last_updated":"2024-02-28 20:30","temp_c":9.0,"temp_f":48.2,"is_day":0,"condition":{"text":"Overcast","icon":"//cdn.weatherapi.com/weather/64x64/night/122.png","code":1009},"wind_mph":2.5,"wind_kph":4.0,"wind_degree":270,"wind_dir":"W","pressure_mb":1021.0,"pressure_in":30.15,"precip_mm":0.0,"precip_in":0.0,"humidity":76,"cloud":100,"feelslike_c":7.9,"feelslike_f":46.1,"vis_km":10.0,"vis_miles":6.0,"uv":1.0,"gust_mph":6.7,"gust_kph":10.8}},
  {"location":{"name":"Prague","region":"Hlavni mesto Praha","country":"Czech Republic","lat":50.08,"lon":14.47,"tz_id":"Europe/Prague","localtime_epoch":1709148941,"localtime":"2024-02-28 20:35"},"current":{"last_updated_epoch":1709148600,"last_updated":"2024-02-28 20:30","temp_c":4.0,"temp_f":39.2,"is_day":0,"condition":{"text":"Partly cloudy","icon":"//cdn.weatherapi.com/weather/64x64/night/116.png","code":1003},"wind_mph":3.8,"wind_kph":6.1,"wind_degree":360,"wind_dir":"N","pressure_mb":1022.0,"pressure_in":30.18,"precip_mm":0.0,"precip_in":0.0,"humidity":87,"cloud":75,"feelslike_c":3.1,"feelslike_f":37.5,"vis_km":10.0,"vis_miles":6.0,"uv":1.0,"gust_mph":4.6,"gust_kph":7.4}},
  {"location":{"name":"Pune","region":"Maharashtra","country":"India","lat":18.53,"lon":73.87,"tz_id":"Asia/Kolkata","localtime_epoch":1709148972,"localtime":"2024-02-29 1:06"},"current":{"last_updated_epoch":1709148600,"last_updated":"2024-02-29 01:00","temp_c":25.3,"temp_f":77.6,"is_day":0,"condition":{"text":"Clear ","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":2.2,"wind_kph":3.6,"wind_degree":356,"wind_dir":"N","pressure_mb":1012.0,"pressure_in":29.87,"precip_mm":0.0,"precip_in":0.0,"humidity":42,"cloud":23,"feelslike_c":25.7,"feelslike_f":78.3,"vis_km":10.0,"vis_miles":6.0,"uv":1.0,"gust_mph":4.0,"gust_kph":6.4}}
  ]
  
  const temperatureField = document.querySelector(".temp"); 
  const cityField = document.querySelector(".city"); 
  const dateField = document.querySelector(".dateF"); 
  const emojiField = document.querySelector(".weather_condition img");
  const weatherField = document.querySelector(".weather_condition span");
  const searchField = document.querySelector(".searchField");
  const form = document.querySelector("form");
  
  /* 
  event listener say submit
  
  it will add some automatic validations
  it gives you an event listener on click of the button as well as hitting enter
  */
  
  /* 
  
  add event listener to submit 
  get the input value from input box 
  find the location in the array of objects
  get all the things to display
  change the value of all html elements
  
  */
  
  let target;
  
  form.addEventListener('submit', function(e){
    e.preventDefault();
    target = searchField.value;
    fetchData(target);
  });
  
  
  function fetchData(target) {
    let result = jsObjects.filter(function(item) {
      return item.location.name.toLowerCase() === target.toLowerCase()
    })
    
    updateDom(result[0]);
  }
  
  function updateDom(data) {
    const exactDate = data.location.localtime;
    const exactTime = exactDate.split(" ")[1];
    const exactD = exactDate.split(" ")[0];
    const exactDay = getDayFullName(new Date(exactDate).getDay());
    emojiField.src = data.current.condition.icon;
    cityField.innerText = data.location.name;
    dateField.innerText = `${exactTime} ${exactDay} ${exactD}`;
    temperatureField.innerText = data.current.temp_c;
    weatherField.innerText = data.current.condition.text
  }
  
  function getDayFullName(day) {
    switch (day) {
        case 0:
          return "Sunday";
        case 1:
          return "Monday";
        case 2:
          return "Tuesday";
        case 3:
          return "Wednesday";
        case 4:
          return "Thursday";
        case 5:
          return "Friday";
        case 6:
          return "Saturday";
        default:
          return "Don't Know";
      }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  