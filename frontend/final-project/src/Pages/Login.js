import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert, Card, Spinner } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCred.user.uid;

      const userDoc = await getDoc(doc(db, "users", uid));
      const role = userDoc.exists() ? userDoc.data().role : "customer";

      switch (role) {
        case "admin":
          navigate("/admin");
          break;
        case "staff":
          navigate("/staff");
          break;
        default:
          navigate("/customer");
      }
    } catch (err) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Card className="p-4 shadow-sm" style={{ width: "100%", maxWidth: "400px" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button className="w-100 mt-4" type="submit" disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : "Log In"}
            </Button>
            <p className="text-center mt-3">
              Don’t have an account? <a href="/signup">Sign up</a>
            </p>

          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
