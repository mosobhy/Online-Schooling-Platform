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
export default AllNotification;

