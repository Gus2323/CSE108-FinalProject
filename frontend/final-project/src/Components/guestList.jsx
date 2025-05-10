import "../App.css";
import React, { useState } from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function GuestList() {

    const [guests, moveGuest] = useState([{ name: "John D", partySize: 2 }]);

    //add a guest to the guest list
    function addGuestToList() {
        const guestName = prompt("What's the guest name?", "First name Last Initial");
        const partySizePrompt = prompt("What's the party size?", "#");

        const partySize = parseInt(partySizePrompt);

        if (guestName && !isNaN(partySize)) {
            moveGuest([...guests, { name: guestName.trim(), partySize }]);
        }
        //debugging
        for (let i = 0; i < guests.length; i++) {
            console.log(guests[i]);
        }
    }
    //seat a guest's party
    function addGuestToTable(indexToAdd) {
        let tableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
        let tableNum = prompt("Which table?", "Table #")
        let tableInt = parseInt(tableNum)
        if (tableNumbers.includes(tableInt) === false) {
            return alert("That table doesn't exist")
        }

    }

    function refreshGuestList(guest) {

    }

    //remove a no-show
    function removeGuestFromList(indexToRemove) {
        moveGuest(guests.filter((_, index) => index !== indexToRemove));
        //debugging
        for (let i = 0; i < guests.length; i++) {
            console.log(guests[i]);
        }
    }

    return (
        <div>
            <Card>
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
                                    <button onClick={() => addGuestToTable(index)}>Seat</button>{' '}
                                    <button onClick={() => removeGuestFromList(index)}>➖</button>{' '}
                                    <span className="ms-2">{guest.name} - ({guest.partySize})</span>
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
