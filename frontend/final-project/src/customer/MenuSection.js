import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Card, Row, Col, ListGroup } from "react-bootstrap";

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
              {item.name} <span className="float-end">{item.price}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default MenuSection;
