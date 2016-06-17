var request = require('request')
var flowModule = require('./flowModule')

function callback(error,response,body){
    if (!error && response.statusCode >= 200) {
        console.log("printing " + flowModule.calltype)
        console.log(body)
        flowModule.arr[flowModule.calltype] = body._id
        if(flowModule.callstack[flowModule.calltype])
        {
            console.log("calling " + flowModule.calltype)
            request(flowModule.getOptions(flowModule.callstack[flowModule.calltype]),callback)
        }
    }
    else{
        console.log(response.statusCode)
        console.log(error)
    }
}

request(flowModule.getOptions("import"),callback)
