var config = require('./dbconfig.js');//Instanciamos el archivo dbconfig
const sql = require('mssql');

async function getUsuarios(){
    try{
        let pool = await sql.connect(config);
        let usuarios = await pool.request().query("select * from usuarios");
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
            .query("select usuarios.nombre, usuarios.apellido, tm_trabajos.empresa, tm_trabajos.años_trabajados, tm_trabajos.funcion_Realizada from usuarios join tm_trabajos on usuarios.id=tm_trabajos.id_usuario where usuarios.id = @input_parameter");
        return usuarios.recordsets;
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    getUsuarios : getUsuarios,
    getUsuariosXId: getUsuariosXId
}