import react, { Component } from "react";
import NavBar from "../Navbar/index";
import './docter-style.css';
import jQuery from "jquery";
import { BiUserCircle, BiUserPlus } from 'react-icons/bi';
import { MdEmail } from "react-icons/md";
import { FiUserCheck } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserTag } from "react-icons/fa";
import { AiFillCheckCircle, AiFillExclamationCircle } from "react-icons/ai";





class Docter extends Component {
    state = {
        admin: [],
        errors: []
    }

    componentDidMount() {
        document.getElementById("instructorForm").addEventListener("submit", (e) => {
            e.preventDefault();
            checkData();
            getRequest();

        });

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
        const getRequest = () => {
            //get data
            const firstName = document.getElementById("fname").value;
            const lastName = document.getElementById("lname").value;
            const userName = document.getElementById("userName").value;
            const nationalId = document.getElementById("nationId").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // send data to api
            const request = new XMLHttpRequest();
            const csrftoken = getCookie('csrftoken');
            request.open("post", "http://127.0.0.1:8000/api/doctor/");

            // request.setRequestHeader("Content-Type", "application/json");
            // request.setRequestHeader("HTTP_X_REQUESTED_WITH", "XMLHttpRequest");
            request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            request.setRequestHeader("X-CSRFToken", csrftoken);

            request.onload = () => {
                const response = JSON.parse(request.responseText);
                console.log(response);
                if (response.errors) {
                    this.setState({
                        errors: response.errors
                    })
                    console.log(this.state.errors)

                } else if (response.success) {
                    this.setState({
                        admin: response
                    })
<<<<<<< HEAD
                    this.props.history.push("/admin/");
=======
<<<<<<< HEAD
                    this.props.history.push("/admin/");
=======
                    this.props.history.push(`/admin/${this.state.admin.username}`);
>>>>>>> 1e1f50e637a7ac6a753c44b8411abcdeba92b254
>>>>>>> 4a9d9251ed24421a972f6c45c2b660aa346f817d
                }
            }

            const data = new FormData();
            data.append('firstname', firstName);
            data.append('lastname', lastName);
            data.append('username', userName);
            data.append('ssn', nationalId);
            data.append('email', email);
            data.append('password', password);

            request.send(data)
            return false;
        };

        const checkData = () => {

            //get input
            const userName = document.getElementById("userName");
            const nationalId = document.getElementById("nationId");
            const email = document.getElementById("email");
            const password = document.getElementById("password");


            //username tast
            if (userName.value == '' || userName.value == null) {
                setErrorFor(userName, "Enter a Vaild name");
            } else {
                setSeccessFor(userName)
            }
            //national id tast
            if (nationalId.value < 14) {
                setErrorFor(nationalId, "Enter a vaild id");
            } else {
                setSeccessFor(nationalId)
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

    }

    render() {

        return (
            <div className="home-parent" >
                <NavBar />
                <div className="doctor-form">
                    <div id="demo"></div>

                    <img src="/image/doctor-1.jpg" className="img-fluid rounded-circle" width="60" height="60" />
                    <h4>Instructor Register</h4>


                    <form className="text-left" id="instructorForm">

                        <div className=" d-flex justify-content-between">
                            <div className="input-control my-2">
                                <BiUserCircle />
                                <input id="fname" type="text" placeholder="First Name" />
                                <AiFillCheckCircle className="inside-input correct" />
                                <AiFillExclamationCircle className="inside-input uncorrect" />
                                <small>Error Massage</small>
                            </div>
                            <div className="input-control my-2">
                                <BiUserPlus />
                                <input id="lname" type="text" placeholder="Last Name" />
                                <AiFillCheckCircle className="inside-input correct" />
                                <AiFillExclamationCircle className="inside-input uncorrect" />
                                <small>Error Massage</small>
                            </div>


                        </div>

                        <div className="input-control my-2">
                            <FiUserCheck />
                            <input id="userName" type="text" placeholder="User Name" className="w-75" />
                            <AiFillCheckCircle className="inside-input correct" />
                            <AiFillExclamationCircle className="inside-input uncorrect" />
                            <small>Error Massage</small>
                        </div>
                        <div className="input-control my-3">
                            <FaUserTag />
                            <input id="nationId" type="text" placeholder="National Id" className="w-75" />
                            <AiFillCheckCircle className="inside-input correct" />
                            <AiFillExclamationCircle className="inside-input uncorrect" />
                            <small>Error Massage</small>
                        </div>
                        <div className="input-control my-3">

                            <select id="department">
                                <option value="it">IT</option>
                                <option value="cs">CS</option>
                                <option value="gs">GS</option>
                                <option value="gis">GIS</option>
                            </select>
                        </div>

                        <div className="input-control my-3">
                            <MdEmail />
                            <input id="email" type="email" placeholder="name@example.com" className="w-75" />
                            <AiFillCheckCircle className="inside-input correct" />
                            <AiFillExclamationCircle className="inside-input uncorrect" />
                            <small>Error Massage</small>
                        </div>
                        <div className="input-control my-3">
                            <RiLockPasswordLine />
                            <input id="password" type="password" placeholder="Password" className="w-75" />
                            <AiFillCheckCircle className="inside-input correct" />
                            <AiFillExclamationCircle className="inside-input uncorrect" />
                            <small>Error Massage</small>
                        </div>
                        <div className="input-control text-center">

                            <button type="submit" className="btn">submit</button>
                        </div>
                    </form>
                    {/* <div className="errorHandel">
                        <small>{this.state.errors[0]}</small>
                    </div> */}
                </div>



            </div>

        )
    }
}
export default Docter;