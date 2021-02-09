import react, { Component } from "react";
import Navbar from "../Navbar/index";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

class AllCourses extends Component {
    state = {
        data: [],
        studentData: [],

    }

    componentDidMount() {
        //HANDEL GET ALL COURSES REQUEST
        let userInfo = localStorage.getItem("studentInfo");
        userInfo = JSON.parse(userInfo);

        //SEND REQUEST TO SERVER
        const request = new XMLHttpRequest();
        const csrftoken = this.getCookie('csrftoken');

        request.open("get", `http://127.0.0.1:8000/api/view-courses/${userInfo.username}/`);

        request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        request.setRequestHeader("X-CSRFToken", csrftoken);


        request.onload = () => {
            const response = JSON.parse(request.responseText);
            this.setState({
                data: response
            })
            console.log(response)
        }
        request.send();
        return false;



    }


    // //VIEW COURSE FUNCTION
    // handelViewCourse = (code) => {
    //     //SEND REQUEST TO SERVER
    //     let userInfo = localStorage.getItem("studentInfo");
    //     userInfo = JSON.parse(userInfo);
    //     const request = new XMLHttpRequest();
    //     const csrftoken = this.getCookie('csrftoken');

    //     request.open("get", `http://127.0.0.1:8000/api/view-a-course/${userInfo.username}/${code}`);

    //     request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    //     request.setRequestHeader("X-CSRFToken", csrftoken);


    //     request.onload = () => {
    //         const response = JSON.parse(request.responseText);
    //         if (response.success) {
    //             this.setState({
    //                 studentData: response.enrolled_students
    //             });
    //             localStorage.setItem("code" , code)
    //             this.props.history.push(`/YourMaterials/`)

    //         }
    //     }
    //     request.send();
    //     return false;

    // }


    getCookie = (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }



    render() {
        return (
            <div>
                <Navbar />

                {this.state.data.error ? (
                    <div className="Student-JoinCourse-Parent mt-5">
                        <img src="/image/all-courses.jpg" className="img-fluid" />
                        <p> There are no <span>Courses</span> to View.</p>
                        <p> Check back later....</p>
                    </div>
                ) : (
                        <div className="d-flex justify-content-center">
                            <Table striped bordered hover className="table-student-control">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Course Name</th>
                                        <th>Course Code</th>
                                        <th>Views</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {this.state.data.courses.map((item) => {
                                        <react.Fragment key={item.course_code}>
                                            <tr >
                                                <td>{item.course_name}</td>
                                                <td>{item.course_code}</td>
                                                <td>{item.level}</td>
                                                <td><button className="btn view-button" onClick={() => this.handelViewCourse(item.course_code)}>
                                                    Visit</button></td>
                                            </tr>
                                        </react.Fragment>
                                    })} */}

                                </tbody>
                            </Table>


                        </div>

                    )}


            </div>
        )
    }
}

export default AllCourses;