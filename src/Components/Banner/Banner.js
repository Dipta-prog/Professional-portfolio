import React from 'react';
import './Banner.css';
import {
    Link
} from "react-router-dom";
import Typical from 'react-typical';
import myImg from '../../Project Image/me.JPG'


const Banner = () => {
    const handleClick = () => {
        document.getElementById('services').scrollIntoView();
    }
    return (
        <div className="div-height d-flex align-items-center">
            <div className="container">
                <div>
                    <div className="card">
                        <div className="row container-fluid">
                            <div className="col-md-6">
                                {/* <p>part-1</p> */}
                                <img className="my-img" src={myImg} alt="" />
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
                                    <a target="_blank" href="https://drive.google.com/file/d/1yraIk8j8VFBJ4ftIjWIwLdQAlAMkJSId/view?usp=sharing" className="text-button">DOWNLOAD RESUME</a>
                                    {/* <Link onClick={handleClick} className="text-button">DOWNLOAD RESUME</Link> */}
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