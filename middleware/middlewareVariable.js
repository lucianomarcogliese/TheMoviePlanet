let moduloLogin = require("../modulo-login");

function variableMiddleware ( req,res,next) {

                                   
    res.locals = { 

           variableUsuario: req.session.usuarioLogueado,
     
    }

   

    next();
 
  }
   



module.exports = variableMiddleware;