import react, { Component } from "react";
import Navbar from "../Navbar/index";
import './style.css';

class AllCourses extends Component{
    render() {
        return (
            <react.Fragment>
                <Navbar />
              <h1>All Courses</h1>
            </react.Fragment>
        
        )
    }
}

export default AllCourses;