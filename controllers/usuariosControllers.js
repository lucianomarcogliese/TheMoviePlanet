let db = require("../database/models/index")
const op = db.Sequelize.Op;
let bcrypt = require("bcryptjs");

let moduloLogin = require("../modulo-login")

let usuariosController = {  

registracion: function(req,res){
    
            res.render("registracion");
        
},

guardado: function(req, res) {
    let usuario = {
        nombre: req.body.nombre,
        email: req.body.email,
        contraseña: bcrypt.hashSync(req.body.contraseña, 10), 
       contraseña: req.body.contraseña,
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

detalle: function (req,res){
    db.usuarios.findByPk(req.params.id, {
        include: [
            {association: "resena"},
        ]
    })
    .then(function(unUsuario){
        res.render("detalleUsuario", {
            unUsuario : unUsuario
        })
    })
},

   login: function(req,res){
      res.render("misResenas")
  },
  
  validacion: function(req,res){

        moduloLogin.validar(req.body.email, req.body.contraseña)
        .then( resultado => {
         console.log(resultado);
         
                   res.send(resultado)
            })
  }, 
 

    

   
}



module.exports = usuariosController;