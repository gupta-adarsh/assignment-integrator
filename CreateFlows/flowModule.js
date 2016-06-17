module.exports={

    callstack : {
        'import' : 'export',
        'export' : 'flow',
        'flow' : ''
    },

    arr : {
        'import' : "",
        'export' : "",
        'flow' : ""
    },

    calltype : "",

    getObject : function(type) {

        switch (type) {

            case "import":
            return this.getImport()

            case "export":
            return this.getExport()

            case "flow":
            return this.getFlow()

            default:
            return {}
        }

    },

    getImport : function () {
        return {
            _connectionId: "575674545e8df97d14ce3115",
            distributed: true
        }
    },

    getExport : function () {
        return {
            _connectionId: "575674545e8df97d14ce3115",
            asynchronous: true,
            netsuite: {
                type: "restlet",
                restlet: {
                    recordType: "customer",
                    searchId: "11934",
                }
            }
        }
    },

    getFlow : function () {
        return {
            name : "Test Flow",
            disabled : true,
            timezone: "Asia/Calcutta",
            _exportId: this.arr.export,
            _importId: this.arr.import,
            skipRetries: false
        }
    },

    getOptions : function (type){
        this.calltype = type
        var options = {
            url : "https://api.integrator.io/v1/" + type + "s",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : "bearer " + process.env.authToken.toString()
            },
            method : "POST",
            json : true,
            body : this.getObject(type)
        }
        return options
    }
}
