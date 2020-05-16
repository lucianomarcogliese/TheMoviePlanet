module.exports= (sequelize , DataTypes) => {
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_pelicula: {
            type: DataTypes.INTEGER,
            foreignKey: true
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
            allowNull: false,

        },
        fecha_de_actualizacion: {
            type: DataTypes.DATE,
            allowNull: false,

        },
        rating: {
            type: DataTypes.DOUBLE,
            allowNull: false,

        }
    };
    let config = {
        tableName: "resenas",
        timestamps: false
        }
        
    const resenas = sequelize.define ( "resenas", cols , config);
    return resenas;
}