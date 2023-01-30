const dboUsuarios = require('./dbUsuarios');
var express = require("express");
var bodyParser = require('body-parser');
var cors = require("cors");
const { application } = require("express");
var app = express();
var router = express.Router();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

//obtengo todos los usuarios
router.route('/usuario').get((request,response)=>{
    dboUsuarios.getUsuarios().then(result => {
       response.json(result[0]);
    })
})


//obtengo usuarios por id 
router.route('/usuario/:id').get((request,response)=>{
    dboUsuarios.getUsuariosXId(request.params.id).then(result => {
        //console.log(result);
        response.json(result[0]);
    })
})



var port = process.env.PORT || 8000;
app.listen(port); //Puerto de escucha 
console.log('usuarios iniciando en el puero:'+port) 