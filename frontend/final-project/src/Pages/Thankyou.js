import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navbar from "../Components/Navbar"; // Reuse your site's nav
import QueueSection from "../customer/QueueSection";
import TableAssignment from "../customer/TableAssignment";
import MenuSection from "../customer/MenuSection";

const ThankYou = () => {
  return (
    <div className="thank-you" style={{ minHeight: "100vh",         
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
          >Thanks for joining!</h2>
          <h4 className="text-center mb-4" style={{
          color: "White", textShadow: `-1px -1px 0 black, 1px -1px 0 black,
          -1px 1px 0 black, 1px 1px 0 black`}}
          >You should receive an email confirming your sign up.</h4>
                    <h4 className="text-center mb-4" style={{
          color: "White", textShadow: `-1px -1px 0 black, 1px -1px 0 black,
          -1px 1px 0 black, 1px 1px 0 black`}}
          >In the meantime, head back to the home page to join the queue!</h4>
      </Container>
    </div>
  );
};

export default ThankYou;
