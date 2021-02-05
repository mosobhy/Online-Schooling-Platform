import react, { Component } from "react";
import NavBar from "../Navbar/index";
import './style.css';
import $ from "jquery";
import { FiUserCheck } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiFillCheckCircle, AiFillExclamationCircle } from "react-icons/ai";


class Login extends Component {
    state = {
        data: {},
        error: ''
    }
   
    handelLoginForm = (e) => {
        e.preventDefault();
        this.handelRequest();
    }

    handelRequest = () => {
        const request = new XMLHttpRequest();
                const csrftoken = this.getCookie('csrftoken');
                request.open("post", "http://127.0.0.1:8000/api/login/");
                request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                request.setRequestHeader("X-CSRFToken", csrftoken);
    
                request.onload = () => {
                    const response = JSON.parse(request.responseText);
                    console.log(response);
                    if (response.error) {
                        this.setState({
                            error: response.error
                        });
    
    
                    } else if (response.success) {
                        this.setState({
                            data: response
                        });
                        localStorage.setItem("userInfo" , JSON.stringify(this.state.data))
                        if (response.is_staff) {
                            this.props.history.push("/admin/")
                        } else {
                            this.props.history.push("/studentPages/")
                        }
    
                    }
    
                }
    
                const data = new FormData();
                data.append('username', document.getElementById('userName').value);
                data.append('password', document.getElementById('password').value);
    
                request.send(data);
                return false;
    
        
    };
    
         getCookie = (name) => {
            let cookieValue = null;
            if (document.cookie && document.cookie !== '') {
                const cookies = document.cookie.split(';');
                for (let i = 0; i < cookies.length; i++) {
                    const cookie = cookies[i].trim();
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }



    render() {

        return (


            <div className="home-parent">
                <NavBar />
                <div className="doctor-form">
                    <img src="/image/login-5.jpg" className="img-fluid rounded-circle" width="70" height="60" />
                    <h4>Welcome back...</h4>


                    <form id="loginForm" onSubmit={this.handelLoginForm}>
                        <div className="input-control text-left my-2">
                            <FiUserCheck />
                            <input type="text" placeholder="User Name" className="w-75" id="userName" />
                            <AiFillCheckCircle className="inside-input correct" />
                            <AiFillExclamationCircle className="inside-input uncorrect" />
                            <small>Error Massage</small>
                        </div>

                        <div className="input-control text-left my-2">
                            <RiLockPasswordLine />
                            <input type="password" placeholder="Password" className=" w-75" id="password" />
                            <AiFillCheckCircle className="inside-input correct" />
                            <AiFillExclamationCircle className="inside-input uncorrect" />
                            <small>Error Massage</small>
                        </div>

                        <div className="input-control my-2">
                            <button type="submit" className="btn">Submit</button>
                        </div>


                    </form>
                    <div className="errorHandel">
                        <p>{this.state.error}</p>
                    </div>
                </div>

            </div>

        )
    }
}
export default Login;