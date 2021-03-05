import React from 'react'
import facebook from "./section6/facebook.png";
import twitter from "./section6/twitter.png";
import instagram from "./section6/instagram.png";

function Section6() {
    return (
        <div className="section6 container">
            <section className="six">
                <div style={{float: "left"}}><a href="#">Terms & Conditions</a>     <a href="#">Privacy Policy</a></div>

                <div style={{float: "right"}}>
                    <a href="#"><img src={facebook} alt="facebook" /></a>     <a href="#"><img src={twitter} alt="twitter" /></a>
                    <a href="#"><img src={instagram} alt="instagram"  className="icon3" /></a>
                </div>
            </section>
        </div>
    )
}


export default Section6
