import Cards from "../../components/Cards/Cards";
import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { getPokemons } from "../../Redux/actions";


const Home = ()=>{

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPokemons());
    },[])

    // cuando se monta,                               que haga el dispatch 
    //  useEffect()manejamos ciclo de vida     -     useDispatch()
    return(
        <>
            <h1>
                Esta es la vista de home
                <Cards/>
            </h1>
        </>

    )
}

export default Home;