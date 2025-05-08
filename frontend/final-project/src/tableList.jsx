import './App.css';
import React, { useState } from 'react'

function TableList() {

    const [tables, setTables] = useState([{ table: 1, occupied: false, guest: "Available" }, { table: 2, occupied: false, guest: "Available" },
    { table: 3, occupied: false, guest: "Available" }, { table: 4, occupied: false, guest: "Available" }, 
    { table: 5, occupied: false, guest: "Available" }, { table: 6, occupied: false, guest: "Available" }, 
    { table: 7, occupied: false, guest: "Available" }, { table: 8, occupied: false, guest: "Available" }]);

    function clearTable() {

    }

    return (
        <div className="table-list">
        <h2>Table List</h2>
        <div>
            {tables.map((table, index) => (
                    <li key={index}>
                        <span className="text"> Table {table.table} - {table.guest}  </span>
                    </li>
            ))}
        </div>
        </div>
    );

}

export default TableList
