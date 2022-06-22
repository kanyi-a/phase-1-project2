//API KEY
let weather = {
   "apiKey": "bc3117fec7aed263f6814ea628daff8d",
   fetchWeather:function () {
       fetch("https://api.openweathermap.org/data/2.5/weather?q=Nairobi,kenya&units=metrics&APPID=bc3117fec7aed263f6814ea628daff8d")
       .then((response) =>response.json())
       .then((data) => console.log(data));
   }
}