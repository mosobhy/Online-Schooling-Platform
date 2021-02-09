import react, { Component } from "react";
import Navbar from "../Navbar/index";
import CourseNav from "../Course-Nav/index";
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import "./style.css";

class CreateQuiz extends Component {

    state = {

        show: false,
        showQuizForm: false,
        value: '',
        data: [],
        counter: 0 , 
        quizTime : '' , 
        quizDate : '' , 
        quizPeriod : 0
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

    showFirstQu = (e) => {
       //2021-02-19 06:39
       
       e.preventDefault();
        this.setState({
            quizDate : document.getElementById('quizDate').value ,
            quizTime : document.getElementById('quizTime').value , 
            quizPeriod :document.getElementById('quiz-Per').value ,
            show: false,
            showQuizForm: true
        })
        console.log(this.state.quizTime , this.state.quizPeriod);
        let QuizDate = JSON.stringify(this.state.quizDate); 
        localStorage.setItem("QuizDate" , QuizDate) ;

        let QuizTime = JSON.stringify(this.state.quizTime); 
        localStorage.setItem("QuizTime" , QuizTime) ;

        let QuizPeriod = JSON.stringify(this.state.quizPeriod); 
        localStorage.setItem("quizPeriod" , QuizPeriod) ;
        
        // console.log(document.getElementById('quizDate').value);
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

    // clearQuiz () => {
    //     localStorage.clear() ;
    // }

    handleGetData = (e) => {
     
        e.preventDefault();
        if (this.state.counter <= (this.state.value )) {
            this.FormQuiz();
            this.cleanData();
        } else {
        let data = JSON.stringify(this.state.data); 
        localStorage.setItem("my-data" , data) ;
        
        }
        console.log(this.state.quizTime);

    }

    increaseCounter = () => {
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

        const questionText = document.getElementById('title').value;
        const point = document.getElementById('point').value;
        const isCorrect = document.getElementById('correctAn').value;
        const firstAn = document.getElementById('firstAn').value;
        const secondAn = document.getElementById('secondAn').value;
        const thirdAn = document.getElementById('thirdAn').value;
        const fourthAn = document.getElementById('fourthAn').value;

        let firstCorr = false ;
        let secondCorr = false ;
        let thirdCorr = false ;  
        let fourthCorr = false ;  
        
        if (firstAn == isCorrect ) {
            firstCorr = true ;
        }
        else if (secondCorr == isCorrect){
            secondCorr = true ;
        }
        else if (thirdAn == isCorrect){
            thirdCorr = true ;
        }
        else{
            fourthCorr = true ;
        }

        let answers = [
            { answerText : firstAn , isCorrect :  firstCorr},
            { answerText : secondAn , isCorrect : secondCorr},
            { answerText : thirdAn , isCorrect  : thirdCorr} ,
            { answerText : fourthAn , isCorrect : fourthCorr},
        ];

        const Container = {
            questionText: questionText,
            answerOptions : answers ,
            point: point
        };

        this.state.data.push(Container);
        // console.log(this.state.data);
    }



    render() {
      
    
        let FormBodyArray =
                <Modal.Body className="pop-body">
                    <div className="sub-form">
                       
                        {/* * Question *** */}
                        <form onSubmit={this.handleGetData } >
                            <Form.Label>Question Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title" id="title" />
                            {/* * Answers *** */}
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
                            {/* * Correst Answer *** */}
                            <Form.Label>Correct Answer</Form.Label>
                            <Form.Control type="text" placeholder="Enter the correct Answer" id="correctAn" />
                            {/* * Question Degree *** */}
                            <Form.Label>Question Points</Form.Label>
                            <Form.Control type="text" placeholder="Enter the Point" id="point" />
                            <div className="sub-btn">
                            <button type="submit" onClick={this.increaseCounter} > Submit </button>
                            </div>
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
                   <div>
                   <button onClick={this.handleShow} className="quiz-btn">&lt; Create New Quiz / &gt;</button>
                   <button onClick={this.clearQuiz} className="quiz-btn clear-quiz">&lt; Delete Last Quiz / &gt;</button>
                   </div>
                </div>

                {/* ############# pop up quiz #################  */}
                <Modal show={this.state.show} onHide={this.handleClose} centered keyboard={false} className="pop-parent">
                    <Modal.Header closeButton className="pop-header">
                        <Modal.Title>Quiz</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="pop-body">
                    <form onSubmit={this.showFirstQu } >
                        <Form.Label>Number Of Questions</Form.Label>
                        <Form.Control type="text" placeholder="Enter A Number" onChange={e => this.change(e)} />

                        <Form.Label>Enter The Quiz Date</Form.Label>
                        <Form.Control type="date" id="quizDate"/>

                        <Form.Label>Enter The Quiz Starting Time</Form.Label>
                        <Form.Control type="time" id="quizTime"/>

                        <Form.Label>Enter The Quiz Period</Form.Label>
                        <Form.Control type="Number" id="quiz-Per"  />
                           
                            <button type="submit" className="createQuizBtn"> Submit </button>
                    </form>
                    </Modal.Body>
                    <Modal.Footer className="pop-footer">
                    </Modal.Footer>
                </Modal>

                {/* ###################### CreateQuizForm ###################################*/}

                <Modal show={this.state.showQuizForm} onHide={this.CloseCreateQuizForm} centered keyboard={false} className="pop-parent" >
                    <Modal.Header closeButton className="pop-header">
                        <Modal.Title>Quiz</Modal.Title>
                    </Modal.Header>

            

                        {FormBodyArray}

              


                    <Modal.Footer className="pop-footer">
                        <Button type="button" onClick={this.CloseCreateQuizForm}>
                            Go To Quiz
                </Button>
                    </Modal.Footer>
                </Modal>



            </div>

        )
    }
}

export default CreateQuiz;