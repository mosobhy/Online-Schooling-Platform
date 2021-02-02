import react, { Component } from "react";
import { Link } from "react-router-dom";
import { GiPositionMarker } from "react-icons/gi";
import {Navbar , Nav , Form , FormControl , Button } from 'react-bootstrap';
import './style.css';

class StudentNav extends Component {
    render() {
        return (
            <react.Fragment>
            

                <Navbar className="Studen-Nav">
                    <Navbar.Brand > <Link to="/studentPages/"><img src="/image/logo-1.jpg" width="50px" height="50px" /></Link></Navbar.Brand>
                    <Nav className="m-auto">
                        <Nav.Link ><Link to="/studentPages/courses">All courses</Link></Nav.Link>
                        <Nav.Link > <Link to="/studentPages/notifiction">Notifiction</Link></Nav.Link>
                    </Nav>
                  <GiPositionMarker  />
                </Navbar>
               
               
             

            </react.Fragment>
        )
    }
}

export default StudentNav;