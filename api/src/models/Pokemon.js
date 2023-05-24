const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    hp: {
      type: DataTypes.INTEGER
    },
    atack: {
      type: DataTypes.INTEGER
    },
    defense: {
      type: DataTypes.INTEGER
    },
    speed: {
      type: DataTypes.INTEGER
   
    },
    height: {
      type: DataTypes.INTEGER
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps:false
  });
};


// MODELO 1 | Pokemons**

// -  ID. \*
// -  Nombre. \*
// -  Imagen. \*
// -  Vida. \*
// -  Ataque. \*
// -  Defensa. \*
// -  Velocidad.
// -  Altura.
// -  Peso.


//GET   PEDIR INFORMACION
//POST CREAR INFORMACION 
//PUT  MODIFICAR INFORMACION
// DELETE  ELIMINAR INFORMACION