let db = require("../database/models/index")
const op = db.Sequelize.Op;


let resultadoUsuariosControllers = {







    search : function(req,res){
        let loBuscado = req.query.search;
        let usuarios = [
            {
            id : 1,
            nombre: "Mati",
            },
            {
                id: 2,
                nombre : "Juani"
            },
            {
                id: 3,
                nombre: "Lucho"
            },
        
            
        ];
        let usuariosResult = [];
        for (let i = 0; i < usuarios.length; i++) {
            if(usuarios[i].nombre.includes(loBuscado)){
                usuariosResult.push(usuarios[i]);
            } 
            
        } res.render("usuariosResult",{"usuariosResult": usuariosResult});
    },
    
}
    
    module.exports = resultadoUsuariosControllers;