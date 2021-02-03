<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4a9d9251ed24421a972f6c45c2b660aa346f817d
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
<<<<<<< HEAD
                                <Nav.Link ><Link to="/admin/view">View courses</Link></Nav.Link>
=======
                                <Nav.Link ><Link to="/view">View courses</Link></Nav.Link>
>>>>>>> 4a9d9251ed24421a972f6c45c2b660aa346f817d
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
                        <Modal.Title>Create course</Modal.Title>
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
                            Create
                            </Button>
                    </Modal.Footer>
                </Modal>

            </div >



        )

    }

}

export default AdminNav;

<<<<<<< HEAD
=======
=======
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
                        <Navbar.Brand ><Link to={"/admin/" + this.props}><img src="/image/logo.gif" width="70px" height="50px" /></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto">
                                <Nav.Link onClick={this.handleShow}>create course</Nav.Link>
                                <Nav.Link ><Link to="/view">View courses</Link></Nav.Link>
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
                        <Modal.Title>Create course</Modal.Title>
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
                            Create
                            </Button>
                    </Modal.Footer>
                </Modal>

            </div >



        )

    }

}

export default AdminNav;

>>>>>>> 1e1f50e637a7ac6a753c44b8411abcdeba92b254
>>>>>>> 4a9d9251ed24421a972f6c45c2b660aa346f817d
