const config =require("./config");
const configuracion={
    user:config.dbUser,
    password:config.dbPassword,
    server:config.dbServer,
    database:config.dbDatabase,
    connectionTimeOut:300000,
        requestTime: 300000,
        pool:{
            max: 300,
            min: 0,
            idleTimeoutMillis:30000,
        } ,
    options:{
        trustedconnection:false,
        enableArithAbort:true,
        encrypt:false,
    }
}

module.exports = config;