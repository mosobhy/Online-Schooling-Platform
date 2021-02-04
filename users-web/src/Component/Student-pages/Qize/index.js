import react, { Component } from "react";
import Navbar from "../Navbar/index";
import StudentSideNav from "../student-sideNav/index";
import './style.css';

class Qize extends Component {
    render() {
        return (
            <react.Fragment>
                <Navbar />
                <StudentSideNav />
                <div className="Student-Qize-Parent">
                <img src="/image/quiz-1.jpg" className="img-fluid" />
                    <p>There are no <span>QIZE</span> uploaded for this class.</p>
                    <p>Check back later. 👍</p>


            </div>
            </react.Fragment>


        )
    }
}

export default Qize;