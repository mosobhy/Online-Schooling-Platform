import react, { Component } from "react";
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Docter from "./Component/Landing/Docter-register/index";
import Student from "./Component/Landing/Student-register/index";
import Login from "./Component/Landing/Login/index";
import Home from "./Component/Admin-pages/All-notification/index";
import ViewAllCourses from "./Component/Admin-pages/View-all-courses/index";
import UploadMaterials from "./Component/Admin-pages/Upload-materials/index";
import GoLive from "./Component/Admin-pages/Go-live/index";
import CreateQuiz from "./Component/Admin-pages/Create-quiz/index";
import News from "./Component/Admin-pages/News/index";
import StudentHome from "./Component/Student-pages/Home-Page/index";
import StudentCourses from "./Component/Student-pages/All-courses/index";
import StudentNotifiction from "./Component/Student-pages/Notification/index";
import StudentMaterials from "./Component/Student-pages/Materials/index";
import StudentQuiz from "./Component/Student-pages/Qize/index";
import StudentJoinCourse from "./Component/Student-pages/Join-Course/index"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (


      <div className="App">
        <BrowserRouter>
          {/* landing links */}
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/docter" component={Docter}></Route>
          <Route exact path="/student" component={Student}></Route>

          {/* docter links public */}
          <Route exact path="/admin/" component={Home}></Route>

          <Route exact path="/admin/view" component={ViewAllCourses}></Route>
       {/* course detalis links */}
          <Route exact path="/course/" component={News}></Route>
          <Route exact path="/course/materials" component={UploadMaterials}></Route>
          <Route exact path="/course/live" component={GoLive}></Route>
          <Route exact path="/course/quiz" component={CreateQuiz}></Route>

          {/* student pages links */}
          <Route exact path="/studentPages/" component={StudentHome}></Route>
          <Route exact path="/studentPages/courses" component={StudentCourses}></Route>
          <Route exact path="/studentPages/notifiction" component={StudentNotifiction}></Route>
          <Route exact path="/YourMaterials/" component={StudentMaterials}></Route>
          <Route exact path="/YourQuiz/" component={StudentQuiz}></Route>
          <Route exact path="/studentPages/JoinCorse" component={StudentJoinCourse}></Route>


        </BrowserRouter>
      </div>



    );

  }

}
export default App;
