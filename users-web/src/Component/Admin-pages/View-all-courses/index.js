import react, { Component } from "react";
import Navbar from '../Navbar/index';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./style.css";


class ViewAllCourses extends Component {
    state = {
        data: [],
        studentData: [],
        errorShow : []
    
    }

    componentDidMount() {
        //HANDEL GET ALL COURSES REQUEST
        let userInfo = localStorage.getItem("userInfo");
        userInfo = JSON.parse(userInfo);

        //SEND REQUEST TO SERVER
        const request = new XMLHttpRequest();
        const csrftoken = this.getCookie('csrftoken');

        request.open("get", `http://127.0.0.1:8000/api/view-courses/${userInfo.username}/`);

        request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        request.setRequestHeader("X-CSRFToken", csrftoken);


        request.onload = () => {
            const response = JSON.parse(request.responseText);
            // if (response.success) {
            //     this.setState({
            //         data: response.courses
            //     })
            //     
            // }
            // this.setState({
            //     errorShow : response
            // })
            console.log(response)
        }
        request.send();
        return false;



    }

    //DELETE COURSE FUNCTION
    handelDeleteCourse = (code) => {
        //SEND REQUEST TO SERVER
        let userInfo = localStorage.getItem("userInfo");
        userInfo = JSON.parse(userInfo);
        const request = new XMLHttpRequest();
        const csrftoken = this.getCookie('csrftoken');

        request.open("get", `http://127.0.0.1:8000/api/delete-course/${userInfo.username}/${code}/`);

        request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        request.setRequestHeader("X-CSRFToken", csrftoken);


        request.onload = () => {
            const response = JSON.parse(request.responseText);
            console.log(response)
        }
        request.send();
        return false;  
   

    }


    //VIEW COURSE FUNCTION
    handelViewCourse = (code) => {
        //SEND REQUEST TO SERVER
        let userInfo = localStorage.getItem("userInfo");
        userInfo = JSON.parse(userInfo);
        const request = new XMLHttpRequest();
        const csrftoken = this.getCookie('csrftoken');

        request.open("get", `http://127.0.0.1:8000/api/view-a-course/${userInfo.username}/${code}`);

        request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        request.setRequestHeader("X-CSRFToken", csrftoken);


        request.onload = () => {
            const response = JSON.parse(request.responseText);
            if (response.success) {
                this.setState({
                    studentData: response.enrolled_students
                });
                localStorage.setItem("studentEnroll", JSON.stringify(this.state.studentData))
                localStorage.setItem("code" , code)
                this.props.history.push(`/course/`)
             
            }
            
        }
        request.send();
        return false;
   
    }


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
        const { data } = this.state;
        const body = data.map((item) => {
            return (
                <react.Fragment key={item.course_code}>
                    <tr >
                        <td>{item.course_name}</td>
                        <td>{item.course_code}</td>
                        <td>{item.level}</td>
                        <td><button className="btn view-button" onClick={() => this.handelViewCourse(item.course_code)}>
                           View</button></td>
                        <td><button onClick={() => this.handelDeleteCourse(item.course_code)} className="btn delete-button">Delete</button> </td>
                    </tr>
                </react.Fragment>

            )

        });
        return (
            <div>
                <Navbar />
                {/* {this.state.errorShow?(
                    this.state.errorShow.map(err => {
                        <p>err</p>
                    })
                ):(   */}
                <div className="d-flex justify-content-center my-5">
                    <Table striped bordered hover className="table-control">
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Course Code</th>
                                <th>Level</th>
                                <th>Views</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {body}

                        </tbody>
                    </Table>


                </div>
              
            </div>


        )
    }
}

export default ViewAllCourses;