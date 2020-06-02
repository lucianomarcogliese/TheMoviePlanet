let db = require("../database/models/index")

const op = db.Sequelize.Op;
let bcrypt = require("bcryptjs");
let moduloLogin = require("../modulo-login")

let homeController = {  

    home: function(req,res){
        res.render ("home")
    },

    registracion: function(req,res){
    
        res.render("registracion");
    
},

guardado: function(req, res) {

        let errores = [];
        moduloLogin.chequearUsuario(req.body.email)
        .then(email =>{
            if(email == false) {

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

            } else {

                errores.push("Ese email ya existe, prueba con otro")
                res.render("home" , {
                    errores:errores
                })

            }
            
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

mejoresPuntuadas : function(req,res){

 
    db.resenas.findAll(
        {
            where: [
                { rating: { [op.gte]: 8} }
            ], 
            order : [ 
                [ "rating", "DESC"]  
        ],
        }
    )

    .then(function(resenas) {
        
        res.render("mejoresPuntuadas", {
            resenas: resenas
        })
    })
    
 },
 peoresPuntuadas : function(req,res){

 
    db.resenas.findAll(
        {
            where: [
                { rating: { [op.lt]: 5} }
            ], 
            order : [ 
                [ "rating", "ASC"]  
        ],
        }
    )

    .then(function(resenas) {
        
        res.render("peoresPuntuadas", {
            resenas: resenas
        })
    })
    
 },

 recientes : function(req,res){

 
    db.resenas.findAll(
        {
            
            order : [ 
                [ "fecha_de_actualizacion", "DESC"]  
        ],
        }
    )

    .then(function(resenas) {
        
        res.render("recientes", {
            resenas: resenas
        })
    })
    
 }

 

 






}




module.exports = homeController;