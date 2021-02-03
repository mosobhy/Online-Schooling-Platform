<<<<<<< HEAD
=======
<<<<<<< HEAD
import react, { Component } from "react";
import Navbar from "../Navbar/index";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

class AllCourses extends Component {
    state = {
        tableItems: []
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(req => req.json())
            .then(data => {
                this.setState({
                    tableItems: data
                })
            })
    }

    render() {
        const { tableItems } = this.state;
        const body = tableItems.map((item) => {
            return (
                <react.Fragment key={item.id}>
                    <tr >
                        <td>{item.userId}</td>
                        <td>{item.title}</td>
                        <td>{item.completed}</td>
                        <td><button className="btn view-button" ><Link to="/YourCourse/">Visit</Link></button></td>
                    </tr>
                </react.Fragment>

            )

        });
        return (
            <div>
                <Navbar />
                <div className="d-flex justify-content-center">
                    <Table striped bordered hover className="table-student-control">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Course Name</th>
                                <th>Course Code</th>
                                <th>Views</th>
                            </tr>
                        </thead>
                        <tbody>
                            {body}

                        </tbody>
                    </Table>


                </div>
            </div>


        )
    }
}

=======
>>>>>>> 4a9d9251ed24421a972f6c45c2b660aa346f817d
import react, { Component } from "react";
import Navbar from "../Navbar/index";
import './style.css';

class AllCourses extends Component{
    render() {
        return (
            <react.Fragment>
                <Navbar />
              <h1>All Courses</h1>
            </react.Fragment>
        
        )
    }
}

<<<<<<< HEAD
=======
>>>>>>> 1e1f50e637a7ac6a753c44b8411abcdeba92b254
>>>>>>> 4a9d9251ed24421a972f6c45c2b660aa346f817d
export default AllCourses;