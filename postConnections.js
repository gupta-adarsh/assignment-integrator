var request = require('request')

var options = {
	url : "https://api.integrator.io/v1/connections/",
	headers : {
		"Content-Type" : "application/json",
		"Authorization" : "bearer " + process.env.authToken.toString()
	},
	method : "POST",
	json : true,
	
	body : {
		"type": "netsuite",
		"name": "Netsuite Connection new",
		"netsuite": {
			"account": "TSTDRV1304833",
			"roleId": "3",
			"email": "adarsh.gupta@celigo.com",
			"password": "xyz",
			"environment": "production"
		}
	}
}

function callback(error,response,body){
	if (!error && response.statusCode >= 200) {
//		var info = JSON.parse(body);
		var info = body
		
		console.log(info);
		console.log(info._id)
		console.log(info.name)
	}
	else{
		console.log(error)
		console.log(response.statusCode)
	}
}

request(options,callback)

