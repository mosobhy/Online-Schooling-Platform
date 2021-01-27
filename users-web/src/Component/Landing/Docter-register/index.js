import react, { Component } from "react";
import { Link } from "react-router-dom";
import './docter-style.css';
import { BiUserCircle, BiUserPlus } from 'react-icons/bi';
import { MdEmail } from "react-icons/md";
import { FiUserCheck } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserTag } from "react-icons/fa";
class Docter extends Component {
    render() {
        return (
            <div className="home-parent" >

                <div className="doctor-form">

                    <img src="/image/doctor-1.jpg" className="img-fluid rounded-circle" width="60" height="60" />
                    <h4>Doctor Register</h4>
                    <form className="text-left" name="myForm" action="/admin-pages.js" onSubmit="return validateForm()" method="post">
                        <div className="my-3">
                            <BiUserCircle />
                            <input name="fname" type="text" placeholder="First Name" required/>
                            <BiUserPlus />
                            <input name="lname" type="text" placeholder="Last Name" required/>
                        </div>

                        <div className="my-3 ">
                            <FiUserCheck />
                            <input name="userName" type="text" placeholder="User Name" className="w-75" required />
                        </div>
                        <div className="my-3">
                            <FaUserTag />
                            <input name="nationId" type="text" placeholder="National Id" className="w-75" required/>
                        </div>
                        <div className="my-3">

                            <select name="department">
                                <option>IT</option>
                                <option>CS</option>
                                <option>GS</option>
                                <option>GIS</option>
                            </select>
                        </div>

                        <div className="my-3 ">
                            <MdEmail />
                            <input name="email" type="email" placeholder="name@example.com" className="w-75" required/>
                        </div>
                        <div className="my-3 ">
                            <RiLockPasswordLine />
                            <input name="password" type="password" placeholder="Password" className="w-75" required />
                        </div>
                        <div className="text-center">

                            <button type="submit" className="btn">Submit</button>

                        </div>

                    </form>

                </div>



            </div>

        )
    }
}
export default Docter;