import React, { useContext, useState } from 'react';
import {
    Link
} from "react-router-dom";
import { togglarStatus } from '../Home/Home';

import './Navbar.css';

const Navbar = () => {
    const [isTogglarActive,setIsTogglarActive]= useContext(togglarStatus);
    const handleToogleInfo =()=>{
        setIsTogglarActive(!isTogglarActive);
    }

    return (
        <div>
            {/* <h1>This is navbar</h1> */}
            <nav className="navbar sticky-top navbar-expand-lg navbar-light">
                <Link style={{ fontWeight: '800', fontSize: '30px' }} className="navbar-brand" to='/home'>PRO REPAIR</Link>
                <button onClick={handleToogleInfo} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active mx-3">
                            <Link style={{ fontWeight: '600' }} className="nav-link nav-link-color" to='/home'>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active mx-3">
                            <Link style={{ fontWeight: '600' }} className="nav-link nav-link-color" to='/dashboard'>Resume</Link>
                        </li>
                        <li className="nav-item active mx-3">
                            <Link style={{ fontWeight: '600' }} className="nav-link nav-link-color" to='/orders'>Projects</Link>
                        </li>
                        <li className="nav-item active mx-3">
                            <Link style={{ fontWeight: '600' }} className="nav-link nav-link-color" to='/services' >Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;