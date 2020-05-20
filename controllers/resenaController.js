let db = require("../database/models/index")
const op = db.Sequelize.Op;
let bcrypt = require("bcryptjs");

let resenaController = {

    creacion: function(req,res){
    
        res.render("resena");
    
},

guardado: function(req, res) {
   
                 db.usuarios.findOne({
                    
                        where : [ 
                                  { email: {[op.like]: req.body.email }}
                            ],
                        })

                   .then((usuarios) => {
                
                    let resena = {
   
                        resenas: req.body.resenas,
                        rating: req.body.puntaje,
                         fecha_de_creacion: req.body.creacion,
                         fecha_de_actualizacion: req.body.actualizacion,
                           id_usuarios : usuarios.id, 
                           id_pelicula : req.query.idDePeli,
                           
                           }
                                
                                
                    db.resenas.create(resena)
                  return resena;
                })
                
                .then(() => {
                    res.redirect("/peliculas")
                } )

            
},


  





}


module.exports = resenaController;