import React, { useState } from 'react'

function GuestList() {

    const [guests, moveGuest] = useState(["John D"]);

    //Add a guest to the guest list
    function addGuestToList() {
        let guestName = prompt("What's the guest name?", "First name Last Initial");
        guests.push(guestName)
        console.log("Updated Guest List:")
        for (let i = 0; i < guests.length; i++) {
            console.log(guests[i]);
          }
    }
    //seat a guest's party
    function addGuestToTable() {

    }
    //Remove a no-show
    function removeGuestFromList() {

    }

    return (<div className="table-list">
        <h1>Nacho Mama's</h1>
        <h4>"Not your mama's cookin'"</h4>
        <h2>Guest List <button className="add-guest-button" onClick={addGuestToList}>Add Guest</button></h2>
        <div>
            <ol>
                {guests.map((guest,index) => <li key={index}>
                    <button className="delete-guest" onClick={removeGuestFromList}>Del</button>
                    {/* <button class="dropbtn" className="seat-guest" onClick={addGuestToTable}>Seat</button> */}
                    <span className="text"> {guest}</span>
                </li>)}
            </ol>
        </div>
    </div>
    )
}

export default GuestList
