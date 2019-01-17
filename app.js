const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
  .options({
	  a: {
		  demand: true,
		  alias: 'address',
		  describe: 'Address to fetch weather for',
		  string: true
	     }
          })
   .help()
   .alias('help', 'h')
   .argv; 
   
 geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if (errorMessage){
		console.log(errorMessage);
	                 }
   else {
	console.log(results.Address);
	weather.getWeather(results.Latitude, results.Longitude,(errorMessage, weatherResults) => {
		      if(errorMessage)
				{
	console.log(errorMessage);
				} else{
	console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
					  }
				});
	    }
                     });   
 

  
  
  
  
  
  
   // API KEY : 8b3b11c81a7585da2f395740f12e5aad
   // url : https://api.darksky.net/forecast/8b3b11c81a7585da2f395740f12e5aad/33.589886,-7.603869
  

 
								 
