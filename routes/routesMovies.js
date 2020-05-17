var express = require('express');
var router = express.Router();





let peliculasController = require ("../controllers/peliculasController");
let resenaController = require ("../controllers/resenaController");

let usuariosController = require ("../controllers/usuariosControllers");
let resultadoUsuariosController = require ("../controllers/resultadoUsuariosController");



router.get("/", peliculasController.home );
router.get("/", usuariosController.registracion );
router.post("/", usuariosController.guardado );

router.get("/search", resultadoUsuariosController.search);

router.post("/", peliculasController.home);

router.get("/porGenero", peliculasController.pelisPorGenero );

router.get("/listadoDeGeneros", peliculasController.listadoDeGeneros );

router.get("/buscador", peliculasController.resultadoDeBusqueda);

router.get("/detalle", peliculasController.detalleDeUnaPeli );

router.get("/favoritos", peliculasController.peliPrefe );

router.get("/detalle", resenaController.creacion);
// Segundo, ya envié el formulario (Por post), ahora hay que procesar
router.post("/detalle", resenaController.guardado);


router.get("/detalle", resenaController.listado);





module.exports = router;