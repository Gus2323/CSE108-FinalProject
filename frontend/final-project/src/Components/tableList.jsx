import "../App.css";
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
        <h2>Table List</h2>
        <div>
            {tables.map((table, index) => (
                    <li key={index}>
                        <button className="clear-table">clear</button>
                        <span className="text"> Table {table.table} - {table.guest}  </span>
                    </li>
            ))}
        </div>
        </div>
    );


}

export default TableList
