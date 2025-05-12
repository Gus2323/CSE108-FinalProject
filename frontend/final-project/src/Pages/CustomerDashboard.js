import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navbar from "../Components/Navbar"; // Reuse your site's nav
import QueueSection from "../customer/QueueSection";
import TableAssignment from "../customer/TableAssignment";
import MenuSection from "../customer/MenuSection";

const CustomerDashboard = () => {
  return (
    <div className="customer-dashboard" style={{ minHeight: "100vh",         
        backgroundImage: "url('/hand-drawn-mexican-bar-pattern_23-2150642680.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",}}>
      <Navbar />
      <Container className="pt-5">
        <h2 className="text-center mb-4" style={{
          color: "White", textShadow: `-1px -1px 0 black, 1px -1px 0 black,
          -1px 1px 0 black, 1px 1px 0 black`}}
          >You have been added to the queue!</h2>
          <h4 className="text-center mb-4" style={{
          color: "White", textShadow: `-1px -1px 0 black, 1px -1px 0 black,
          -1px 1px 0 black, 1px 1px 0 black`}}
          >Please wait for a server to call your name.</h4>
        {/* <Row className="mb-4">
          <Col md={6}>
            <QueueSection />
          </Col>
          <Col md={6}>
            <TableAssignment />
          </Col>
        </Row> */}
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
