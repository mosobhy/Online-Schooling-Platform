import react, { Component } from "react";
import './Home-style.css';
import { FaHandHoldingHeart } from 'react-icons/fa';


class Home extends Component {


    render() {
        return (
            <div className="home-parent" style={{ backgroundImage: `url('/image/bg-1.jpg')` }}>
                <div className="layer"></div>
                <div className="d-flex align-items-center m-auto h-100 content-parent">
                    <div className=" home-content" >
                        <h4>Hey!</h4>
                        <p>Welcome to our website. We are here for you to provide everything you could need <FaHandHoldingHeart /></p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;