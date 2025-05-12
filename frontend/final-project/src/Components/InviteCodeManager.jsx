import React, { useEffect, useState } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { Card, Button, Form, Table } from "react-bootstrap";

const InviteCodeManager = () => {
  const [code, setCode] = useState("");
  const [role, setRole] = useState("staff");
  const [codes, setCodes] = useState([]);

  const fetchCodes = async () => {
    const querySnapshot = await getDocs(collection(db, "inviteCodes"));
    const fetched = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setCodes(fetched);
  };

  useEffect(() => {
    fetchCodes();
  }, []);

  const handleAddCode = async (e) => {
    e.preventDefault();
    if (!code.trim()) return;

    try {
      await addDoc(collection(db, "inviteCodes"), {
        role,
        code: code.trim()
      });
      setCode("");
      fetchCodes();
    } catch (err) {
      console.error("Failed to add code:", err);
    }
  };

  const handleDelete = async (codeId) => {
    await deleteDoc(doc(db, "inviteCodes", codeId));
    fetchCodes();
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Invite Code Manager</Card.Title>
        <Form onSubmit={handleAddCode} className="mb-3">
          <Form.Group className="d-flex align-items-center gap-3">
            <Form.Control
              placeholder="Enter new invite code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </Form.Select>
            <Button type="submit" variant="primary">Add</Button>
          </Form.Group>
        </Form>

        <Table bordered>
          <thead>
            <tr>
              <th>Invite Code</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {codes.map((c) => (
              <tr key={c.id}>
                <td>{c.code}</td>
                <td>{c.role}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(c.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default InviteCodeManager;