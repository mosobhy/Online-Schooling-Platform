import react, { Component } from "react";
import Navbar from '../Navbar/index';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./style.css";


class ViewAllCourses extends Component {
    state = {
        data: []
    }
   

    render() {
        // const { tableItems } = this.state;
        // const body = tableItems.map((item) => {
        //     return (
        //         <react.Fragment key={item.id}>
        //             <tr >
        //                 <td>{item.userId}</td>
        //                 <td>{item.title}</td>
        //                 <td>{item.completed}</td>
        //                 <td><button className="btn view-button" ><Link to="/course/">View</Link></button></td>
        //                 <td><button className="btn delete-button" >Delete</button></td>
        //             </tr>
        //         </react.Fragment>

        //     )

        // });
        return (
            <div>
                <Navbar />
                <div className="d-flex justify-content-center my-5">
                    <Table striped bordered hover className="table-control">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Course Name</th>
                                <th>Course Code</th>
                                <th>Views</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {body} */}

                        </tbody>
                    </Table>


                </div>
            </div>


        )
    }
}

export default ViewAllCourses;