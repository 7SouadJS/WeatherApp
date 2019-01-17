const request = require('request');

var getWeather = (lat, lng, callback) => {
request({
url: `https://api.darksky.net/forecast/8b3b11c81a7585da2f395740f12e5aad/${lat},${lng}`, //altGr+7
json: true
   }, (error, response, body) => {
	   if(error){
		   callback('Unable to connect to Forecast.io server.');
	            }
				else if(response.statusCode === 200)
				{ 
			     callback(undefined,{
				 temperature: body.currently.temperature,
                 apparentTemperature: body.currently.apparentTemperature				 
				 });
			    }
				else if(response.statusCode === 400)
				{
		            callback('Unable to fetch weather.');
		        }
	                             });
                       };

module.exports.getWeather = getWeather;				   
								 
								