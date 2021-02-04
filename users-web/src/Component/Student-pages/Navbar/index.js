import react, { Component } from "react";
import { Link } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FcShop } from "react-icons/fc";
import { Navbar, Nav, Container, } from 'react-bootstrap';
import $ from "jquery";
import './style.css';


class StudentNav extends Component {

    clicked = false;
    showElement = () => {
        $(".icon-parent").removeClass('display-none');
    }

    handleToggler = () => {
        if (this.clicked === false) {
            $(".icon-parent").addClass('display-none');
            this.clicked = true;
        } else {
            this.clicked = false;
            setTimeout(this.showElement, 300);
        }
    }


    render() {
        return (
            <react.Fragment>


                <Navbar collapseOnSelect expand="lg" className="student-navber">
                    <Container>
                        {/* ********************** Nav Logo *****************  */}
                        <Navbar.Brand >
                            <Link to="/studentPages/">
                                <img src="/image/logo.gif" className="logo" width="50px" height="50px" />
                            </Link>
                        </Navbar.Brand>
                        {/* ********************** Nav Links *****************  */}
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="nav-toggle" onClick={this.handleToggler} />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="m-auto">
                                <Nav.Link className="nav-link-animation" ><Link className='student-nav-link' to="/studentPages/courses">All courses</Link></Nav.Link>
                                {/* <Nav.Link className="nav-link-animation" > <Link className='student-nav-link' to="/studentPages/notifiction">Notifiction</Link></Nav.Link> */}

                            </Nav>
                            {/*  */}
                        </Navbar.Collapse>
                        {/* ********************** Nav Icons *****************  */}
                        <div className="icon-parent nav-icons">
                          <Link to="/studentPages/notifiction"><IoMdNotifications /></Link>
                          <FcShop />
                            <FaUserGraduate />
                            <div className="dropdown">
                                <RiArrowDropDownLine />
                                <div className="dropdown-content">
                                    <a href="#">user name</a>
                                    <a href="#">log out</a>

                                </div>
                            </div>
                        </div>



                    </Container>
                </Navbar>
                {/* ************************** End Of Navbar ************************************************* */}


            </react.Fragment>
        )
    }
}
export default StudentNav;

