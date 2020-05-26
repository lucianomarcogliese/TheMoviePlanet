var express = require('express');
var router = express.Router();





let peliculasController = require ("../controllers/peliculasController");
let resenaController = require ("../controllers/resenaController");


let homeController = require ("../controllers/homeController");
let detalleDePeliController = require ("../controllers/detalleDePeliController");



router.get("/", homeController.home );

router.get("/", homeController.registracion );

router.post("/", homeController.guardado );

router.get("/search", homeController.search );

router.post("/", homeController.home);


router.get("/porGenero", peliculasController.pelisPorGenero );

router.get("/listadoDeGeneros", peliculasController.listadoDeGeneros );

router.get("/buscador", peliculasController.resultadoDeBusqueda);

router.get("/favoritos", peliculasController.peliPrefe );



router.get("/detalle", detalleDePeliController.detalleDeUnaPeli );

router.get("/detalle", detalleDePeliController.creacion);

router.post("/detalle", detalleDePeliController.guardado);

router.get("/detalle", detalleDePeliController.resenasDetalle );

router.get("/usuario/:id", detalleDePeliController.detalle );









module.exports = router;