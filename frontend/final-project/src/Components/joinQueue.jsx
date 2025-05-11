import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import Navbar from "../Components/Navbar";

const JoinQueue = () => {
    const [name, setName] = useState("");
    const [partySize, setPartySize] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const addToQueue = async () => {
        if (!name || !partySize) {
            alert("Please enter your name and party size.");
            return;
        }

        setLoading(true);
        try {
            await addDoc(collection(db, "guests"), {
                name: name.trim(),
                partySize: parseInt(partySize),
                status: "waiting",
                createdAt: Timestamp.now()
            });
            navigate("/customer");
        } catch (error) {
            console.error("Error joining queue:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <Container
                fluid
                className="d-flex justify-content-center align-items-center"
                style={{ height: "90vh" }}
            >
                <Card style={{ width: "350px", textAlign: "center" }}>
                    <Card.Body>
                        <Card.Title>Join the Queue</Card.Title>
                        <Card.Text>
                            <p>Please enter your First Name and Last Initial to join the queue:</p>
                            <input
                                name="guest-name"
                                className="form-control mb-3"
                                style={{ textAlign: "center" }}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <p>And your party size:</p>
                            <input
                                name="party-size"
                                type="number"
                                className="form-control mb-3"
                                style={{ textAlign: "center" }}
                                value={partySize}
                                onChange={(e) => setPartySize(e.target.value)}
                            />
                            <Button
                                className="enter-queue"
                                onClick={addToQueue}
                                disabled={loading}
                            >
                                {loading ? "Joining..." : "Enter Queue"}
                            </Button>
                            <p> Want to Join our Rewards Program? </p>
                            <p><a href="/signup">Sign up Here</a></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default JoinQueue;
