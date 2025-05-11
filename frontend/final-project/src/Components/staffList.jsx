import "../App.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import React, { useState } from 'react'

function StaffList() {

    const [users, moveUser] = useState([
        { firstName: "Carlos", lastName: "Lopez", Role: "Server" }, { firstName: "Gustavo", lastName: "Castaneda-Lagunas", Role: "Manager" },
        { firstName: "Roshan", lastName: "Manoranjan", Role: "Cook" }]);

    function createUser() {

    }

    function editUser() {

    }

    function deleteUser() {

    }


    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                    <Card.Title className="mb-0">Staff List</Card.Title>
                    <div>
                        <button onClick={createUser}>➕</button>{' '}
                    </div>
                </div>
                <Card.Text>
                    <ul className="list-unstyled">
                        {users.map((user, index) => (
                            <li key={index}>
                                <button className="edit-user">✏️</button>{' '}
                                <button className="delete-user">➖</button>
                                <span> {user.firstName} {user.lastName} --- {user.Role}</span>
                            </li>
                        ))}
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default StaffList
