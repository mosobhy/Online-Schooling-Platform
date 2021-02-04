import react, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css";

class CourseNav extends Component {
    render() {
        return (
            <div className="course-Nav-parent">
                <Link to="/course/">News</Link>
                <Link to="/course/materials">Uplode Materials</Link>
                <Link to="/course/live" target="_blank">Go Live</Link>
                <Link to="/course/quiz" >Create Quiz</Link>

            </div>
        )
    }
}

export default CourseNav;