import "../App.css";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc, deleteDoc, doc, setDoc } from "firebase/firestore";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";

function GuestList() {

    const [guests, moveGuest] = useState([{ name: "John D", partySize: 2 }]);


    // Fetch guest list from Firestore
    useEffect(() => {
        const fetchGuests = async () => {
            const newGuestsList = await getDocs(collection(db, "guests"));
            const guestsData = newGuestsList.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            moveGuest(guestsData);
        };

        fetchGuests();
    }, []);

    //add a guest to the guest list
    async function addGuestToList() {
        const guestName = prompt("What's the guest name?", "First name Last Initial");
        const partySizePrompt = prompt("What's the party size?", "#");

        const partySize = parseInt(partySizePrompt);

        if (guestName && !isNaN(partySize)) {
            try {
                await addDoc(collection(db, "guests"), {
                    name: guestName.trim(),
                    partySize,
                    status: "waiting",
                    createdAt: new Date()
                });

                // Refresh
                const updated = await getDocs(collection(db, "guests"));
                moveGuest(updated.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            } catch (error) {
                console.error("Error adding guest:", error);
            }
        }
        async function removeGuestFromList(indexToRemove) {
            const guestToRemove = guests[indexToRemove];
            if (!guestToRemove?.id) return;

            try {
                await deleteDoc(doc(db, "guests", guestToRemove.id));

                // Refresh
                const updated = await getDocs(collection(db, "guests"));
                moveGuest(updated.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            } catch (error) {
                console.error("Error removing guest:", error);
            }
        }
    }
    //seat a guest's party
    async function addGuestToTable(indexToAdd) {
        const guest = guests[indexToAdd];
        const tableNum = prompt("Which table?", "Table #");
        const tableInt = parseInt(tableNum);

        if (isNaN(tableInt) || tableInt < 1 || tableInt > 18) {
            return alert("That table doesn't exist");
        }
        try {
            // Save to tables
            await setDoc(doc(db, "tables", `table${tableInt}`), {
                isOccupied: true,
                guestId: guest.id,
                assignedAt: new Date()
            });

            // Remove from guests
            await setDoc(doc(db, "guests", guest.id), {
                ...guest,
                status: "seated",
                seatedAt: new Date()
            });
            // Refresh
            const updated = await getDocs(collection(db, "guests"));
            moveGuest(updated.docs.map(doc => ({ id: doc.id, ...doc.data() })));

        } catch (error) {
            console.error("Error seating guest:", error);
        }
    }

    async function refreshGuestList() {
        try {
            const newGuestsList = await getDocs(collection(db, "guests"));
            const guestsData = newGuestsList.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            moveGuest(guestsData);
        } catch (error) {
            console.error("Error refreshing guest list:", error);
        }
    }

    //remove a no-show
    async function removeGuestFromList(indexToRemove) {
        const guestToRemove = guests[indexToRemove];
        if (!guestToRemove?.id) return;

        try {
            //deletes guess from the list
            await deleteDoc(doc(db, "guests", guestToRemove.id));

            //refreshes the guest list
            refreshGuestList();
        } catch (error) {
            console.error("Error removing guest:", error);
        }
    }


    return (
        <div >
            <Card style={{ backgroundColor: "darkgoldenrod" }}>
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                        <Card.Title className="mb-0">Guest List</Card.Title>
                        <div>
                            <button onClick={addGuestToList}>➕</button>{' '}
                            <button onClick={refreshGuestList}>🔄</button>
                        </div>
                    </div>
                    <Card.Text className="mt-3">
                        <ul className="list-unstyled">
                            {guests.map((guest, index) => (
                                <li key={index} className="my-2 d-flex align-items-center">
                                    <button onClick={() => addGuestToTable(index)}>Seat</button>{" "}
                                    <button onClick={() => removeGuestFromList(index)}>➖</button>{" "}
                                    <span className="ms-2">
                                        {guest.name} - ({guest.partySize})
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}

export default GuestList
