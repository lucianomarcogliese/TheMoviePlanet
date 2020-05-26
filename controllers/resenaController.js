let db = require("../database/models/index")
const op = db.Sequelize.Op;
let bcrypt = require("bcryptjs");

let resenaController = {

  


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
            
            res.render("misResenas", {
                resenas: resenas
            })
            
        })
        
 },




  





}


module.exports = resenaController;