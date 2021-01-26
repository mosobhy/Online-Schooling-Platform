import react, { Component } from "react";
import { Link } from "react-router-dom";
import './style.css';
import { BiUserCircle , BiUserPlus } from 'react-icons/bi';
import { MdEmail } from "react-icons/md";
import { FiUserCheck } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserTag } from "react-icons/fa";
class Docter extends Component {
    render() {
        return (
            <div className="home-parent" style={{ backgroundImage: `url('/image/bg-1.jpg')` }}>
                <div className="layer"></div>
                <div className="doctor-form">
                    <img src="/image/doctor-1.jpg" className="img-fluid rounded-circle" width="60" height="60" />
                    <h4>Doctor Register</h4>
                    <form >
                        <div>
                            <BiUserCircle />
                            <input type="text" placeholder="First Name" />
                        </div>
                        <div>
                        <BiUserPlus />
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <div>
                            <FiUserCheck />
                            <input type="text" placeholder="User Name" />
                        </div>
                        <div>
                            <MdEmail />
                            <input type="email" placeholder="name@example.com" />
                        </div>
                        <div>
                            <RiLockPasswordLine />
                            <input type="password" placeholder="Password" />
                        </div>
                        <div>
                            <FaUserTag />
                            <input type="text" placeholder="Id" />
                        </div>
                        <button type="submit" className="btn ">Submit</button>

                    </form>

                </div>


            </div>
       
        )
    }
}
export default Docter;