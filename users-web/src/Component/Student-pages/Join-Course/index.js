import react, { Component } from "react";
import Navbar from "../Navbar/index";
import './style.css';

class JoinCourse extends Component {
    render() {
        return (
            <react.Fragment>
                <Navbar />
                <div className="Student-JoinCourse-Parent">
                <img src="/image/join.jpg" className="img-fluid" />
                    <p> There are no <span>Courses</span> to enroll in.</p>
                    <p> we will send you when there is....</p>
                  

            </div>
            </react.Fragment>

        )
    }
}

export default JoinCourse;