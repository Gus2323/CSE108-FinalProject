import React, { useState } from "react";
import { Container, Card, Button  } from "react-bootstrap";
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
        <div>
            <Navbar />
            <Container
                fluid
                className="d-flex justify-content-center align-items-center"
                style={{ height: "70vh" }} // fill most of screen vertically
            >
                <Card style={{ width: "350px", textAlign: "center" }}>
                    <Card.Body>
                        <Card.Title>Join the Queue</Card.Title>
                        <Card.Text>
                            <p>Please enter your First Name and Last Initial to join the queue:</p>
                            <input
                                name="myInput"
                                className="form-control mb-3"
                                style={{ textAlign: "center" }}
                            />
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
