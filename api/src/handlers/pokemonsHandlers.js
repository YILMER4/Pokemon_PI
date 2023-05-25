const { createPokemon, getPokemonById, getAllPokemons, searchPokemonByName } = require("../controllers/pokemonsController");


const getPokemonsHandler= async(req, res)=>{//query
    const {name}= req.query;

    const results= name ? searchPokemonByName : await getAllPokemons ;

    res.status(200).json(results);
    //else res.status(200).send("NIY: Esta ruta trae la info de todos los pokemons");

    

    // llama datos de api externa
    //llama funcion datos BD
    // unifica datos unificando formato
    //cuando tenga los datos responde con los datos
}


 const getPokemonHandler =async(req,res)=>{//params
    const {id}=req.params;
    //establece lugar donde va buscar el registro
    const source = isNaN(id)? "bdd":"api";
    // if (isNaN(id)){//busca id en BD
    // }else{//busca id en API
    // }
    try {
       const pokemon= await getPokemonById(id, source);// controller del modelo
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).json({error:error.message });
    } 
 };


 const createPokemonHandler = async (req,res)=>{//body
    const {id, name, image, hp, atack, defense, speed, height, weight}= req.body

    try {
        const newPokemon= await createPokemon(id, name, image, hp, atack, defense, speed, height, weight);
        res.status(201).json(newPokemon);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};
//handlers de la ruta no interactua con el modelo 
module.exports={
    getPokemonHandler,
    getPokemonsHandler,
    createPokemonHandler
}