import react, { Component } from "react";
import Navbar from "../Navbar/index";
import CourseNav from "../Course-Nav/index";
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import "./style.css";
import { Carousel } from 'react-bootstrap';

class CreateQuiz extends Component {

    state = {
        show: false,
        showQuizForm: false,
        value: '',
        data: [],
        counter: 0
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

    OpenCreateQuizForm = () => {
        this.setState({
            showQuizForm: true
        })
    }

    showFirstQu = () => {
        this.setState({
            show: false,
            showQuizForm: true
        })
    }

    CloseCreateQuizForm = () => {
        this.setState({
            showQuizForm: false

        })
    };

    handleCreateQuizForm = () => {
        this.setState({
            show: false,
            showQuizForm: true
        })
    };

    change = (e) => {
        this.state.value = e.target.value;
    }



    handleGetData = (e) => {
     
        e.preventDefault();
        if (this.state.counter <= this.state.value) {
            this.FormQuiz();
            this.cleanData();
        } else {
           console.log("hello")
        }

    }

    decrCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    cleanData = () => {
        document.getElementById('title').value = '';
        document.getElementById('firstAn').value = '';
        document.getElementById('secondAn').value = '';
        document.getElementById('thirdAn').value = '';
        document.getElementById('fourthAn').value = '';
        document.getElementById('correctAn').value = '';
        document.getElementById('point').value = '';
    }



    FormQuiz = () => {

        const title = document.getElementById('title').value;
        const firstAn = document.getElementById('firstAn').value;
        const secondAn = document.getElementById('secondAn').value;
        const thirdAn = document.getElementById('thirdAn').value;
        const fourthAn = document.getElementById('fourthAn').value;
        const correctAn = document.getElementById('correctAn').value;
        const point = document.getElementById('point').value;

        const Container = {
            title: title,
            first: firstAn,
            second: secondAn,
            third: thirdAn,
            fourth: fourthAn,
            correctAn: correctAn,
            point: point
        };

        this.state.data.push(Container);
        console.log(this.state.data);
    }



    render() {
      
    
        let FormBodyArray =
                <Modal.Body className="pop-body">
                    <div className="sub-form">
                       
                        {/* ***** Question ******* */}
                        <form onSubmit={this.handleGetData } >
                            <Form.Label>Question Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title" id="title" />
                            {/* **** Answers ******** */}
                            <Form.Label>Question Answers</Form.Label>
                            <div className='AnswerOptions'>
                                <Row>
                                    <Col md={3}>
                                        <Form.Control type="text" placeholder="First Answer" id="firstAn" />
                                    </Col>
                                    <Col md={3}>
                                        <Form.Control type="text" placeholder="Second Answer" id="secondAn" />
                                    </Col>
                                    <Col md={3}>
                                        <Form.Control type="text" placeholder="Third Answer" id="thirdAn" />
                                    </Col>
                                    <Col md={3}>
                                        <Form.Control type="text" placeholder="Fourth Answer" id="fourthAn" />
                                    </Col>
                                </Row>
                            </div>
                            {/* **** Correst Answer ******** */}
                            <Form.Label>Correct Answer</Form.Label>
                            <Form.Control type="text" placeholder="Enter the correct Answer" id="correctAn" />
                            {/* **** Question Degree ******** */}
                            <Form.Label>Question Points</Form.Label>
                            <Form.Control type="text" placeholder="Enter the Point" id="point" />

                            <button className="btn-danger btn" type="submit" onClick={this.decrCounter} > Submit </button>
                        </form>
                    </div>
                </Modal.Body>
     





        return (
            <div className="App">
                <Navbar />
                <CourseNav />

                <div className="d-flex flex-column align-items-center justify-content-center h-100">
                    <div className="quiz-img">
                        <img src="/image/quiz.jpg" className=" img-fluid" />
                    </div>
                    <button onClick={this.handleShow} className="quiz-btn">&lt; Create Quiz / &gt;</button>
                </div>

                {/* ############# pop up quiz #################  */}
                <Modal show={this.state.show} onHide={this.handleClose} centered keyboard={false} className="pop-parent">
                    <Modal.Header closeButton className="pop-header">
                        <Modal.Title>Quiz</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="pop-body">

                        <Form.Label>Number Of Questions</Form.Label>
                        <Form.Control type="text" placeholder="Enter A Number" onChange={e => this.change(e)} />

                    </Modal.Body>
                    <Modal.Footer className="pop-footer">
                        <Button onClick={this.showFirstQu}>
                            Submit
                            </Button>
                    </Modal.Footer>
                </Modal>

                {/* ###################### CreateQuizForm ###################################*/}

                <Modal show={this.state.showQuizForm} onHide={this.CloseCreateQuizForm} centered keyboard={false} className="pop-parent" >
                    <Modal.Header closeButton className="pop-header">
                        <Modal.Title>Quiz</Modal.Title>
                    </Modal.Header>

            

                        {FormBodyArray}

              


                    <Modal.Footer className="pop-footer">
                        <Button type="button" >
                            Next
                </Button>
                    </Modal.Footer>
                </Modal>



            </div>

        )
    }
}

export default CreateQuiz;