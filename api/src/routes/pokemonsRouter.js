const {Router} = require('express');
const {getPokemonHandler, getPokemonsHandler, createPokemonHandler}= require("./../handlers/pokemonsHandlers")

const pokemonsRouter = Router();

//aplicamos validacion para evitar datos vacios
const validate = (req, res, next)=>{
    const {id, name, image, hp, atack, defense, speed, height, weight}= req.body;
    if (!id) return res.status(400).json({error:"missing id"});
    if (!name ) return res.status(400).json({error:"missing name"});
    if (!image) return res.status(400).json({error:"missing image"});
    if ( !hp) return res.status(400).json({error:"missing hp"});
    if (!atack ) return res.status(400).json({error:"missing atack"});
    if (!defense) return res.status(400).json({error:"missing defense"});
    if (!speed ) return res.status(400).json({error:"missing speed"});
    if ( !height) return res.status(400).json({error:"missing height"});
    if (!weight) return res.status(400).json({error:"missing weight"});

    next();
};




//aqui estan los endpoints

pokemonsRouter.get("/", getPokemonsHandler);

pokemonsRouter.get("/:id", getPokemonHandler);


pokemonsRouter.post("/", validate, createPokemonHandler);
//NIY: Not Implemented Yet
module.exports= pokemonsRouter;


//#### **📍 GET | /pokemons**

// -  Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.

// #### **📍 GET | /pokemons/:idPokemon**

// -  Esta ruta obtiene el detalle de un pokemon específico. Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon.
// -  El pokemon es recibido por parámetro (ID).
// -  Tiene que incluir los datos del tipo de pokemon al que está asociado.
// -  Debe funcionar tanto para los pokemones de la API como para los de la base de datos.

// #### **📍 GET | /pokemons/name?="..."**

// -  Esta ruta debe obtener todos aquellos pokemons que coinciden con el nombre recibido por query.
// -  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// -  Si no existe el pokemon, debe mostrar un mensaje adecuado.
// -  Debe buscar tanto los de la API como los de la base de datos.

// #### **📍 POST | /pokemons**

// -  Esta ruta recibirá todos los datos necesarios para crear un pokemon y relacionarlo con sus tipos solicitados.
// -  Toda la información debe ser recibida por body.
// -  Debe crear un pokemon en la base de datos, y este debe estar relacionado con sus tipos indicados (debe poder relacionarse al menos con dos).
