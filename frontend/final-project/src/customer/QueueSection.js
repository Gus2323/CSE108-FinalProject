import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const QueueSection = () => {
  const [queued, setQueued] = useState(false);

  const handleQueue = () => {
    setQueued(true);
    // TODO: Add call to backend API to register queue
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Queue Up</Card.Title>
        <Card.Text>
          {queued ? "You are now in line. Please wait to be seated." : "Tap below to queue up for a table."}
        </Card.Text>
        {!queued && <Button onClick={handleQueue}>Join Queue</Button>}
      </Card.Body>
    </Card>
  );
};

export default QueueSection;
