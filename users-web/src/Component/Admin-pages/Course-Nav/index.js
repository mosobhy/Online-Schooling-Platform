import react, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css";

class CourseNav extends Component {
    render() {
        return (
            <div className="course-Nav-parent">
                <Link to="/admin/course/">News</Link>
                <Link to="/admin/course/materials">Uplode Materials</Link>
                <Link to="/admin/course/live" target="_blank">Go Live</Link>
                <Link to="/admin/course/quiz" >Quiz</Link>

            </div>
        )
    }
}

export default CourseNav;