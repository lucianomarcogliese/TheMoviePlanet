let db = require("../database/models/index")

const op = db.Sequelize.Op;
let bcrypt = require("bcryptjs");



let detalleDePeliController = {  

    detalleDeUnaPeli: function(req,res){
              
        db.resenas.findAll({
               
            where : [ 
                { id_peliculas: {[op.like]: req.query.idDePeli }}
          ],
    
          include: [
            {association: "usuario"},
        ]  
          
        })
        .then(function(resenas){
            let idPelicula = req.query.idDePeli
            
            res.render( "detalleDeUnaPeli", { 
                resenas : resenas,
                idPelicula : idPelicula
            })
            console.log(resenas);
            
        })

       
       
   },

   creacion: function(req,res){
    
    res.render("detalleDeUnaPeli");


},

guardado: function(req, res) {

let errores = [];
 db.usuarios.findOne({
   
                 where : [ 
               
                       { email: {[op.like]: req.body.email }}
                ],
            })
                    .then((usuarios) => {

               if (usuarios == null){
                   errores.push("Ese email no existe")
                   res.render("detalleDeUnaPeli", {
                       errores:errores
                     
                   } )

                   console.log(errores.length);
                                         
               } else { 

   let resena = {
                 resenas: req.body.resenas,
                 rating: req.body.puntaje,
               fecha_de_creacion: req.body.creacion,
                fecha_de_actualizacion: req.body.creacion,
               id_usuarios : usuarios.id,    
               id_peliculas: req.query.idDePeli  
                     }
                                 
       db.resenas.create(resena)
       .then(( ) => {
           res.redirect("/peliculas/detalle/?idDePeli=" + req.query.idDePeli) 
       }
       
                        )    }  })  
           


},

resenasDetalle: function(req,res){
  
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
   
}




module.exports = detalleDePeliController;