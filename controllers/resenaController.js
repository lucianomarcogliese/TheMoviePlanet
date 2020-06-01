let db = require("../database/models/index")
const op = db.Sequelize.Op;
let bcrypt = require("bcryptjs");


let moduloLogin = require("../modulo-login")
let resenaController = {

 
 prueba: function(req, res){
     res.render("misResenas")
 },

    validacion: function(req,res){
           
                if(req.session.usuarioLogueado != undefined){

               
                            db.usuarios.findOne(
                                {
                                    where : [ 
                                        { email: {[op.like]: req.session.usuarioLogueado.email }}
                                  ],
                                     })
                                .then (function(usuario){
                              console.log(usuario);
                              
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
                               
                                  
                      
                
                            } else {
                                
                                    res.send("neceistas estar logueado papa")
                            }
                
      
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

    pruebaLogin: function(req,res) {
        return res.render("pruebaLogin")
    },

    processLogin: function(req,res){
                
        let errores = [];
        moduloLogin.buscarPorEmail(req.body.pruebaEmail)

          .then(usuario =>{
              
           if (usuario == null ) {
              
             errores.push("ese email no existe")
               
           } else if(bcrypt.compareSync(req.body.pruebaContraseña, usuario.contraseña) == false) {
                       errores.push("esa contraseña no existe")
                       
                   }
                   
                   if (errores.length > 0) {
                       
                    res.render("pruebaLogin", {
                        errores:errores,
                        
                    })
                   }
                   else {
                      
                let usuarioALoguearse = usuario
           
                req.session.usuarioLogueado =  usuarioALoguearse;
                  
                if (req.body.recordame != undefined) {
                    res.cookie("recordame" , usuarioALoguearse.email , {maxAge:60000 })
                }
                console.log();
                
                  res.redirect("/peliculas")
                  
        }
      
        })







    }




    





}


module.exports = resenaController;