import react, { Component } from "react";
import './docter-style.css';
import { BiUserCircle, BiUserPlus } from 'react-icons/bi';
import { MdEmail } from "react-icons/md";
import { FiUserCheck } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserTag } from "react-icons/fa";
import { AiFillCheckCircle, AiFillExclamationCircle } from "react-icons/ai";





class Docter extends Component {

    componentDidMount() {
        document.getElementById("instructorForm").addEventListener("submit", (e) => {
            e.preventDefault();
            checkData();
            
            // //get data
            // const userName = document.getElementById("userName").value;
            // const nationalId = document.getElementById("nationId").value;
            // const email = document.getElementById("email").value;
            // const password = document.getElementById("password").value;
            // const rePassword = document.getElementById("rePassword").value;

            // // send data to api
            // const request = new XMLHttpRequest();
            // request.open("post", "http://127.0.0.1:8000/api/docter");

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
            //     "email": email,
            //     "nationalid": nationalId,
            //     "password": password,
            //     "repassword": rePassword
                
            // }
            // request.send(data) 
            // return false;

        });

        const checkData = () => {

            //get input
            const userName = document.getElementById("userName");
            const nationalId = document.getElementById("nationId");
            const email = document.getElementById("email");
            const password = document.getElementById("password");
            const rePassword = document.getElementById("rePassword");

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
            //  //password tast
            // if (rePassword.value != "" && rePassword.value != null && rePassword.value == password.value) {
            //         setSeccessFor(rePassword)
            //         }
            //  else {
            //     setErrorFor(rePassword, "Dissimilar");
            // }
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

                <div className="doctor-form">
                    <div id="demo"></div>

                    <img src="/image/doctor-1.jpg" className="img-fluid rounded-circle" width="60" height="60" />
                    <h4>Instructor Register</h4>


                    <form className="text-left" id="instructorForm">

                        <div className=" my-1 d-flex justify-content-between">
                            <div className="input-control">
                                <BiUserCircle />
                                <input name="fname" type="text" placeholder="First Name" />
                                <AiFillCheckCircle className="inside-input correct" />
                                <AiFillExclamationCircle className="inside-input uncorrect" />
                                <small>Error Massage</small>
                            </div>
                            <div className="input-control">
                                <BiUserPlus />
                                <input name="lname" type="text" placeholder="Last Name" />
                                <AiFillCheckCircle className="inside-input correct" />
                                <AiFillExclamationCircle className="inside-input uncorrect" />
                                <small>Error Massage</small>
                            </div>


                        </div>

                        <div className="input-control my-1 ">
                            <FiUserCheck />
                            <input id="userName" type="text" placeholder="User Name" className="w-75" />
                            <AiFillCheckCircle className="inside-input correct" />
                            <AiFillExclamationCircle className="inside-input uncorrect" />
                            <small>Error Massage</small>
                        </div>
                        <div className="input-control my-1">
                            <FaUserTag />
                            <input id="nationId" type="text" placeholder="National Id" className="w-75" />
                            <AiFillCheckCircle className="inside-input correct" />
                            <AiFillExclamationCircle className="inside-input uncorrect" />
                            <small>Error Massage</small>
                        </div>
                        <div className="input-control my-1">

                            <select name="department">
                                <option>IT</option>
                                <option>CS</option>
                                <option>GS</option>
                                <option>GIS</option>
                            </select>
                        </div>

                        <div className="input-control my-1 ">
                            <MdEmail />
                            <input id="email" type="email" placeholder="name@example.com" className="w-75" />
                            <AiFillCheckCircle className="inside-input correct" />
                            <AiFillExclamationCircle className="inside-input uncorrect" />
                            <small>Error Massage</small>
                        </div>
                        <div className="input-control my-1 ">
                            <RiLockPasswordLine />
                            <input id="password" type="password" placeholder="Password" className="w-75" />
                            <AiFillCheckCircle className="inside-input correct" />
                            <AiFillExclamationCircle className="inside-input uncorrect" />
                            <small>Error Massage</small>
                        </div>
                        <div className="input-control my-1 ">
                            <RiLockPasswordLine />
                            <input id="repassword" type="password" placeholder="Repassword" className="w-75" />
                            <AiFillCheckCircle className="inside-input correct" />
                            <AiFillExclamationCircle className="inside-input uncorrect" />
                            <small>Error Massage</small>
                        </div>
                        <div className="input-control text-center">

                            <button type="submit" className="btn">Submit</button>

                        </div>

                    </form>

                </div>



            </div>

        )
    }
}
export default Docter;