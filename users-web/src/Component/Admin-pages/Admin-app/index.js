import react, { Component } from "react";
import { Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar/index';
import Home from "./All-notification/index";
import AllCourses from "./View-all-courses/index";
import "./style.css";


class AdminApp extends Component {
    render() {
        return (
            <div className="App">

                <BrowserRouter>
                    <Navbar />
                    <Route exact path="http://localhost:3000/admin/" component={Home}></Route>
                    <Route path="http://localhost:3000/admin/view" component={AllCourses}></Route>
                </BrowserRouter>

            </div>
        )
    }
}