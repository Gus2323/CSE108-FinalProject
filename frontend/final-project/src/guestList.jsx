import './App.css';
import React, { useState } from 'react'

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
    function addGuestToTable() {

    }
    //remove a no-show
    function removeGuestFromList(indexToRemove) {
        moveGuest(guests.filter((_, index) => index !== indexToRemove));
        //debugging
        for (let i = 0; i < guests.length; i++) {
            console.log(guests[i]);
        }
    }

    return (<div className="guest-list">
        <h2>Guest List <button className="add-guest-button" onClick={addGuestToList}>➕</button></h2>
        <div>
            <ol>
                {guests.map((guest, index) => (
                    <li key={index}>
                        <button className="delete-guest" onClick={() => removeGuestFromList(index)}>Del</button>
                        <span className="text"> {guest.name} - Party of {guest.partySize}   </span>
                    </li>
                ))}
            </ol>
        </div>
    </div>
    )
}

export default GuestList
