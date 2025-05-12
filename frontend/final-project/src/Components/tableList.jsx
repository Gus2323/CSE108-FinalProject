import "../App.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react'
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

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

    useEffect(() => {
        const fetchTables = async () => {
            const querySnapshot = await getDocs(collection(db, "tables"));
            const tableData = [];

            for (let i = 1; i <= 18; i++) {
                const tableDoc = querySnapshot.docs.find(doc => doc.id === `table${i}`);
                if (tableDoc) {
                    const data = tableDoc.data();
                    tableData.push({
                        table: i,
                        occupied: data.isOccupied,
                        guest: data.guestId ?? "Unknown Guest"
                    });
                } else {
                    // If the table doc doesn't exist, mark it as available
                    tableData.push({
                        table: i,
                        occupied: false,
                        guest: "Available"
                    });
                }
            }

            setTables(tableData);
        };

        fetchTables();
    }, []);


    async function clearTable(tableNumber) {
        try {
            await setDoc(doc(db, "tables", `table${tableNumber}`), {
                isOccupied: false,
                guestId: null,
                assignedAt: null
            });

            // Refresh the table list
            const updated = await getDocs(collection(db, "tables"));
            const newTables = [];

            for (let i = 1; i <= 18; i++) {
                const docSnap = updated.docs.find(doc => doc.id === `table${i}`);
                if (docSnap) {
                    const data = docSnap.data();
                    newTables.push({
                        table: i,
                        occupied: data.isOccupied,
                        guest: data.guestId ?? "Unknown Guest"
                    });
                } else {
                    newTables.push({
                        table: i,
                        occupied: false,
                        guest: "Available"
                    });
                }
            }

            setTables(newTables);
        } catch (error) {
            console.error("Failed to clear table:", error);
        }
    }

    return (
        <div className="table-list">
            <Card style={{ backgroundColor:"darkgoldenrod" }}>
                <Card.Body>
                    <Card.Title>Table List</Card.Title>
                    <Card.Text>
                        <ul className="list-unstyled">
                            {tables.map((table, index) => (
                                <li key={index} className="my-2 d-flex align-items-center">
                                    <button
                                        className="clear-table btn btn-sm btn-danger me-2"
                                        onClick={() => clearTable(table.table)}
                                        disabled={!table.occupied}
                                    >
                                        Clear
                                    </button>
                                    <span className="text">
                                        Table {table.table} – {table.occupied ? `Occupied by ${table.guest}` : "Available"}
                                    </span>
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
