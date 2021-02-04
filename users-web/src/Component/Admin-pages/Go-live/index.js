import { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { ImVolumeMedium, ImVolumeMute2 } from "react-icons/im";
import { IoVideocam } from "react-icons/io5";
import { MdVideocamOff } from "react-icons/md";
import { GrChatOption } from "react-icons/gr";
import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import $ from "jquery";
import "./style.css";

class GoLive extends Component {

    state = {
        users: []
    }
    handelMember = () => {
        $(".member-parent").slideToggle();
    }

    handelSoundOn = () => {
        $(".soundOff").slideToggle();
        $(".soundOn").slideToggle();
    }
    handelCameraOn = () => {
        $(".cameraOn").slideToggle();
        $(".cameraOff").slideToggle();
    }

    handelOpenChat = () => {

        $(".chat-box").slideDown();
    }
    handelCloseChat = () => {
        $(".chat-box").slideUp();
    }
    componentDidMount() {
        $(".soundOff").hide();
        $(".cameraOff").hide();

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(req => req.json())
            .then(data => {
                this.setState({
                    users: data
                })
            })
    }


    render() {
        const { users } = this.state;
        const items = users.map((item) => {
            return (
                <div className="member-name-parent" key={item.id}>
                    <p><BiUserCircle />{item.name}</p>
                </div>
            )
        })

        return (

            <div className="parent-live">

                <Navbar  className="live-Control">
                    <div className="container">

                        <div className="memberControl" onClick={this.handelMember}>
                            <FaUsers />
                            <span>Members</span>
                        </div>

                        <Nav className="m-auto ">
                            {/* sound control */}
                            <div className="sound-parent" onClick={this.handelSoundOn} >
                                <div className="soundOn" >
                                    <ImVolumeMedium />
                                    <span>ON</span>

                                </div>
                                <div className="soundOff" >
                                    <ImVolumeMute2 />
                                    <span>OFF</span>
                                </div>
                            </div>

                            {/* camera control */}
                            <div className="camera-parent" onClick={this.handelCameraOn}>
                                <div className="cameraOn">
                                    <IoVideocam />
                                    <span>ON</span>
                                </div>
                                <div className="cameraOff">
                                    <MdVideocamOff />
                                    <span>OFF</span>
                                </div>
                            </div>

                            <div className="text-white">
                                <FiShare />
                                <span>Share Screan</span>
                            </div>
                        </Nav>
                        <div className="chat" onClick={this.handelOpenChat}>
                            <GrChatOption />
                            <span>Chat</span>
                        </div>


                    </div>
                </Navbar>



                <div className="member-parent">
                    {items}
                </div>

                <div className="chat-box">
                    <div className="input-massage">
                        <input type="text" placeholder="type your massage....." />
                    </div>
                    <div className="option">
                        <AiOutlineMinus />
                        <AiOutlineClose onClick={this.handelCloseChat} />
                    </div>


                </div>

            </div>



        )
    }
}

export default GoLive;