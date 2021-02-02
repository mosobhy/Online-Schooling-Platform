import react, { Component } from "react";
import Navbar from "../Navbar/index";
import CourseNav from "../Course-Nav/index";
import "./style.css";

class News extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <CourseNav />
                <h1>News</h1>
            </div>

        )
    }
}

export default News;