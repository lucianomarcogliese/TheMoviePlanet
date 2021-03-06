module.exports= (sequelize , DataTypes) => {
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_peliculas: {
            type: DataTypes.INTEGER,
           
        }, 
        id_usuarios:{
           type: DataTypes.INTEGER,
           foreignKey: true

        },  
        resenas: {
            type: DataTypes.STRING,
        },
        fecha_de_creacion: {
            type: DataTypes.DATE,
            

        },
        fecha_de_actualizacion: {
            type: DataTypes.DATE,
           

        },
        rating: {
            type: DataTypes.DOUBLE,
           

        }
    };
    let config = {
        tableName: "resenas",
        timestamps: false
        }
        
    const resenas = sequelize.define ( "resenas", cols , config);

    resenas.associate= function(modelos){
        resenas.belongsTo(modelos.usuarios, {
            as: "usuario",
            foreignKey: "id_usuarios"
        })
    }  
    

    return resenas;
}