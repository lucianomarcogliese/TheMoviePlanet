let db = require("../database/models/index")

let bcrypt = require("bcryptjs");



let usuariosController = {  

registracion: function(req,res){
    
            res.render("registracion");
        
},

guardado: function(req, res) {
    let usuario = {
        nombre: req.body.nombre,
        email: req.body.email,
        contraseña: bcrypt.hashSync(req.body.contraseña, 10),
        fecha_de_nacimiento: req.body.nacimiento
    }

    db.usuarios.create(usuario)
    .then(() => {
        res.redirect("/peliculas")
    })
},




   
}



module.exports = usuariosController;