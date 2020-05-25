let db = require("../database/models/index")
const op = db.Sequelize.Op;
let bcrypt = require("bcryptjs");
let moduloLogin = require("../modulo-login")
let resenaController = {

      creacion: function(req,res){
    
                     res.render("resena");
    
    /* validar pelicula    */

    function validarPelicula(pelicula){
      let errores= [];
      if (pelicula.title == "") {
        errores.push("Por favor escribir el titulo completo!")
      } else if (pelicula.title.lenght < 3) {
        errores.push ("Escribir como minimo 3 caracteres!")
      }
      if (isNaN (pelicula.lenght)){
        errores.push ("La duracion debe ser un numero!")
      }
    }
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
                                 fecha_de_actualizacion: req.body.creacion,
                                id_usuarios : usuarios.id,    
                                id_peliculas: req.query.idDePeli  
                           
                   }


                   /* 2da parte de validacion de pelicula */
                   let errores = validarPelicula(pelicula)

                   if (errores.length > 0) {
                     //si hubieron errores => mostrar pagina con el formulario y los errores
                     db.Genero.findAll()
                     .then(generos) {
                       res.render("". {           //no se que view poner ahi, 
                         peliculas:pelicula,
                         errores: errores
                       })
                     }
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