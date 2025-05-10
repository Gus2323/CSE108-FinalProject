import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const MenuSection = () => {
  const menuItems = [
    { name: "item 1", price: "$15" },
    { name: "item 2", price: "$10" },
    { name: "item 3", price: "$8" },
  ];

  return (
    <Card>
      <Card.Body>
        <Card.Title>Our Menu</Card.Title>
        <ListGroup>
          {menuItems.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.name} <span className="float-end">{item.price}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default MenuSection;
