<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4a9d9251ed24421a972f6c45c2b660aa346f817d
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
                <Link to="/course/quiz" >Quiz</Link>

            </div>
        )
    }
}

<<<<<<< HEAD
=======
=======
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
                <Link to="/course/quiz" >Quiz</Link>

            </div>
        )
    }
}

>>>>>>> 1e1f50e637a7ac6a753c44b8411abcdeba92b254
>>>>>>> 4a9d9251ed24421a972f6c45c2b660aa346f817d
export default CourseNav;