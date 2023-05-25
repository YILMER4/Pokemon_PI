const { createPokemon } = require("../controllers/pokemonsController");

const getPokemonsHandler= (req, res)=>{//query

    const {name}= req.query;

    if (name)res.status(200).send(`NIY: quiero buscar todos los pokemones llamados ${name}`);
    else res.status(200).send("NIY: Esta ruta trae la info de todos los pokemons");

    

    // llama datos de api externa 
    //llama funcion datos BD
    // unifica datos unificando formato
    //cuando tenga los datos responde con los datos
}

 const getPokemonHandler =(req,res)=>{//params
    const {id}=req.params;

    res.status(200).send(`NIY: Esta ruta trae la info de un pokemon determinado por id ${id}`);
 }


 const createPokemonHandler = async (req,res)=>{//body

    try {
        const {id, name, image, hp, atack, defense, speed, height, weight}= req.body
        const newPokemon= await createPokemon(id, name, image, hp, atack, defense, speed, height, weight);
        res.status(201).json(newPokemon);
    } catch (error) {
        res.status(400).json({error:error.messege});
    }
};

module.exports={
    getPokemonHandler,
    getPokemonsHandler,
    createPokemonHandler
}