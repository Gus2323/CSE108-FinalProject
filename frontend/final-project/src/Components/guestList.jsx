import "../App.css";
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
    function addGuestToTable(indexToAdd) {
        let tableNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
        let tableNum = prompt("Which table?", "Table #")
        let tableInt = parseInt(tableNum)
        if(tableNumbers.includes(tableInt) === false){
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

    return (<div className="guest-list">
        <h2>Guest List 
            <button className="add-guest-button" onClick={addGuestToList}>➕</button>
            <button className="refresh-guest-list" onClick={refreshGuestList}>🔄</button></h2>
        <div>
            <ol>
                {guests.map((guest, index) => (
                    <li key={index}>
                        <button className="seat-guest" onClick={() => addGuestToTable(index)}>Seat</button>
                        <button className="delete-guest" onClick={() => removeGuestFromList(index)}>➖</button>
                        <span className="text"> {guest.name} - ({guest.partySize})   </span>
                    </li>
                ))}
            </ol>
        </div>
    </div>
    )
}

export default GuestList
