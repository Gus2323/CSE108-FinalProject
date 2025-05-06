import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navbar from "../Components/Navbar"; // Reuse your site's nav
import QueueSection from "../customer/QueueSection";
import TableAssignment from "../customer/TableAssignment";
import MenuSection from "../customer/MenuSection";

const CustomerDashboard = () => {
  return (
    <div className="customer-dashboard" style={{ minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
      <Navbar />
      <Container className="pt-5">
        <h2 className="text-center mb-4">Customer Dashboard</h2>
        <Row className="mb-4">
          <Col md={6}>
            <QueueSection />
          </Col>
          <Col md={6}>
            <TableAssignment />
          </Col>
        </Row>
        <Row>
          <Col>
            <MenuSection />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CustomerDashboard;
