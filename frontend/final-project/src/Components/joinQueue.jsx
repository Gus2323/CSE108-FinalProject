import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const JoinQueue = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const addToQueue = () => {
        //Will need to add 
        navigate("/customer");
    }
    return (
        <div
            style={{
                backgroundImage: "url('/hand-drawn-mexican-bar-pattern_23-2150642680.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                width: "100%",
            }}>
            <Navbar />
            <Container
                fluid
                className="d-flex justify-content-center align-items-center"
                style={{ height: "90vh" }} // fill most of screen vertically
            >
                <Card style={{ width: "350px", textAlign: "center", backgroundColor:"darkgoldenrod" }}>
                    <Card.Body>
                        <Card.Title>Join the Queue</Card.Title>
                        <Card.Text>
                            <p>Please enter your First Name and Last Initial to join the queue:</p>
                            <input
                                name="guest-name"
                                className="form-control mb-3"
                                style={{ textAlign: "center" }}
                            ></input>
                            <p>And your party size:</p>
                            <input
                                name="party-size"
                                className="form-control mb-3"
                                style={{ textAlign: "center" }}
                            ></input>
                            <Button className="enter-queue" onClick={addToQueue}>Enter Queue</Button>
                            <p> Want to Join our Rewards Program?{" "} </p>
                            <p><a href="/signup">Sign up Here</a></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default JoinQueue;
