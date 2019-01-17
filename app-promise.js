const yargs = require('yargs');
const axios = require('axios');
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
   
   var encodedAddress = encodeURIComponent(argv.address);
   var geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=nTegt5NEaChWl33OAhGjAKofxd1rJLBp&location=${encodedAddress}`;
   
   axios.get(geocodeUrl).then((response) =>{
	 if(response.data.status === 'ZERO_RESULTS'){
		 throw new Error('Unable to find that address.');
	 }
	 
	 var lat = response.data.results[0].locations[0].latLng.lat;
	 var lng = response.data.results[0].locations[0].latLng.lng;
	 var weatherUrl =`https://api.darksky.net/forecast/8b3b11c81a7585da2f395740f12e5aad/${lat},${lng}`;
	 console.log(response.data.results[0].providedLocation.location);
	 return axios.get(weatherUrl);
   }).then((response) => {
	   var temperature = response.data.currently.temperature;
	   var apparentTemperature = response.data.currently.apparentTemperature;
	   console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
	   
   }).catch((e) => {
	   if (e.code === 'ENOTFOUND'){
		   console.log('Unable to connect to API servers.');
	   } else {
		   console.log(e.message);
	   }
   });