var express = require('express');
var router = express.Router();



let usuariosController = require ("../controllers/usuariosControllers");


router.get("/", usuariosController.registracion );
router.post("/", usuariosController.guardado );









module.exports = router;