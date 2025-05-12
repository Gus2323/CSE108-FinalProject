import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc, deleteDoc, doc, setDoc } from "firebase/firestore";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";

const MenuSection = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "menu"));
                const items = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setMenuItems(items);
            } catch (err) {
                console.error("Error fetching menu:", err);
            }
        };

        fetchMenu();
    }, []);

    const editMenuItem = async (item) => {
        const newName = prompt("Enter new item name:", item.name);
        const newPrice = prompt("Enter new price:", item.price);

        if (newName && !isNaN(parseFloat(newPrice))) {
            try {
                await setDoc(doc(db, "menu", item.id), {
                    name: newName.trim(),
                    price: parseFloat(newPrice)
                });

                // Refresh menu list
                const querySnapshot = await getDocs(collection(db, "menu"));
                const items = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setMenuItems(items);
            } catch (err) {
                console.error("Failed to edit menu item:", err);
            }
        } else {
            alert("Invalid input. Please enter a valid name and numeric price.");
        }
    };

    return (
        <Card style={{
            backgroundImage: "url('/orange-felt.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            width: "100%",
        }}>
            <Card.Body>
                <Card.Title>Our Menu</Card.Title>
                <ListGroup>
                    {menuItems.map((item, index) => (
                        <ListGroup.Item key={index}>
                            <button className='edit-menu-item' onClick={() => editMenuItem(item)}>✏️</button>
                            {item.name} <span className="float-end">{item.price}</span>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default MenuSection;
