import react, { Component } from "react";
import Navbar from "../Navbar/index";
import './style.css';

class YourCourse extends Component {
    render() {
        return (
            <react.Fragment>
                <Navbar />
                <h1>YourCourse</h1>
            </react.Fragment>


        )
    }
}

export default YourCourse;