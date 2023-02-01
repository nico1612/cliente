var express=require("express");
var rutas=require("./src/cliente/rutas.routes")
var config=require("./src/config")
const app = express();

app.use(rutas)

var port =8000;
app.listen(port); //Puerto de escucha 
console.log("usuarios iniciando en el puero:"+port) 