import React from 'react';
import './AboutMe.css';
import {
    Link
} from "react-router-dom";
import Typical from 'react-typical';
import Banner from '../Banner/Banner';

const AboutMe = () => {
    return (
        <div className="container">
            <h2 id="about-me-title">About me</h2>
            <div className="row about-short-row">
                <div className="col-md-6 about-short-col">
                    <div className="about-short-description d-flex align-items-center">
                        <div>
                            <div class="text">I'm Dipta Sikder and I'm <span class="typing-2">
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
                            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>
                            {/* <a href="#">Hire me</a> */}
                            <Link className="btn btn-success">DOWNLOAD RESUME</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about-short-img-div">
                        <img className="about-short-img" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutMe;