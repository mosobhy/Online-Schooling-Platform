import React,  {useState} from "react";
import Navbar from "../Navbar/index";
import StudentSideNav from "../student-sideNav/index";
import './style.css';
import { Timer } from 'react-countdown-clock-timer';

export default function Qize () {
    
    let data = [] , QuizDate = '' , QuizTime = '' , time = null ;
		
    QuizDate = JSON.parse(localStorage.getItem("QuizDate")) ;  
    data = JSON.parse(localStorage.getItem("my-data")) ;  
    
    QuizTime = JSON.parse(localStorage.getItem("QuizTime")) ;
    
		let period = JSON.parse(localStorage.getItem("quizPeriod")) ;
    
		time = QuizDate + ' ' + QuizTime ;
		// time =null
		 console.log(period); 
    
		// [
	// 	{
	// 		questionText: 'What is the capital of France?',
	// 		answerOptions: [
	// 			{ answerText: 'New York', isCorrect: false },
	// 			{ answerText: 'London', isCorrect: false },
	// 			{ answerText: 'Paris', isCorrect: true },
	// 			{ answerText: 'Dublin', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Who is CEO of Tesla?',
	// 		answerOptions: [
	// 			{ answerText: 'Jeff Bezos', isCorrect: false },
	// 			{ answerText: 'Elon Musk', isCorrect: true },
	// 			{ answerText: 'Bill Gates', isCorrect: false },
	// 			{ answerText: 'Tony Stark', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'The iPhone was created by which company?',
	// 		answerOptions: [
	// 			{ answerText: 'Apple', isCorrect: true },
	// 			{ answerText: 'Intel', isCorrect: false },
	// 			{ answerText: 'Amazon', isCorrect: false },
	// 			{ answerText: 'Microsoft', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'How many Harry Potter books are there?',
	// 		answerOptions: [
	// 			{ answerText: '1', isCorrect: false },
	// 			{ answerText: '4', isCorrect: false },
	// 			{ answerText: '6', isCorrect: false },
	// 			{ answerText: '7', isCorrect: true },
	// 		],
	// 	},
	// ]


	// code format >>  8-FEB-2021 08:00:00 

  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
  const [currentCorrectQ , setcurrentCorrectQ] = useState(0) ; 
	const [score, setScore] = useState(0);
  const [totalMark , setTotalMark] = useState(0) ;
    
	const handleAnswerOptionClick = (isCorrect ) => {
        setTotalMark(totalMark + parseInt(data[currentQuestion].point))
        setcurrentCorrectQ(currentCorrectQ + 1 ) ;
		if (isCorrect) {
            
			setScore(score + parseInt(data[currentCorrectQ].point));
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < data.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	{/* ****************************************** count Down  ****************************************** */}
	// var test = "03/25/2015 08:00:00"
	// , test2 = "08:00:00" ;
	
	{/* ****************************************** End count Down  ****************************************** */}

    return(

        <>
        <Navbar />
        <StudentSideNav />

				
     { localStorage.getItem('my-data') != null ? 
           (
						
						<div className="d-flex justify-content-center align-items-center ">
						<div className='timer-container quiz-time'>
        <Timer
        durationInSeconds={period*60}
        formatted={true}
        isPaused={false}
        showPauseButton={false}
        showResetButton={false}
  
        onStart = {()=> {
            console.log('Triggered when the timer starts')
          }}
    
       onFinish = {()=> {
           console.log('Triggered when the timer finishes')
         }}
        />
      </div>
            <div className='quiz-app'>
			{ showScore ? (
				<div className='score-section'>
					You scored {score} out of {totalMark}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{data.length}
						</div>
						<div className='question-text'>{data[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{data[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => {handleAnswerOptionClick(answerOption.isCorrect )}}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
            </div>
           ) : (
              <>
              <div className="Student-Qize-Parent">
                <img src="/image/quiz-1.jpg" className="img-fluid" />
                    <p>There are no <span>QIZE</span> uploaded for this class.</p>
                    <p>Check back later. 👍</p>


            </div>
              </>
           )

        } 

        </>
);

}

{/* 
						<div id="timer"></div>





						var startTime , createtionTime , diff, days , hours , mins , secs , d , h , m , s ,test ; 
	
	function updateTimer() {
		// future
		startTime = Date.parse(time);
		// oldest 
		createtionTime =  new Date();
		diff = startTime - createtionTime;

		days = Math.floor(diff / (1000 * 60 * 60 * 24));
		hours = Math.floor(diff / (1000 * 60 * 60));
		mins = Math.floor(diff / (1000 * 60));
		secs = Math.floor(diff / 1000);

		d = days;
		h = hours - days * 24;
		m = mins - hours * 60;
		s = secs - mins * 60;

	// 	test = <> 
	// 	<div><div id="countText">The Exam Will Start After</div></div>
	// 	<div>
	// 	<div>  {d}  <span>days</span></div> 
	// 	<div>  {h}  <span>hours</span></div> 
	// 	<div>  {m}  <span>minutes</span></div> 
	// 	<div>  {s}  <span>seconds</span></div>
	// </div>
		
	// </>

	if (localStorage.getItem('my-data') != null) {

		document.getElementById("timer")
		.innerHTML =
		'<div><div id="countText">The Exam Will Start After</div></div>'+
			'<div>'+	
			'<div>' + d + '<span>days</span></div>' +
			'<div>' + h + '<span>hours</span></div>' +
			'<div>' + m + '<span>minutes</span></div>' +
			'<div>' + s + '<span>seconds</span></div>'+	
			'</div>';	
		}

		 
	} 
	
	setInterval(updateTimer, 1000);

*/}