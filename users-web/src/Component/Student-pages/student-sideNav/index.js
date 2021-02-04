import react, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css";

class StudentSideNav extends Component {
    render() {
        return (
            <div className="student-Nav-parent">
                <Link to="/YourMaterials/">View Materials</Link>
                <Link to="/YourQuiz/" >Quiz</Link>
            </div>
        )
    }
}

export default StudentSideNav;