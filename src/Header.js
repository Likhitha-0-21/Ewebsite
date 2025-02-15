import React from "react";
import Logo from './Images/Shein2.png';
import {Link} from 'react-router-dom';
function Header(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 topheader">
                    <button className="btn btn-danger">Welcome</button> Awesome you are at Shein
                </div>
            </div>
            <div className="row topheader1">
                <div className='col-2'>
                <img  src={Logo} width='100px' ></img>
                </div>
                <div className="col-10">
                    <div className="menu">
                        <div className="btn-group topheader2">
                            <Link to="/" className="btn btn" >
                                Home
                            </Link>
                            <Link to="/about" className="btn btn" >
                                About Us
                            </Link>
                            <Link to="/services" className="btn btn" >
                                Services
                            </Link>
                            <Link to="/Careers" className="btn btn">
                                Careers
                            </Link>
                            <Link to="/contact" className="btn btn" >
                                Contact
                            </Link>
                            <div className="col-2">
                                <button className="btn btn-dark ">Alert 🕭</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header