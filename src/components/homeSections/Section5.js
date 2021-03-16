import React from 'react';
import location from "./section5/location.png";
import phone from "./section5/phone.png";
import message from "./section5/message.png";
import { Link } from "react-router-dom";

function Section5() {
    return (
        <div  className="section5">
            <section className="section5Row  container">
                <div>
                    <p>Ready to get started?</p>
                    <Link to="/contact"><button>Get started</button></Link>
                </div>

                <div>
                    <li className="redText">Services</li>
                    <p>Buy houses</p>
                    <p>Buy land</p>
                    <p>Consulting services</p>
                </div>

                <div>
                    <li className="redText">About</li>
                    <p>Our story</p>
                    <p>Benefits</p>
                    <p>Privacy policy</p>
                </div>

                <div>
                    <li className="redText">Contact Us</li>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={location} alt="location" />
                        <p>26, Ladoke Akintola, Bodija.</p>
                    </div>
                    
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={phone} alt="phone" />
                        <p>+234 809 125 6000</p>
                    </div>

                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={message} alt="message" />
                        <p>info@Abulesowo.ng</p>
                    </div>
                    

                </div>
            </section>
        </div>
    )
}

export default Section5
