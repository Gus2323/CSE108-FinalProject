import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const TableAssignment = () => {
  const [tableNumber, setTableNumber] = useState(null);

  useEffect(() => {
    // Simulate fetch from backend
    setTimeout(() => {
      setTableNumber("Table 5"); // Replace with API call
    }, 1000);
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Table Assignment</Card.Title>
        <Card.Text>
          {tableNumber ? `You have been assigned to ${tableNumber}.` : "Waiting for table assignment..."}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TableAssignment;
