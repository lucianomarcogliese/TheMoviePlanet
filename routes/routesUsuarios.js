var express = require('express');
var router = express.Router();




let resenaController = require ("../controllers/resenaController");


router.get("/misResenas", resenaController.login );

router.post("/misResenas", resenaController.listadoDeResenas );

router.post("/misResenas/:id", resenaController.listadoDeResenas );








module.exports = router;