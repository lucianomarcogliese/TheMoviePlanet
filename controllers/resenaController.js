let db = require("../database/models/index")
const op = db.Sequelize.Op;
let bcrypt = require("bcryptjs");


let moduloLogin = require("../modulo-login")
let resenaController = {

  nada: function(req,res){
      res.render("resultadoDeResenas")
  },

  login: function(req,res){
    res.render("misResenas")
},
    validacion: function(req,res){
           
                moduloLogin.buscarPorEmail(req.body.email)

                .then(usuario =>{
                   
                   if (usuario == null ) {
                      
                     res.send("ese email no existe")
                       
                       
                   } else{
                    bcrypt.compareSync(req.body.contraseña, usuario.contraseña)
                           if(  bcrypt.compareSync(req.body.contraseña, usuario.contraseña) == false) {
                               res.send("esa contraseña no existe")
                           } else {
                               res.send("iniciate sesion")
                           }
                    
                         
                    console.log(req.body.contraseña);
                        console.log(usuario.contraseña);
                        
                        
                }

                    
                    
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