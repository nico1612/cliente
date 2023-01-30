const config={
    user:"ngonzalez",
    password:"abc123",
    server:"10.20.20.50",
    database:"PruebaSQL",
    "connectionTimeOut":300000,
        "requestTime": 300000,
        "pool":{
            "max": 300,
            "min": 0,
            "idleTimeoutMillis":30000,
        } ,
    options:{
        trustedconnection:false,
        enableArithAbort:true,
        encrypt:false,
    }
}
module.exports = config;