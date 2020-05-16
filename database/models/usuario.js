module.exports= (sequelize , DataTypes) => {
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        contraseña:{
           type: DataTypes.INTEGER

        }, 
        email: {
            type: DataTypes.INTEGER,
        },
        fecha_de_nacimiento: {
            type: DataTypes.INTEGER,
            allowNull: false,

        }
    };
    let config = {
        tableName: "usuarios",
        timestamps: false
        }
        
    const usuarios = sequelize.define ( "usuarios", cols , config);
    return usuarios;
}