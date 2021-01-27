import react, { Component } from "react";

import './style.css';
import { FiUserCheck } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";



class Login extends Component{
    render() {
        return (
            <div className="home-parent">
            
            <div className="doctor-form">
                <img src="/image/login-5.jpg" className="img-fluid rounded-circle" width="70" height="60" />
                <h4>Welcome back...</h4>
                <form  >
             
                    <div>
                        <FiUserCheck />
                        <input type="text" placeholder="User Name" />
                    </div>
                
                    <div>
                        <RiLockPasswordLine />
                        <input type="password" placeholder="Password" />
                    </div>

                    <button type="submit" className="btn ">Submit</button>

                </form>

            </div>


        </div>

        )
    }
}
export default Login;