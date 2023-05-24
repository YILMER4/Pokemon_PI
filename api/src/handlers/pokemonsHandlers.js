
const getPokemonsHandler= (req, res)=>{

    res.status(200).send("NIY: Esta ruta trae la info de todos los pokemons");

    // llama datos de api externa 
    //llama funcion datos BD
    // unifica datos unificando formato
    //cuando tenga los datos responde con los datos
}

 const getPokemonHandler =(req,res)=>{
    res.status(200).send("NIY: Esta ruta trae la info de un pokemon determinado por id");
 }


 const createPokemonHandler = (req,res)=>{
    res.status(200).send("NIY: Esta ruta crea un nuevo pokemon");
};

module.exports={
    getPokemonHandler,
    getPokemonsHandler,
    createPokemonHandler
}