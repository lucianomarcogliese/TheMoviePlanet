var express = require('express');
var router = express.Router();



let usuariosController = require ("../controllers/usuariosControllers");
let resenaController = require ("../controllers/resenaController");

router.get("/", usuariosController.registracion );
router.post("/", usuariosController.guardado );
router.get("/detalle/:id", usuariosController.detalle );

router.get("/misResenas", resenaController.login );

router.post("/misResenas", resenaController.listadoDeResenas );

router.post("/misResenas/:id", resenaController.listadoDeResenas );








module.exports = router;