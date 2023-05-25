const getTypeHandler= (req, res)=>{
    const{type}= req.query;
    res.send(`NIY: obtengo todos los pokemones con el tipo ${type}`)
}


module.exports={
    getTypeHandler
}