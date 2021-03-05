import React from 'react';
import "./form.css"
import {Link} from "react-router-dom";

const RequestForm = () => {
    return (
        <div className="mainrequestformcontainer">
             <div className="formcontainer">
                    <div>
                        <h3>Request to visit a location</h3>
                    </div>

                    <form>
                                <label for="fname">Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="Enter your first and last name" />

                                <label for="number">Phone Number</label>
                                <input type="number" placeholder="Kindly enter your phone number" />

                                <label for="mail">Gmail</label>
                                <input type="mail" placeholder="Kindly enter your gmail" />

                                <label for="date">Pick a suitable date</label>
                                <input type="date" />

                                <label for="message">Message</label>
                                <textarea className="textarea" />

                            
                                <input type="submit" value="Submit" />
                            </form>

                            
            </div>
        </div>
        
    )
}

export default RequestForm
