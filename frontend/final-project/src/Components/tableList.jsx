import "../App.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react'
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { getDoc } from "firebase/firestore";


function TableList() {
    const getGuestNameById = async (id) => {
        try {
            const guestRef = doc(db, "guests", id);
            const guestSnap = await getDoc(guestRef);
            return guestSnap.exists() ? guestSnap.data().name : "Unknown Guest";
        } catch {
            return "Unknown Guest";
        }
    };


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
            const newTableList = await getDocs(collection(db, "tables"));
            const newTablesData = [];

            for (let i = 1; i <= 18; i++) {
                const tableDoc = newTableList.docs.find(doc => doc.id === `table${i}`);

                if (tableDoc) {
                    const data = tableDoc.data();
                    let guestInfo = "Available";

                    if (data.isOccupied && data.guestId) {
                        const guestRef = doc(db, "users", data.guestId); // Assuming 'users' collection
                        const guestSnap = await getDoc(guestRef);

                        guestInfo = guestSnap.exists()
                            ? { id: data.guestId, name: guestSnap.data().name }
                            : { id: data.guestId, name: "Unknown Guest" };
                    }

                    newTablesData.push({
                        table: i,
                        occupied: data.isOccupied,
                        guest: guestInfo
                    });
                } else {
                    newTablesData.push({
                        table: i,
                        occupied: false,
                        guest: "Available"
                    });
                }
            }

            setTables(newTablesData);
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

            const updated = await getDocs(collection(db, "tables"));
            const newTables = [];

            for (let i = 1; i <= 18; i++) {
                const docSnap = updated.docs.find(doc => doc.id === `table${i}`);
                if (docSnap) {
                    const data = docSnap.data();
                    let guestInfo = "Available";

                    if (data.isOccupied && data.guestId) {
                        const guestName = await getGuestNameById(data.guestId);
                        guestInfo = { id: data.guestId, name: guestName };
                    }

                    newTables.push({
                        table: i,
                        occupied: data.isOccupied,
                        guest: guestInfo
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


    async function refreshTableList() {
        try {
            const newTableList = await getDocs(collection(db, "tables"));
            const newTablesData = [];

            for (let i = 1; i <= 18; i++) {
                const newTablesDoc = newTableList.docs.find(doc => doc.id === `table${i}`);
                if (newTablesDoc) {
                    const data = newTablesDoc.data();
                    let guestInfo = "Available";

                    if (data.isOccupied && data.guestId) {
                        const guestName = await getGuestNameById(data.guestId);
                        guestInfo = { id: data.guestId, name: guestName };
                    }

                    newTablesData.push({
                        table: i,
                        occupied: data.isOccupied,
                        guest: guestInfo
                    });
                } else {
                    newTablesData.push({
                        table: i,
                        occupied: false,
                        guest: "Available"
                    });
                }
            }

            setTables(newTablesData);
        } catch (error) {
            console.error("Error refreshing tables:", error);
        }
    }



    return (
        <div className="table-list">
            <Card style={{ backgroundColor: "darkgoldenrod" }}>
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                        <Card.Title>Table List</Card.Title>
                        <div>
                            <button onClick={refreshTableList}>🔄</button>
                        </div>
                    </div>
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
                                        Table {table.table} – {
                                            table.occupied
                                                ? `Occupied by ${typeof table.guest === "object" ? table.guest.name : table.guest}`
                                                : "Available"
                                        }
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
