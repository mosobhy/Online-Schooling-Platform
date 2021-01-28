import react, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class AdminNav extends Component{
    render() {
        return (
            <react.Fragment>
                <Link to="/admin/" >Logo</Link>
                <Link to="/admin/view" >View all courses</Link>
            </react.Fragment>
        )
    }
} 

