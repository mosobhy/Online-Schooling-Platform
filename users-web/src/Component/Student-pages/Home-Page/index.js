import react, { Component } from "react";
import Navbar from "../Navbar/index";
import './style.css';

class HomePage extends Component{
    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <h1>Home page</h1>
                </div>
  
           </div>
        )
    }
}

export default HomePage;