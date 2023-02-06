const express=require("express")
const { getUsers, getUsersXId} = require("./userController")
const router = express.Router()

router.get("/usuarios",getUsers)

//obtengo usuarios por id 
router.get("/usuario/:id",getUsersXId)
router.get("/usuario/",getUsersXId)

module.exports = router;