import react, { Component } from "react";
import Navbar from "../Navbar/index";
import CourseNav from "../Course-Nav/index";
import "./style.css";

class UploadMaterials extends Component {
    state = {
        file: []
    }
    componentDidMount() {
        document.getElementById("fileForm").addEventListener("submit",  () => {
            const myFile = document.getElementById("UploadFile").value;
            console.log(myFile);

        })
    }

    render() {
  
        return (
            <div>
                <Navbar />
                <CourseNav />
                <div className="start-page">
                <img src="/image/upload-1.jpg" className="img-fluid" />
                <p>You haven't uploaded any items yet ,, upload now ...</p>

                <from id="fileForm" encType="multipart/form-data">
                    <input type="file" id="UploadFile" multiple />
                 
                </from>

            </div>
            </div >
        )
    }
}

export default UploadMaterials;