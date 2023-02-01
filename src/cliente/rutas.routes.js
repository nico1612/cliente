const express=require("express")
const router=express.Router()
const { getUsers, getUserXId } = require("./userController")

router.route("/usuarios",getUsers)

//obtengo usuarios por id 
router.route("/usuario/:id",getUserXId)

module.exports =router;