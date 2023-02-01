const dboUsuarios= require("./dbUsuarios");

module.exports={
    //obtengo todos los usuarios
    getUsers:(request,response)=>{
        dboUsuarios.getUsuarios().then(result => {
            response.json(result[0]);
        })
    },

    //obtengo usuarios por id 
    getUsersXId:(request,response)=>{
        if(!isNaN(request.params.id) && request.params.id!=0){
            dboUsuarios.getUsuariosXId(request.params.id).then(result => {

                response.json(result[0]);
        })}
        else{
            res.status(404).json('No se encuentra un usuario con ese id')
        }
    }
}