import React from 'react';
import './AboutMe.css';
import {
    Link
} from "react-router-dom";
import Typical from 'react-typical';
import myImg from '../../Project Image/me.JPG'
import Banner from '../Banner/Banner';

const AboutMe = () => {
    const handleClick = () => {
        document.getElementById('services').scrollIntoView();
    }

    function download(url) {
        const a = document.createElement('a')
        a.href = url
        a.download = url.split('/').pop()
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }

    return (
        <div className="container">
            <h2 id="about-me-title">About me</h2>
            <div className="row about-short-row">
                <div className="col-md-6 about-short-col">
                    <div className="about-short-description d-flex align-items-center">
                        <div>
                            <div className="typing-height-div">
                            <div class="text">I'm Dipta Sikder and <span class="typing-2 about-me-typing">
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
                            </div>
                            <p className="text-justify about-details-text-color">I think I am able to do any programming-related task by handling difficult and hard situations at any time. I have a lot of skills in JavaScript, React and Node.js And I have done many projects related to this. I have knowledge of a variety of technologies, programming languages, and frameworks. <br /><br /> Especially has a lot of knowledge on HTML 5, CSS3, Bootstrap, Firebase, React Js and MongoDb.</p>
                            {/* <a href="#">Hire me</a> */}
                            {/* <Link onClick={()=>{downloadFile("https://drive.google.com/file/d/1yraIk8j8VFBJ4ftIjWIwLdQAlAMkJSId/view?usp=sharing", filename)}} className="btn btn-success">DOWNLOAD RESUME</Link> */}

                            {/* <a target="_blank" href="https://drive.google.com/file/d/1yraIk8j8VFBJ4ftIjWIwLdQAlAMkJSId/view?usp=sharing" className="btn btn-success">DOWNLOAD RESUME</a> */}

                            <Link onClick={handleClick} className="text-button">HIRE ME</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 about-short-col">
                    {/* about-short-img */}
                    <div className="about-short-img-div">
                        <img className="img-fluid about-short-img" src={myImg} alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutMe;