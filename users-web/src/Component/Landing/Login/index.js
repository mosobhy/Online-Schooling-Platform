import react, { Component } from "react";
import { Link } from "react-router-dom";
import './style.css';
import { FiUserCheck } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";

class Login extends Component{
    render() {
        return (
            <div className="home-parent" style={{ backgroundImage: `url('/image/bg-1.jpg')` }}>
            <div className="layer"></div>
            <div className="doctor-form">
                <img src="/image/login-5.jpg" className="img-fluid rounded-circle" width="70" height="60" />
                <h4>Log in</h4>
                <form >
             
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