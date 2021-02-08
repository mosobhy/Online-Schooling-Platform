import react, { Component } from "react";
import Navbar from "../Navbar/index";
import CourseNav from "../Course-Nav/index";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import "./style.css";

class News extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        let student = localStorage.getItem("studentEnorll");
        student = JSON.parse(student);
        this.setState({
            users: student
        });
        console.log(this.state.users)
    }

    render() {

        return (

            <div>
                <Navbar />
                <CourseNav />

                {this.state.users ? (
                    <div className="news-parent" >
                        <h3>Students who want to join this class : </h3>
                        <div className="news-content d-flex justify-content-between" >
                            <h4>ahlam</h4>
                            <div className="news-icons">
                                <AiOutlineCheck />
                                <AiOutlineClose />
                            </div>
                        </div>
                    </div>
                ) : (
                        <div className="Student-Qize-Parent">
                            <img src="/image/student.jpg" className="img-fluid" />
                            <p>There are no <span>Student</span> Enrolled in this class.</p>
                        </div>
                    )}


            </div>





        )
    }
}

export default News;