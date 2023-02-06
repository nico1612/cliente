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