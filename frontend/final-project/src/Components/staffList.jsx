import "../App.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import React, { useState } from 'react'

function StaffList() {

    const [users, moveUser] = useState([
        { firstName: "Carlos", lastName: "Lopez", Role: "Server" }, { firstName: "Gustavo", lastName: "Castaneda-Lagunas", Role: "Manager" },
        { firstName: "Roshan", lastName: "Manoranjan", Role: "Cook" }]);

    function editUser() {

    }

    function deleteUser() {

    }


    return (
        <Card>
            <Card.Body>
                <Card.Title>Staff List</Card.Title>
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
