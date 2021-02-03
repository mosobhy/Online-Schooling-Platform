<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4a9d9251ed24421a972f6c45c2b660aa346f817d
import react, { Component } from "react";
import Navbar from '../Navbar/index';
import { Jumbotron, Button } from 'react-bootstrap';
import { BsThreeDots } from 'react-icons/bs'
import "./style.css";


class AllNotification extends Component {

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
                <div className="text-left notification-body my-3" key={item.id}>

                    <h5><span>{item.id}</span> {item.name}</h5>
                    <p>
                        {item.body}
                    </p>
                    <BsThreeDots />
                </div>
            )
        })
        return (
            <react.Fragment>
                <Navbar />
                <Jumbotron className="notification-parent text-left">
                    <h2>Notification</h2>
                    {items}
                </Jumbotron>

            </react.Fragment>


        )
    }
}

<<<<<<< HEAD
=======
=======
import react, { Component } from "react";
import Navbar from '../Navbar/index';
import { Jumbotron, Button } from 'react-bootstrap';
import { BsThreeDots } from 'react-icons/bs'
import "./style.css";


class AllNotification extends Component {

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
                <div className="text-left notification-body my-3" key={item.id}>

                    <h5><span>{item.id}</span> {item.name}</h5>
                    <p>
                        {item.body}
                    </p>
                    <BsThreeDots />
                </div>
            )
        })
        return (
            <react.Fragment>
                <Navbar />
                <Jumbotron className="notification-parent text-left">
                    <h2>Notification</h2>
                    {items}
                </Jumbotron>

            </react.Fragment>


        )
    }
}

>>>>>>> 1e1f50e637a7ac6a753c44b8411abcdeba92b254
>>>>>>> 4a9d9251ed24421a972f6c45c2b660aa346f817d
export default AllNotification;