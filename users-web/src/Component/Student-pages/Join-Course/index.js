import react, { Component } from "react";
import Navbar from "../Navbar/index";
import axios from "axios";
import './style.css';

class JoinCourse extends Component {

    // componentDidMount() {
    //     //VIEW COURSE FUNCTION
    
    //         //SEND REQUEST TO SERVER
    //         let userInfo = localStorage.getItem("studentInfo");
    //         userInfo = JSON.parse(userInfo);
    //         const request = new XMLHttpRequest();
    //         const csrftoken = this.getCookie('csrftoken');

    //         request.open("GET", `http://127.0.0.1:8000/api/join-course/${userInfo.username}/L5OIDG`);

    //         request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    //         request.setRequestHeader("X-CSRFToken", csrftoken);


    //         request.onload = () => {
    //             const response = JSON.parse(request.responseText);
    //             console.log(response);
    //         }
    //         request.send();
    //         return false;

        
    // }
    // getCookie = (name) => {
    //     let cookieValue = null;
    //     if (document.cookie && document.cookie !== '') {
    //         const cookies = document.cookie.split(';');
    //         for (let i = 0; i < cookies.length; i++) {
    //             const cookie = cookies[i].trim();
    //             // Does this cookie string begin with the name we want?
    //             if (cookie.substring(0, name.length + 1) === (name + '=')) {
    //                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
    //                 break;
    //             }
    //         }
    //     }
    //     return cookieValue;
    // }

    componentDidMount(){
        axios.get("/jsonData.json")
        .then(respon => {
             console.log(respon.data.createCourse)
        });
    }



    render() {
        return (
            <react.Fragment>
                <Navbar />
                <div className="Student-JoinCourse-Parent">
                    <img src="/image/join.jpg" className="img-fluid" />
                    <p> There are no <span>Courses</span> to enroll in.</p>
                    <p> we will send you when there is....</p>


                </div>
            </react.Fragment>

        )
    }
}

export default JoinCourse;