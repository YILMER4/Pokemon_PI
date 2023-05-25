 const {Pokemon}= require("../db")
 
// los metodos del db y los modelos devuelven promesas por eso la funcion es asincrona

 const createPokemon =  async (id, name, image, hp, atack, defense, speed, height, weight)=>{// para interactuar con el modelo
   await Pokemon.create({id, name, image, hp, atack, defense, speed, height, weight});

   
 };

 module.exports={
    createPokemon
 }