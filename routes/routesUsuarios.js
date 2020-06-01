var express = require('express');
var router = express.Router();

let resenaController = require ("../controllers/resenaController");




router.get("/misResenas" ,resenaController.validacion );
 

router.post("/delete/:id" ,resenaController.borrar );

router.get("/editar/:id" ,resenaController.editar);

router.post("/editar/:id", resenaController.actualizar);

router.get("/pruebaLogin", resenaController.pruebaLogin );

router.post("/pruebaLogin", resenaController.processLogin );


router.get("/check", function(req,res){
    if(req.session.usuarioLogueado == undefined){
        res.send("no estas logueado")
    } else {
        res.send("El usuario logueado es:" + req.session.usuarioLogueado.email)
    }
} );








module.exports = router;