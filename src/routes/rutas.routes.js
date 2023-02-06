const express=require("express")
const { getUsers, getUsersXId} = require("../controllers/userController")
const router = express.Router()

//obtengo todos los usuarios
router.get("/usuarios",getUsers)
router.get("/usuarios/",getUsers)
router.get("/usuarios/:id",getUsers)

//obtengo usuarios por id 
router.get("/usuario/:id",getUsersXId)
router.get("/usuario/",getUsersXId)


module.exports = router;