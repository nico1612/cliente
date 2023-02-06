var config = require("../dbconfig.js");
const sql = require('mssql');

async function getUsuarios(){
    try{
        console.log("hola")
        let pool = await sql.connect(config);
        let usuarios = await pool.request().query("select usuarios.nombre,"+
        "usuarios.apellido, usuarios.edad, empresa.nombre_empresa,"+
        "descripcion.desripcion,"+
        "descripcion.años_trabajados"+
        " from usuarios"+
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
            .query("SELECT usuarios.nombre,"+
            "usuarios.apellido,usuarios.edad,"+
            "string_agg(empresa.nombre_empresa,','),"+
            "string_agg(descripcion.desripcion, ','),"+
            "string_agg(descripcion.años_trabajados , ',')"+
            "FROM (usuarios join"+
            "((empleo join empresa ON empleo.id_empresa=empresa.id)"+
            "JOIN descripcion ON empleo.id_descripcion_Empleo=descripcion.id_descripcion)"+
            "ON usuarios.id=empleo.id_usuario)"+
            "WHERE usuarios.id = @input_parameter group by usuarios.nombre,usuarios.apellido,usuarios.edad");
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