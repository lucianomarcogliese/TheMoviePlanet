let db = require("../database/models/index")
const op = db.Sequelize.Op;
let bcrypt = require("bcryptjs");


let moduloLogin = require("../modulo-login")
let resenaController = {

  login: function(req,res){
    res.render("login")
    },

    validacion: function(req,res){
           
            let errores = [];
                moduloLogin.buscarPorEmail(req.body.email)

                  .then(usuario =>{
                   
                   
                   
                   if (usuario == null ) {
                      
                     errores.push("ese email no existe")
                       
                   } else if(bcrypt.compareSync(req.body.contraseña, usuario.contraseña) == false) {
                               errores.push("esa contraseña no existe")
                               
                           }
                           console.log(1);
                           
                           if (errores.length > 0) {
                               console.log(errores);
                               
                            res.render("login", {
                                errores:errores,
                                
                            })
                           }
                           else {
                            db.usuarios.findOne(
                                {
                                    where : [ 
                                        { email: {[op.like]: req.body.email }}
                                  ],
                                     })
                                .then (function(usuario){
                              
                                  return  db.resenas.findAll({
                                         where: [
                                             { id_usuarios: {[op.like]: usuario.id} }
                                         ]
                                     })
                                    
                                })
                                .then(function(resultado){
                                  
                                    
                                  return  res.render("misResenas", {
                                        resultado: resultado
                                    })    
                                })     
                               
                                  
                      
                }
              
                })
      
    },  

    borrar: function (req,res){
        db.resenas.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect("/peliculas")
        })
    },

    editar: function(req, res){
        

          db.resenas.findByPk(req.params.id)
            .then((resultado) => {
                console.log(resultado);
                
                res.render("editar", {
                    resultado: resultado,
                  
                })
            })
        
    },

    actualizar: function(req, res){
  
  
        let resenas = {
            resenas: req.body.resenas,
            rating: req.body.rating,
            fecha_de_actualizacion: req.body.fecha_de_actualizacion,
           
        }

        db.resenas.update(resenas, {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect("/peliculas")
        })
    },





    





}


module.exports = resenaController;