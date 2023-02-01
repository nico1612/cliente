const {Router}=require("express")
const { getUsers, getUserXId } = require("./userController")
const router = Router()

router.get("/usuarios",getUsers)

//obtengo usuarios por id 
router.get("/usuario/:id",getUserXId)

module.exports =router;