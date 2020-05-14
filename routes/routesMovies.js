var express = require('express');
var router = express.Router();





let peliculasController = require ("../controllers/peliculasController");


router.get("/", peliculasController.home );

router.get("/porGenero", peliculasController.pelisPorGenero );

router.get("/listadoDeGeneros", peliculasController.listadoDeGeneros );

router.get("/buscador", peliculasController.resultadoDeBusqueda);

router.get("/detalle", peliculasController.detalleDeUnaPeli );

router.get("/favoritos", peliculasController.peliPrefe );




module.exports = router;