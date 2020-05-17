var express = require('express');
var router = express.Router();



let usuariosController = require ("../controllers/usuariosControllers");


router.get("/", usuariosController.registracion );
router.post("/", usuariosController.guardado );

router.get("/detalle/:id", usuariosController.detalle );




module.exports = router;