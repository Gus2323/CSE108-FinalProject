import "../App.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import React, { useState } from 'react'

function TableList() {

    const [tables, setTables] = useState([{ table: 1, occupied: false, guest: "Available" }, { table: 2, occupied: false, guest: "Available" },
    { table: 3, occupied: false, guest: "Available" }, { table: 4, occupied: false, guest: "Available" },
    { table: 5, occupied: false, guest: "Available" }, { table: 6, occupied: false, guest: "Available" },
    { table: 7, occupied: false, guest: "Available" }, { table: 8, occupied: false, guest: "Available" },
    { table: 9, occupied: false, guest: "Available" }, { table: 10, occupied: false, guest: "Available" },
    { table: 11, occupied: false, guest: "Available" }, { table: 12, occupied: false, guest: "Available" },
    { table: 13, occupied: false, guest: "Available" }, { table: 14, occupied: false, guest: "Available" },
    { table: 15, occupied: false, guest: "Available" }, { table: 16, occupied: false, guest: "Available" },
    { table: 17, occupied: false, guest: "Available" }, { table: 18, occupied: false, guest: "Available" },]);

    function clearTable() {

    }

    return (
        <div className="table-list">
            <Card style={{ backgroundColor:"darkgoldenrod" }}>
                <Card.Body>
                <Card.Title>Table List</Card.Title>
                <Card.Text>
                    <ul className="list-unstyled">
                        {tables.map((table, index) => (
                            <li key={index}>
                                <button className="clear-table">clear</button>
                                <span className="text"> Table {table.table} - {table.guest}  </span>
                            </li>
                        ))}
                    </ul>
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );


}

export default TableList
