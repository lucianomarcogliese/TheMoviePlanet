var express = require('express');
var router = express.Router();




let resenaController = require ("../controllers/resenaController");


router.get("/login", resenaController.login );


router.post("/misResenas", resenaController.validacion );
 

router.post("/delete/:id", resenaController.borrar );

router.get("/editar/:id", resenaController.editar);

router.post("/editar/:id", resenaController.actualizar);










module.exports = router;