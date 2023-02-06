const dboUsuarios= require("./dbUsuarios");

module.exports={
    //obtengo todos los usuarios
    getUsers:(request,response)=>{
        if(!request.params.id){
        dboUsuarios.getUsuarios().then(result => {
            response.json(result[0]);
        })}
        else{
            response.status(401).json("la url no requiere parametros")
        }
    },

    //obtengo usuarios por id 
    getUsersXId:(request,response)=>{
        if(!isNaN(request.params.id) && request.params.id!=0){
            dboUsuarios.getUsuariosXId(request.params.id).then(result => {
                if(result.length){
                    response.json(result);
                }
                else{
                    response.status(result).json('No se encuentre un usuario con ese id')
                }
        })}
        else{
            response.status(404).json('No se encuentra un usuario con ese id')
        }
    }
}