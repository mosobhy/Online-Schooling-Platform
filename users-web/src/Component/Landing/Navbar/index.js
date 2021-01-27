import react, { Component } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiFillGithub, AiOutlineAmazon, AiOutlineBehance, AiOutlineTwitter } from "react-icons/ai";
import { BsJustify } from "react-icons/bs";
import $ from "jquery";
import {findDOMNode} from "react-dom";
import './Nav-style.css';

class NavBar extends Component {

    closeNav = () => {
      const width=  $(".left-side ").innerWidth();
        $(".parent").animate({ left: `-${width}` } , 100);

    }
    
    OpenNav = () => {
        const width=  $(".left-side ").innerWidth();
          $(".parent").animate({ left: `0px` } , 100);
  
    }
 
    render() {
        return (
        
 
            <div className="parent" >
                <div className="left-side " id="left-side ">
                    <div className="d-flex justify-content-between">
                       <img src="/image/logo-1.jpg"  width="100px" height="80px" />
                        <AiOutlineClose onClick={this.closeNav}  />
                    </div>
                    <p className="mt-5"> <Link to="/docter">Doctor Register</Link></p>
                    <p ><Link to="/student">Student Register</Link></p>
                    <p >  <Link to="/">Login</Link></p>

                    <div className="all-icons">
                        <AiFillGithub className="icon-1" />
                        <AiOutlineAmazon className="icon-2" />
                        <AiOutlineBehance className="icon-3" />
                        <AiOutlineTwitter className="icon-4" />
                    </div>
                </div>
                <div className="d-flex align-items-center open-icon">
                    <BsJustify onClick={this.OpenNav}/>
                </div>
            </div>
    )
}
}
export default NavBar;