var express=require("express");
var rutas=require("./src/routes/rutas.routes.js")
var config=require("./src/config")
const app = express();

app.use(rutas)

var port = config.port || 8000;
app.listen(port); //Puerto de escucha 
console.log("usuarios iniciando en el puero:"+port) 