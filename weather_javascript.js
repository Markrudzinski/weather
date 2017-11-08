var celcius = 0;
var fahrenheit = 0;
$(document).ready(function(){
  var location = "https://fcc-weather-api.glitch.me/api/current?";
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      location += "lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;
      $.ajax( {
        dataType: "json",
        url: location,
        success: function(data) {
          celcius = Math.round(data.main.temp * 10) / 10;
          $("#city").html(data.name + ", " + data.sys.country);
          $("#temp").html(celcius + " &deg ");
          $("#description").html(data.weather[0].main);
          $("#weather_img").attr("src", data.weather[0].icon);
          $("#temp").append('<button class="buttonTemp" onclick="toFahrenheit(this)" >C</button>');
        }
      });
    });
  }
});
function toFahrenheit() {
  fahrenheit = Math.round((celcius * 1.8 + 32) * 10) / 10;
  $("#temp").html(fahrenheit + " &deg ");
  $("#temp").append('<button class="buttonTemp" onclick="toCelcius(this)" >F</button>');
}
function toCelcius() {
  celcius = Math.round(((fahrenheit - 32) / 1.8) * 10) / 10;
  $("#temp").html(celcius + " &deg ");
  $("#temp").append('<button class="buttonTemp" onclick="toFahrenheit(this)" >C</button>');
}

//  This is a sample data structure from https://fcc-weather-api.glitch.me/api/current?
// { "coord" :{"lon":-122.26,"lat":37.85},
//   "weather":[{
//     "id":800,
//     "main":"Clear",
//     "description":"clear sky",
//     "icon":"https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F01n.png?1499366020783"
//     }],
//   "base":"stations",
//   "main":{"temp":11.72,"pressure":1021,"humidity":70,"temp_min":9,"temp_max":13},
//   "visibility":16093,
//   "wind":{"speed":1.61,"deg":289},
//   "clouds":{"all":1},
//   "dt":1510025700,
//   "sys":{"type":1,"id":438,"message":0.1684,"country":"US","sunrise":1510065684,"sunset":1510103016},
//   "id":5327684,
//   "name":"Berkeley",
//   "cod":200
// }