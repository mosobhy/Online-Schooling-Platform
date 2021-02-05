import react, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, option, Form, Button, Modal } from 'react-bootstrap';
import { IoMdNotificationsOutline, IoIosHelpCircleOutline } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
import "./style.css";

class AdminNav extends Component {

    state = {
        show: false,
        randomValue: ''
    }
    handleClose = () => {
        this.setState({
            show: false
        })
    };
    handleShow = () => {
        this.setState({
            show: true
        })
    };

    //GANERATE RANDOM CODE
    generateCode = () => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        this.setState({
            randomValue: result
        });

    }

    getRequest = (e) => {
        e.preventDefault();

        //GET INPUTS VALUE
        const courseName = document.querySelector('#namefield').value;
        const courseCode = document.querySelector('#codefield').value;
        const courseLevel = document.querySelector('#levelfield').value;

        //GET USERNAME FROM LOCALSTORAGE
        let userInfo = localStorage.getItem("doctorInfo");
        userInfo = JSON.parse(userInfo);

        //SEND REQUEST TO SERVER
        const request = new XMLHttpRequest();
        const csrftoken = this.getCookie('csrftoken');
        request.open("post", `http://127.0.0.1:8000/api/create-course/${userInfo.username}/`);
        request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        request.setRequestHeader("X-CSRFToken", csrftoken);


        request.onload = () => {
            const response = JSON.parse(request.responseText);
            console.log(response);

        }

        //SEND DATA TO SERVER
        const data = new FormData();
        data.append('name', courseName);
        data.append('code', courseCode);
        data.append('level', courseLevel);

        request.send(data);
        return false;


    };

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
                <Navbar className="Admin-navbar" expand="lg">
                    <div className="container">
                        <Navbar.Brand ><Link to="/admin/"><img src="/image/logo.gif" width="70px" height="50px" /></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto">
                                <a onClick={this.handleShow} className="admin-link">create course</a>
                                <Link to="/admin/view" className="admin-link">View courses</Link>
                            </Nav>
                            <div className="text-white icone-group" >
                                <IoMdNotificationsOutline />
                                <IoIosHelpCircleOutline />
                                <FaUserTie />
                            </div>
                        </Navbar.Collapse>
                    </div>

                </Navbar>
                {/* create course pop up */}

                <Modal show={this.state.show} onHide={this.handleClose} centered keyboard={false} className="pop-parent" >
                    <Modal.Header closeButton className="pop-header">
                        <Modal.Title>Create course</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={this.getRequest}>
                        <Modal.Body className="pop-body" onSubmit={this.getRequest}>


                            <Form.Label>Course Name</Form.Label>
                            <Form.Control id='namefield' name="name" type="text" placeholder="Name...." />

                            <Form.Label>Course Code</Form.Label>
                            <Form.Control id='codefield' name="code" type="text" placeholder="Code...." value={this.state.randomValue} readOnly />
                            <button className="btn " type="button" onClick={this.generateCode}>Generate Code</button>

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Select Level</Form.Label>
                                <Form.Control id='levelfield' as="select" name="level">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </Form.Control>
                            </Form.Group>

                        </Modal.Body>
                        <Modal.Footer className="pop-footer">
                            <Button type="submit" onClick={this.handleClose} >
                                Create
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>

            </div >



        )

    }

}

export default AdminNav;

