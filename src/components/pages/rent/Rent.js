import React from "react";

const Rent = ({item}) => {
    return (
        <div className="property-item">
            <h1 className="redText">{item.title}</h1>
            <p>{item.body}</p> 
        </div>
    )
}

export default Rent;
