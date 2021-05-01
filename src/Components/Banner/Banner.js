import React from 'react';
import './Banner.css';
import {
    Link
} from "react-router-dom";
import Typical from 'react-typical'


const Banner = () => {
    const handleClick = () => {
        document.getElementById('services').scrollIntoView();
    }
    return (
        <div className="div-height d-flex align-items-center">
            <div className="container">
                <div className="margin-test">
                    <div className="card">
                        <div className="row container-fluid">
                            <div className="col-md-6">
                                {/* <p>part-1</p> */}
                                <img className="my-img" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            </div>
                            <div className="col-md-6 info">
                                <div className="home-content">
                                    <div className="text-1">Hello, my name is</div>
                                    <div className="text-2">Dipta Sikder</div>
                                    <div className="text-3">And I'm - <span className="typing"><br />
                                        <Typical
                                            loop={Infinity}
                                            wrapper="b"
                                            steps={[
                                                'An Engineer',
                                                2000,
                                                'A Developer!',
                                                2000
                                            ]}
                                        ></Typical>
                                    </span></div>
                                    {/* <a href="#">Hire me</a> */}
                                    <Link onClick={handleClick} className="btn btn-success">HIRE ME</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </div>
    );
};

export default Banner;