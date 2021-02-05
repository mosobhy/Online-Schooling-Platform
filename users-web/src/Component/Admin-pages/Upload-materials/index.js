import react, { Component } from "react";
import Navbar from "../Navbar/index";
import { Form, Button, Modal } from 'react-bootstrap';
import CourseNav from "../Course-Nav/index";
import "./style.css";

class UploadMaterials extends Component {

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


    handelFileUpload = (e) => {
        e.preventDefault();
        const file = document.getElementById("myFile").value;
        const fileDesc = document.getElementById('exampleForm.ControlTextarea1').value;
       
    }



    render() {

        return (
            <div>
                <Navbar />
                <CourseNav />
                <div className="start-page">
                    <img src="/image/upload-1.jpg" className="img-fluid" />
                    <p>You haven't uploaded any items yet ,, upload now ...</p>
                    <span onClick={this.handleShow} >Click to Upload</span>

                    {/*CREATE MATERIALS POP UP FORM TO GET DATA */}

                    <Modal show={this.state.show} onHide={this.handleClose} centered keyboard={false} className="pop-parent" >
                        <Modal.Header closeButton className="pop-header">
                            <Modal.Title>Upload Materials</Modal.Title>
                        </Modal.Header>
                        <form onSubmit={this.handelFileUpload} >
                            <Modal.Body className="pop-body" >


                                <Form.Label>Select File</Form.Label>
                                <br />
                                <input className="inputFile" type="file" placeholder="FILE...." id="myFile" multiple />

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>TYPE DESC....</Form.Label>
                                    <Form.Control as="textarea" rows={3}/>
                                </Form.Group>


                            </Modal.Body>
                            <Modal.Footer className="pop-footer">
                                <Button type="submit" onClick={this.handleClose} >
                                    Upload
                            </Button>
                            </Modal.Footer>
                        </form>
                    </Modal>



                </div>
            </div >
        )
    }
}

export default UploadMaterials;