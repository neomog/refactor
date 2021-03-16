import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { Link } from "react-router-dom";

const Rent = ({item}) => {
    return (
        <div >
                    {/* <h1 className="redText">{item.title}</h1>
                    <p>{item.body}</p> 
                    <Link to="/property-details" style={{color: "#dc3545", textDecoration: "underline"}}>More details</Link> */}

                    <Card style={{ width: '18rem' }} className="property-item">
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
            <Card.Title className="redText">{item.title}</Card.Title>
            <Card.Text>
            {item.body}
            </Card.Text>
        </Card.Body>
        {/* <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup> */}
        <Card.Body>
            <Card.Link href="#">More details</Card.Link>
            {/* <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
        </Card>
        </div>
    )
}

export default Rent;
