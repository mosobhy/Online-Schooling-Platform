import react, { Component } from "react";
import { Link } from "react-router-dom";
import './style.css';
import { BiUserCircle, BiUserPlus } from 'react-icons/bi';
import { MdEmail } from "react-icons/md";
import { FiUserCheck } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserTag } from "react-icons/fa";

class Student extends Component {
    render() {
        return (
            <div className="home-parent" >
          
                <div className="doctor-form">
                    <img src="/image/student-1.jpg" className="img-fluid rounded-circle" width="60" height="60" />
                    <h4>Student Register</h4>
                    <form  className="text-left">
                        <div className="my-3">
                            <BiUserCircle />
                            <input type="text" placeholder="First Name" />
                            <BiUserPlus />
                            <input type="text" placeholder="Last Name" />
                        </div>
                   
                        <div className="my-3 ">
                            <FiUserCheck />
                            <input type="text" placeholder="User Name" className="w-75"/>
                        </div>
                        <div className="my-3">
                            <FaUserTag />
                            <input type="text" placeholder="National Id" />
                            <FaUserTag />
                            <input type="text" placeholder="University Id" />
                        </div>
                        <div className="my-3">
                     
                            <select name="Select Level">
                                <option>Level 1</option>
                                <option>Level 2</option>
                                <option>Level 3</option>
                                <option>Leve 4</option>
                            </select>
                        </div>
                    
                        <div className="my-3 ">
                            <MdEmail />
                            <input type="email" placeholder="name@example.com" className="w-75" />
                        </div>
                        <div className="my-3 ">
                            <RiLockPasswordLine />
                            <input type="password" placeholder="Password" className="w-75"/>
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
export default Student;