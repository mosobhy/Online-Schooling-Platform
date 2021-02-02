import react, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, option, Form, Button, Modal } from 'react-bootstrap';
import { IoMdNotificationsOutline, IoIosHelpCircleOutline } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
import "./style.css";

class AdminNav extends Component {
    state = {
        show: false
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

    render() {
        return (
            <div>
                <Navbar className="Admin-navbar" expand="lg">
                    <div className="container">
                        <Navbar.Brand ><Link to="/admin/"><img src="/image/logo.gif" width="70px" height="50px" /></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto">
                                <Nav.Link onClick={this.handleShow}>create course</Nav.Link>
                                <Nav.Link ><Link to="/admin/view">View courses</Link></Nav.Link>
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

                <Modal show={this.state.show} onHide={this.handleClose} centered keyboard={false} className="pop-parent">
                    <Modal.Header closeButton className="pop-header">
                        <Modal.Title>Your course</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="pop-body">

                        <Form.Label>Course Name</Form.Label>
                        <Form.Control type="text" placeholder="Name...." />
                        <Form.Label>Course Code</Form.Label>
                        <Form.Control type="text" placeholder="Code...." />

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Select Level</Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </Form.Control>
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer className="pop-footer">
                        <Button onClick={this.handleClose}>
                            Close
                            </Button>
                    </Modal.Footer>
                </Modal>

            </div >



        )

    }

}

export default AdminNav;

