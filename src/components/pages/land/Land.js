import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { Link } from "react-router-dom";

const Land = ({ item }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="property-item">
        <Card.Img variant="top" alt={item.id} src={item.image} />
        <Card.Body>
          <Card.Title className="redText">{item.title}</Card.Title>
                  <Card.Text>{item.body}</Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Link href="#"><Link>More details</Link></Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Land;