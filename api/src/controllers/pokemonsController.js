 const {Pokemon}= require("../db")
 const axios = require("axios");
 
//
const cleanArray= (arr)=>{
  const clean = arr.map(e =>{
    return{// solo los atributos que quiero que se muestren
      //atributo: e.atributo,
      // created: false
    }
  })
  return clean;
};


// los metodos del db y los modelos devuelven promesas por eso la funcion es asincrona

 const createPokemon =  async (id, name, image, hp, atack, defense, speed, height, weight)=>{// para interactuar con el modelo
   
 await Pokemon.create({id, name, image, hp, atack, defense, speed, height, weight});
  
 };

 const getPokemonById= async(id,source)=>{
  //establece lugar donde va buscar el registro
  const pokemon = 
  source==="api"
  ?  await (axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data //busca id en API
  :  await Pokemon.findByPk(id); //busca id en BD

  return pokemon;
};


const getAllPokemons = async()=>{
  //busca todos pokemon en BD
  const databasePokemons= await Pokemon.findAll()
  //busca todos pokemon en API
  const apiPokemons/*s */ = await (axios.get(`https://pokeapi.co/api/v2/pokemon`)).data
  // limpia datos a mostrar 
    //const apiPokemonss= cleanArray(apiPokemons);
  // unifica
  const results =[...databasePokemons,...apiPokemons];

  return results;
};

const searchPokemonByName = async (name)=>{
  //busca en BD pokemon que coincida 
  const databasePokemons= await Pokemon.findAll({where:{name:name}})
  //busca en API pokemon que coincida
  const apiPokemons/*s */ = await (axios.get(`https://pokeapi.co/api/v2/pokemon`)).data
  // limpia datos a mostrar de API
     
    //const apiPokemonss= cleanArray(apiPokemons);
  // filtra el nombre
  const filteredApi= apiPokemons.filer((poke )=>{
    return poke.name===name;
  })
  //unifica
  return [...databasePokemons,...filteredApi];
};

 module.exports={
    createPokemon,
    getPokemonById,
    getAllPokemons, 
    searchPokemonByName
 }