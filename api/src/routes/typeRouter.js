const {Router}= require('express');


const typeRouter = Router();

// aca estan los endpoints

typeRouter.get("/",(req,res)=>{
    res.send("Estoy en types")
});

typeRouter.get("/:id",(req,res)=>{
    res.send("Detalle del type")
});
typeRouter.post("/",(req,res)=>{
    res.send("NIY: CREACION DE UN POST")
});


module.exports= typeRouter;


// GET | /types**

// -  Obtiene un arreglo con todos los tipos de pokemones.
// -  En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los tipos que encuentres en la API.
// -  Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.


