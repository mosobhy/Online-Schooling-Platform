import react, { Component } from "react";
import Navbar from "../Navbar/index";
import StudentSideNav from "../student-sideNav/index";
import './style.css';

class Materials extends Component {
    render() {
        return (
            <react.Fragment>
                <Navbar />
                <StudentSideNav />
                <div className="Student-Materials-Parent">
                <img src="/image/course-1.jpg" className="img-fluid" />
                    <p>There are No <span>materials</span> uploaded for this class.</p>
                    <p>Check back later. 👍</p>


            </div>
            </react.Fragment>

        )
    }
}

export default Materials;