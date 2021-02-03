<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4a9d9251ed24421a972f6c45c2b660aa346f817d
import react, { Component } from "react";
import Navbar from "../Navbar/index";
import CourseNav from "../Course-Nav/index";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import "./style.css";

class News extends Component {
    state = {
        users:[]
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    users:data
                })
            });
    };
    render() {
        const { users } = this.state;
        const user = users.map(user => {
            return (
                <div className="news-content d-flex justify-content-between" key={user.id}>
                    <h4>{ user.name}</h4>
                <div className="news-icons">
                    <AiOutlineCheck />
                    <AiOutlineClose />
                </div>
            </div>
            )
        })
        return (
            <div>
                <Navbar />
                <CourseNav />
                <div className="news-parent" >


                    <h3>Students who want to join this class : </h3>
                   {user}
                </div>


            </div>


        )
    }
}

<<<<<<< HEAD
=======
=======
import react, { Component } from "react";
import Navbar from "../Navbar/index";
import CourseNav from "../Course-Nav/index";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import "./style.css";

class News extends Component {
    state = {
        users:[]
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    users:data
                })
            });
    };
    render() {
        const { users } = this.state;
        const user = users.map(user => {
            return (
                <div className="news-content d-flex justify-content-between" key={user.id}>
                    <h4>{ user.name}</h4>
                <div className="news-icons">
                    <AiOutlineCheck />
                    <AiOutlineClose />
                </div>
            </div>
            )
        })
        return (
            <div>
                <Navbar />
                <CourseNav />
                <div className="news-parent" >


                    <h3>Students who want to join this class : </h3>
                   {user}
                </div>


            </div>


        )
    }
}

>>>>>>> 1e1f50e637a7ac6a753c44b8411abcdeba92b254
>>>>>>> 4a9d9251ed24421a972f6c45c2b660aa346f817d
export default News;