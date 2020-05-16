let db = require("../database/models/index")
const op = db.Sequelize.Op;


let peliculasController = {  

    home: function(req,res){
        res.render ("home")
    },

    listadoDeGeneros: function(req,res){
        res.render ("listadoDeGeneros")
    },
    pelisPorGenero: function(req,res){
        res.render ("pelisPorGenero")
    },
    resultadoDeBusqueda: function(req,res){
        res.render ("resultadoDeBusqueda")
    },
    detalleDeUnaPeli: function(req,res){
        res.render ("detalleDeUnaPeli")
    },

    peliPrefe: function(req,res){
        res.render ("peliculasFavoritas")
    },
    search: function(req,res){
        res.render ("usuariosResultados")
    },
    
   
}




module.exports = peliculasController;