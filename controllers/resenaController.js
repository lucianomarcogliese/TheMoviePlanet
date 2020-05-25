let db = require("../database/models/index")
const op = db.Sequelize.Op;
let bcrypt = require("bcryptjs");

let resenaController = {

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
                                } 

                    let resena = {
                                  resenas: req.body.resenas,
                                  rating: req.body.puntaje,
                                fecha_de_creacion: req.body.creacion,
                                 fecha_de_actualizacion: req.body.creacion,
                                id_usuarios : usuarios.id,    
                                id_peliculas: req.query.idDePeli  
                                      }
                                
                                
                        db.resenas.create(resena)
                        
                              })  
                
                .then(() => {
                    res.redirect("/peliculas") 
                        
                    
                } )

            
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
    listadoDeResenas: function(req,res){
    db.usuarios.findOne(
        {
            where : [ 
                { email: {[op.like]: req.body.email }}
          ],
         
        })
        .then ( function(usuario){
            db.resenas.findAll({

                where:  [ 
                    { id_usuarios: {[op.like]: usuario.id}}
              ],
            })
        })
        .then ( function(resenas){
            console.log(resenas);
            
            res.render( "misResenas", {
                resenas: resenas
            })
            
        })
        
 },




  





}


module.exports = resenaController;