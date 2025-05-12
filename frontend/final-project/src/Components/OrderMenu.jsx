import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { Card, Button, Form } from "react-bootstrap";

const OrderMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedTable, setSelectedTable] = useState("");
  const [order, setOrder] = useState({}); // { itemName: quantity }

  useEffect(() => {
    const fetchMenu = async () => {
      const querySnapshot = await getDocs(collection(db, "menu"));
      const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMenuItems(items);
    };
    fetchMenu();
  }, []);

  const handleQuantityChange = (name, value) => {
    setOrder({ ...order, [name]: parseInt(value) || 0 });
  };

  const submitOrder = async () => {
    if (!selectedTable) return alert("Please select a table.");

    const items = menuItems
      .filter(item => order[item.name] > 0)
      .map(item => ({
        name: item.name,
        quantity: order[item.name],
        price: item.isSpecial ? item.discountedPrice : item.price
      }));

    if (items.length === 0) return alert("No items selected.");

    await addDoc(collection(db, "orders"), {
      table: parseInt(selectedTable),
      items,
      createdAt: Timestamp.now(),
      status: "pending"
    });

    alert("Order submitted!");
    setOrder({});
    setSelectedTable("");
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Take Table Order</Card.Title>

        <Form.Group className="mb-3">
          <Form.Label>Select Table</Form.Label>
          <Form.Control
            as="select"
            value={selectedTable}
            onChange={(e) => setSelectedTable(e.target.value)}
          >
            <option value="">-- Select Table --</option>
            {[...Array(18).keys()].map(i => (
              <option key={i + 1} value={i + 1}>Table {i + 1}</option>
            ))}
          </Form.Control>
        </Form.Group>

        {menuItems.map(item => (
          <Form.Group key={item.id} className="mb-2">
            <Form.Label>{item.name} (${item.isSpecial ? item.discountedPrice : item.price})</Form.Label>
            <Form.Control
              type="number"
              min="0"
              placeholder="0"
              value={order[item.name] || ""}
              onChange={(e) => handleQuantityChange(item.name, e.target.value)}
            />
          </Form.Group>
        ))}

        <Button onClick={submitOrder} className="mt-3">Submit Order</Button>
      </Card.Body>
    </Card>
  );
};

export default OrderMenu;
