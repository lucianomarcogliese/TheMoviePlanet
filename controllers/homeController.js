let db = require("../database/models/index")

const op = db.Sequelize.Op;
let bcrypt = require("bcryptjs");


let homeController = {  

    home: function(req,res){
        res.render ("home")
    },

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

search: function (req,res){
db.usuarios.findAll(
    {
        where : [ 
           
            { email: {[op.like]: req.query.search + "%"   }}
        ],
       
    }
)
.then ( function(usuarios){
    console.log(usuarios);
    
    res.render( "usuariosResultados", {
        usuarios: usuarios
    })
    
})
},


   
}




module.exports = homeController;