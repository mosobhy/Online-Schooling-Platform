import react, { Component } from "react";
import Navbar from "../Navbar/index";
import CourseNav from "../Course-Nav/index";
import "./style.css";

class CreateQuiz extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <CourseNav />
                <h1>create Quiz</h1>
            </div>

        )
    }
}

export default CreateQuiz;