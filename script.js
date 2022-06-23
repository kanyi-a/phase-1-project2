//geolocation pop- up
window.addEventListener("load", ()=> {
   let long;
   let lat;

   if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(position =>{
           //console.log(position);
           
           long = position.coords.longitude;
           lat = position.coords.latitude;
           
            
       })

   }else{
       h1.textContent = "hey please turn on geolocation "
   }


});



//API KEY
let weather = {
   "apiKey": "bc3117fec7aed263f6814ea628daff8d",
   fetchWeather:function (city) {
       fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
       + city
       + "&units=metric&APPID=" 
       + this.apiKey
       )
       .then(resp =>{
           if(!resp.ok) throw new Error (resp.statusText);
           return resp.json();
       })
       .then((data) => this.displayWeather(data))
       .catch(console.err)

       //INTRODUCING THE DISPLAYWEATHER FUNCTION
   },
    displayWeather: function(data) {
        const { name } = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity } = data.main;
        const {speed} = data.wind;
        
        
       // console.log( name, icon, description, temp, humidity, speed);
        //ADDING AN EVENT
        document.querySelector(".city").innerText = "Weather in " + name;
        //document.querySelector(".icon").src = "http://openweathermap.org/img/w/" + icon + ".png";
        
        
        document.querySelector(".description").innerText = description;
;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
        // set Icon
  

    },
    search: function (){
       this.fetchWeather(document.querySelector(".search-bar").value);
    }
   
};
document.querySelector(".search button").addEventListener("click", function () {
weather.search();
})
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();

    }
    function setIcons(icon, iconID){
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.toUpperCase();
        skycons.play();
  return skycons.set(iconID, skycons[currentIcon]);
    }

});
weather.fetchWeather("Nairobi");