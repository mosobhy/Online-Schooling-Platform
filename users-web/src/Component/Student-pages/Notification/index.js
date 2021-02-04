import react, { Component } from "react";
import Navbar from "../Navbar/index";
import { Jumbotron } from "react-bootstrap";
import {BsThreeDots} from "react-icons/bs"
import './style.css';

class Notification extends Component {
    state = {
        notification: []
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(respons => respons.json())
            .then(data => {
                this.setState({
                    notification: data
                })
            })
        console.log(this.props);

    }


    render() {
        const { notification } = this.state
        const items = notification.map((item) => {
            return (
                <div className="text-left mx-auto Student-Notification-body my-3" key={item.id}>

                 
                    <p>
                        {item.body}
                    </p>
                    <button className="btn notification-view">view</button>
                    <button className="btn notification-ignore">ignore</button>
                </div>
            )
        })
        return (
            <react.Fragment>
                <Navbar />
                <Jumbotron className="Student-notification-parent">
                    <h2>Your Notification</h2>
                    {items}
                </Jumbotron>

            </react.Fragment>


        )
    }

}

export default Notification;