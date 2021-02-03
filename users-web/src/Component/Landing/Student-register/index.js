import react, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Navbar/index";
import './style.css';
import jQuery from 'jquery';
import { BiUserCircle, BiUserPlus } from 'react-icons/bi';
import { MdEmail } from "react-icons/md";
import { FiUserCheck } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserTag } from "react-icons/fa";
import { AiFillCheckCircle, AiFillExclamationCircle } from "react-icons/ai";

class Student extends Component {
    state = {
        users: {},
        error: {}
    }
    componentDidMount() {
        document.getElementById("studentRegisterForm").onsubmit = (e) => {
            e.preventDefault();
            checkData();
            getRequest();

        };

        function getCookie(name) {
            var cookieValue = null;
            if (document.cookie && document.cookie !== '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = jQuery.trim(cookies[i]);
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }

        const checkData = () => {

            //get input
            const userName = document.getElementById("userName");
            const nationalId = document.getElementById("nationalId");
            const email = document.getElementById("email");
            const universityId = document.getElementById("universityId");
            const password = document.getElementById("password");


            //username tast
            if (userName.value == '' || userName.value == null) {
                setErrorFor(userName, "Enter a Vaild name");
            } else {
                setSeccessFor(userName)
            }
            //national id tast
            if (nationalId.value == 14) {

                setSeccessFor(nationalId)
            } else {
                setErrorFor(nationalId, "Enter a vaild id");
            }
            //universityId id tast
            if (universityId.value == 14) {

                setSeccessFor(universityId)
            } else {
                setErrorFor(universityId, "Enter a vaild university Id");
            }
            //email tast
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {

                setSeccessFor(email)
            } else {
                setErrorFor(email, "Enter a vaild email");
            }
            if (email.value == '' || email.value == null) {

                setErrorFor(email, "email must not be empty");
            } else {
                setSeccessFor(email)
            }
            //password tast
            if (password.value == '' && password.value <= 5) {
                setErrorFor(password, "enter a vaild password");
            } else {

                setSeccessFor(password)
            }

        }

        //handel error 
        const setErrorFor = (input, massage) => {
            const getParent = input.parentElement;
            const small = getParent.querySelector('small');
            small.innerText = massage;
            getParent.className = "input-control error";
        }
        //handel seccess
        const setSeccessFor = (input) => {
            const getParent = input.parentElement;
            getParent.className = 'input-control success';
        }

        const getRequest = () => {
            //get data
            const firstName = document.getElementById("fname").value;
            const lastName = document.getElementById("lname").value;
            const level = document.getElementById("level").value;
            const userName = document.getElementById("userName").value;
            const nationalId = document.getElementById("nationalId").value;
            const password = document.getElementById("password").value;
            const universityId = document.getElementById("universityId").value;
            const email = document.getElementById("email").value;

            // send data to api
            const request = new XMLHttpRequest();
            const csrftoken = getCookie('csrftoken');
            request.open("post", "http://127.0.0.1:8000/api/student/");

            // request.setRequestHeader("Content-Type", "application/json");
            // request.setRequestHeader("HTTP_X_REQUESTED_WITH", "XMLHttpRequest");
            request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            request.setRequestHeader("X-CSRFToken", csrftoken);

            request.onload = () => {
                const response = JSON.parse(request.responseText);
                if (response.errors) {
                    this.setState({
                        error: response.errors
                    })
                    console.log(this.state.error)
                } else if (response.success) {
                    this.setState({
                        users: response
                    })
<<<<<<< HEAD
                    this.props.history.push("/studentPages/");
=======
                    this.props.history.push(`/studentPages/${this.state.username}`);
>>>>>>> 1e1f50e637a7ac6a753c44b8411abcdeba92b254
                }


            }

            const data = new FormData();
            data.append('firstname', firstName);
            data.append('lastname', lastName);
            data.append('username', userName);
            data.append('ssn', nationalId);
            data.append('universityid', universityId);
            data.append('level', level);
            data.append('email', email);
            data.append('password', password);

            request.send(data);
            return false;
        }

    }
    render() {
        return (
            <div className="home-parent" >

                <NavBar />
                <div className="doctor-form">
                    <img src="/image/student-1.jpg" className="img-fluid rounded-circle" width="60" height="60" />
                    <h4>Student Register</h4>

                    {/* form start */}
                    <form className="text-left" id="studentRegisterForm">


                        <div className="d-flex justify-content-between">
                            <div className="input-control my-2">
                                <BiUserCircle />
                                <input type="text" placeholder="First Name" id="fname" />
                                <AiFillCheckCircle className="inside-input correct" />
                                <AiFillExclamationCircle className="inside-input uncorrect" />
                                <small>Error Massage</small>
                            </div>

                            <div className="input-control my-2">
                                <BiUserPlus />
                                <input type="text" placeholder="Last Name" id="lname" />
                                <AiFillCheckCircle className="inside-input correct" />
                                <AiFillExclamationCircle className="inside-input uncorrect" />
                                <small>Error Massage</small>
                            </div>


                        </div>


                        <div className="input-control my-2">
                            <FiUserCheck />
                            <input type="text" placeholder="User Name" id="userName" className="w-75" />
                            <AiFillCheckCircle className="inside-input correct" />
                            <AiFillExclamationCircle className="inside-input uncorrect" />
                            <small>Error Massage</small>
                        </div>

                        <div className="d-flex justify-content-between">
                            <div className="input-control my-2">
                                <FaUserTag />
                                <input type="text" placeholder="National Id" id="nationalId" />
                                <AiFillCheckCircle className="inside-input correct" />
                                <AiFillExclamationCircle className="inside-input uncorrect" />
                                <small>Error Massage</small>
                            </div>


                            <div className="input-control my-2">
                                <FaUserTag />
                                <input type="text" placeholder="University Id" id="universityId" />
                                <AiFillCheckCircle className="inside-input correct" />
                                <AiFillExclamationCircle className="inside-input uncorrect" />
                                <small>Error Massage</small>
                            </div>

                        </div>


                        <div className="input-control my-2">
                            <select id="level">
                                <option value="1">Level 1</option>
                                <option value="2">Level 2</option>
                                <option value="3">Level 3</option>
                                <option value="4">Leve 4</option>
                            </select>
                        </div>

                        <div className="input-control my-2">
                            <MdEmail />
                            <input type="email" placeholder="name@example.com" className="w-75" id="email" />
                            <AiFillCheckCircle className="inside-input correct" />
                            <AiFillExclamationCircle className="inside-input uncorrect" />
                            <small>Error Massage</small>
                        </div>


                        <div className="input-control my-2 ">
                            <RiLockPasswordLine />
                            <input type="password" placeholder="Password" className="w-75" id="password" />
                            <AiFillCheckCircle className="inside-input correct" />
                            <AiFillExclamationCircle className="inside-input uncorrect" />
                            <small>Error Massage</small>
                        </div>

                        <div className="input-control text-center">
                            <button type="submit" className="btn">Submit</button>
                        </div>
                        {/* <div className="errorHandel">
                            <small>{this.state.error}</small>
                        </div> */}
                    </form>

                </div>


            </div>

        )
    }
}
export default Student;