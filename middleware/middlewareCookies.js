let moduloLogin = require("../modulo-login");

function recordameMiddleware ( req,res,next) {
  
    if (req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined) { 
    

                moduloLogin.buscarPorEmail(req.cookies.recordame)
                .then(usuario => {
                    
                      let usuarioALoguearse = usuario
                    
                  req.session.usuarioLogueado = usuarioALoguearse
  
                 
                })       
                  }
                 
                  next();
         
}


module.exports = recordameMiddleware;