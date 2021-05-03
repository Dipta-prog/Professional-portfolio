import React from 'react';
import './ContactMe.css';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactMe = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_64dbk58', 'template_lezarna', e.target, 'user_0YWIRfHSvSec8zcZvoQdH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }

    return (
        <div className="pb-4">
            <h3 className="about-contactMe-header">Contact Me</h3>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {/* <FontAwesomeIcon className="text-white" icon={faCoffee} /> */}

                        <div className="column left">
                            <div className="text">Get in Touch</div>
                            <p className="text-white text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
                            <div className="icons text-white">
                                <div className="row px-3 pt-2 pb-2">
                                    <div className="d-flex justify-content-center">
                                        {/* <i className="fas fa-user"></i> */}
                                        <div className="text-white contact-form-icons">
                                            <FontAwesomeIcon className="" icon={faUser} />
                                        </div>
                                        <div className="name-div">
                                            <p>Name</p>
                                            <p>Dipta Sikder</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row px-3 pt-2 pb-2">
                                    {/* <i className="fas fa-map-marker-alt"></i> */}
                                    <div className="d-flex justify-content-between">
                                        <div className="text-white contact-form-icons">
                                            <FontAwesomeIcon className="" icon={faMapMarkerAlt} />
                                        </div>
                                        <div className="address-div">
                                            <p>Address</p>
                                            <p>Dhaka, Bangladesh</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row px-3 pt-2 pb-2">
                                    {/* <i className="fas fa-envelope"></i> */}
                                    <div className="d-flex justify-content-between">
                                        <div className="text-white contact-form-icons">
                                            <FontAwesomeIcon className="" icon={faEnvelope} />
                                        </div>
                                        <div className="email-div">
                                            <p>Email</p>
                                            <p>anotheramit8@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text">Message me</div>
                        <form className="contact-form" onSubmit={sendEmail}>
                            {/* <input className="form-control" placeholder="Enter Your Name" type="hidden" name="contact_number" /> */}
                            {/* <label>Name</label> */}
                            <input className="form-control my-3" placeholder="Enter Your Name" type="text" name="name" />
                            {/* <label>Email</label> */}
                            <input className="form-control " placeholder="Enter Your Email" type="email" name="email" />
                            {/* <label>Message</label> */}
                            <textarea className="form-control mt-3" placeholder="Write & Send Your Message to Me" name="message" />
                            <br />
                            <div className="d-flex justify-content-end">
                                <input className="text-button mt-0" type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;