import react, { Component } from "react";
import './style.css';
import { FiUserCheck } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiFillCheckCircle, AiFillExclamationCircle } from "react-icons/ai";





class Login extends Component {



    componentDidMount() {
        document.getElementById("loginForm").addEventListener("submit", (e) => {
            e.preventDefault();
            checkData();
        });
        
   const checkData = () => {
  
       const userName = document.getElementById("userName");
       const password = document.getElementById("password");

        if (userName.value == '') {
            setErrorFor(userName, "Enter a Vaild name");
        } else {
            setSeccessFor(userName)
        }
    }
   const setErrorFor = (input, massage) => {
       const getParent = input.parentElement;
 
        const small = getParent.querySelector('small');
        small.innerText = massage;
        getParent.className = "input-control text-left error";
    }
   const setSeccessFor = (input) => {
        const getParent = input.parentElement;
        getParent.className = 'input-control text-left success';
    }

    }

            //send data to api
            // const request = new XMLHttpRequest();
            // request.open("post", "http://127.0.0.1:8000/api/login/");

            // const csrftoken = getCookie('csrftoken');
            // request.setRequestHeader("Content-Type", "application/json");
            // request.setRequestHeader("HTTP_X_REQUESTED_WITH", "XMLHttpRequest");
            // request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            // request.setRequestHeader("X-CSRFToken", csrftoken);
            // request.onload = () => {
            //     console.log(request.responseText);
            // }

            // const data = {
            //     "username": userName, 
            //     "password": password
            // }
            // request.send(data) 
            // return false;


       


    render() {
   
        return (

            
            <div className="home-parent">
                <div className="doctor-form">
                    <img src="/image/login-5.jpg" className="img-fluid rounded-circle" width="70" height="60" />
                    <h4>Welcome back...</h4>


                    <form id="loginForm" >
                        <div className="input-control text-left ">
                            <FiUserCheck />
                            <input type="text" placeholder="User Name" className="w-75" id="userName" />
                            <AiFillCheckCircle className="inside-input correct" />
                            <AiFillExclamationCircle className="inside-input uncorrect" />
                            <small>Error Massage</small>
                        </div>

                        <div className="input-control text-left ">
                            <RiLockPasswordLine />
                            <input type="password" placeholder="Password" className=" w-75" id="password" />
                            <AiFillCheckCircle className="inside-input correct" />
                            <AiFillExclamationCircle className="inside-input uncorrect" />
                            <small>Error Massage</small>
                        </div>

                        <div className="input-control">
                            <button type="submit" className="btn">Submit</button>
                        </div>


                    </form>
                </div>

            </div>

        )
    }
}
export default Login;