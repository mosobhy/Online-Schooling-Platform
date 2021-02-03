import react, { Component } from "react";
import Navbar from "../Navbar/index";
import './style.css';

class Notification extends Component {
    render() {
        return (
            <react.Fragment>
                <Navbar />
                <h1>Notification</h1>
            </react.Fragment>

        )
    }
}

export default Notification;