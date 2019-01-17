const request = require('request');
	  
var geocodeAddress = (address, callback) => {
	var encodedAddress = encodeURIComponent(address); //address pass as an argument
	
	request({
	url: `http://www.mapquestapi.com/geocoding/v1/address?key=nTegt5NEaChWl33OAhGjAKofxd1rJLBp&location=${encodedAddress}`,
	json: true 
	    }, (error, response, body) => {
		if(error)
		{
			callback('Unable to connect to google servers');
		}
		else if(body.results[0].locations[0].geocodeQualityCode === 'A1XAX')
		{
			callback('Unable to find that address');
		}
	    
		else if(body.results[0].locations[0].geocodeQualityCode != 'A1XAX')
		{
			callback(undefined,{
				Address: body.results[0].providedLocation.location,
				Street: body.results[0].locations[0].street,
				Latitude: body.results[0].locations[0].latLng.lat,
				Longitude: body.results[0].locations[0].latLng.lng
		                        });
		}
		                             });
		};
                                
module.exports.geocodeAddress = geocodeAddress;//variable = functions						
							