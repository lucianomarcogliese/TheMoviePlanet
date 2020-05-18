let db = require("../database/models/index")

let bcrypt = require("bcryptjs");

let resenaController = {

    creacion: function(req,res){
    
        res.render("resena");
    
},

guardado: function(req, res) {
let resena = {
   
   resenas: req.body.resenas,
   rating: req.body.puntaje,
    fecha_de_creacion: req.body.creacion,
    fecha_de_actualizacion: req.body.actualizacion,
    
}

db.resenas.create(resena)
.then(() => {
    res.redirect("/peliculas")
})
},


  /*   listado: function(req,res){
        db.resenas.findAll()
        .then(function(resenas){
            res.render( "detalleDeUnaPeli", { resenas : resenas})
        })
    
} */








}


module.exports = resenaController;