import react, { Component } from "react";
import Navbar from "../Navbar/index";
import {Row , Col, Container} from 'react-bootstrap';
import Owldemo1 from "../owlcarasol/owl" ;
import './style.css';

class HomePage extends Component{
    render() {
        return (
            <div>
                <Navbar />  
                
                <Container>
                {/* Header Section */}
                <header className="header"> 
                    <div className="header-container mt-5">
                    <Row >
                        <Col md={{ span: 4, offset: 1}} className="header-text text-left">
                            <h1> 
                            <span>welocme to</span> 
                            <span>student page</span>
                            </h1>
                            <p>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Vitae odio debitis nesciunt  <br /> reiciendis aliquam </p>
                        </Col>
                        <Col md={6} >
                        <div className="test">
                        <img src="/image/studentHome.jpg"  className="img-fluid header-img "/>
                        </div>
                        </Col>
                    </Row>
                    </div>
                </header>

                 {/*End Header Section */}
                 <Owldemo1 btnText = "View Course" btnTextPrimary = "View All" primaryHeader="Your Enrolled Courses"/>
                 <Owldemo1 btnText = "Join Course" btnTextPrimary = "Join All" primaryHeader="Join Courses"/>
                </Container>
                
  
           </div>
        )
    }
}
export default HomePage;