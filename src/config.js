const dotenv =require ("dotenv")
dotenv.config()

module.exports= {
    port :process.env.PORT||8000,
    dbUser:process.env.DBUSER||"",
    dbPassword:process.env.DBPASSWORD||"",
    dbserver:process.env.DBSERVER||"",
    dbDatabase:process.env.DBDATABASE||"",
}