import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import Form from "./views/Form/Form";
import Detail from "./views/Detail/Detail";
import NavBar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" >
        <Landing/>
      </Route>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/detail/:id">
        <Detail/>
      </Route>
      <Route path="/form" >
        <Form/>
      </Route>
    </div>
  );
}

export default App;
