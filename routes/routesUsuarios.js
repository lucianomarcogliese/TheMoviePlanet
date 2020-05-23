var express = require('express');
var router = express.Router();



let usuariosController = require ("../controllers/usuariosControllers");


router.get("/", usuariosController.registracion );
router.post("/", usuariosController.guardado );
router.get("/detalle/:id", usuariosController.detalle );

  router.get("/misResenas", usuariosController.login ); 
 router.post("/misResenas", usuariosController.validacion );  
 






module.exports = router;