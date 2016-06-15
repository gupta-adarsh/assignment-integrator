var request = require('request')

var options = {
	url : 'https://api.integrator.io/v1/connections/',
	headers : {
		"Content-Type" : "application/json",
		"Authorization" : "bearer " + process.env.authToken.toString()
	}
}

function callback(error,response,body){
	if (!error && response.statusCode == 200) {
		var info = JSON.parse(body);
		console.log(info);
		
		for(var i =0;i < info.length;i++)
		{
			console.log(info[i]._id)
			console.log(info[i].name)
		}
	}
	else{
		console.log(error)
	}
}

request.get(options,callback)

