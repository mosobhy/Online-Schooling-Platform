import react , { Component } from "react";
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import NavBar from "./Component/Landing/Navbar/index";
import Docter from "./Component/Landing/Docter-register/index";
import Student from "./Component/Landing/Student-register/index";
import Login from "./Component/Landing/Login/index";
import AdminPages from "./Component/Admin-pages/Admin-app";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return(

        
      <div className="App">
      <BrowserRouter>
     
          <Route exact path="/" component={Login}></Route>
          <Route  path="/docter" component={Docter}></Route>
          <Route path="/student" component={Student}></Route>
          <Route path="/admin/" component={AdminPages}></Route>
        </BrowserRouter>
        </div>

  

    );
  
} 

}
export default App;
