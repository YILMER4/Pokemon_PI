import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavBar =()=>{

    return(
        <div>
            <Link to= "/home" >HOME</Link>
            <Link to="/form" >FORM</Link>
        </div>
    )

}

export default NavBar;