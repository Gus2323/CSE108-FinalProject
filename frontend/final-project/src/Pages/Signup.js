import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { query, where, getDocs, collection, getDoc, setDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [role, setRole] = useState("customer");
  const [inviteCode, setInviteCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Determine role from invite code
      let userRole = "customer"; // default

      const q = query(collection(db, "inviteCodes"), where("code", "==", inviteCode.trim()));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        userRole = querySnapshot.docs[0].data().role;
      } else {
        setError("Invalid invite code.");
        return;
      }


      // Create Firebase Auth user
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCred.user.uid;

      // Save user to Firestore
      await setDoc(doc(db, "users", uid), {
        email,
        role: userRole,
        createdAt: new Date()
      });

      // Redirect
      if (userRole === "admin") navigate("/admin");
      else if (userRole === "staff") navigate("/staff");
      else navigate("/customer");

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Card style={{ width: "100%", maxWidth: "400px" }} className="p-4 shadow-sm">
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSignup}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="inviteCode" className="mt-3">
              <Form.Label>Invite Code (Optional for Admin/Staff)</Form.Label>
              <Form.Control
                type="text"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value)}
                placeholder="Enter invite code"
              />
            </Form.Group>


            {/* <Form.Group controlId="role" className="mt-3">
              <Form.Label>Role</Form.Label>
              <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="customer">Customer</option>
                <option value="staff">Staff</option>
                <option value="admin">Admin</option>
              </Form.Select>
            </Form.Group> */}

            <Button type="submit" className="w-100 mt-4">Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Signup;
