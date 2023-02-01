var config = require("../dbconfig.js");
const sql = require('mssql');

async function getUsuarios(){
    try{
        console.log("hola")
        let pool = await sql.connect(config);
        let usuarios = await pool.request().query("select * from usuarios"+
        " join ((empleo join empresa on empleo.id_empresa=empresa.id)"+
        "join descripcion on"+
        " empleo.id_descripcion_Empleo=descripcion.id_descripcion)"+
        "on usuarios.id=empleo.id_usuario");
        return usuarios.recordsets;
    }
    catch(error){
        console.log(error)
    }
}

async function getUsuariosXId(id){
    try{
        let pool= await sql.connect(config);
        let usuarios = await pool.request()
            .input('input_parameter', sql.Int, id)
            .query("select"
            +"usuarios.nombre, usuarios.apellido, string_agg(empresa.nombre),"
            +"string_agg(descripcion.descripcion), strign_agg(descripcion_años_trabajados)"
            +"from (usuarios join"
            +"((empleo join empresa on empleo.id_empresa=empresa.id)"
            +"join descripcion on empleo.id_descripcion_Empleo=descripcion.id_descripcion) "
            +"on usuarios.id=tm_empleo.id_usuario)"+
            "where usuarios.id = @input_parameter group by usuarios.nombre,usuarios.apellido");
        return usuarios.recordsets;
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    getUsuarios,
    getUsuariosXId
}