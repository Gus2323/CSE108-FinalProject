import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const AddMenuItemForm = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [isSpecial, setIsSpecial] = useState(false);
    const [discountedPrice, setDiscountedPrice] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !price) {
            alert("Name and Price are required");
            return;
        }

        const newItem = {
            name,
            price: parseFloat(price),
            isSpecial,
        };

        if (isSpecial && discountedPrice) {
            newItem.discountedPrice = parseFloat(discountedPrice);
        }

        try {
            await addDoc(collection(db, "menu"), newItem);
            alert("Menu item added!");
            // Clear form
            setName("");
            setPrice("");
            setIsSpecial(false);
            setDiscountedPrice("");
        } catch (error) {
            console.error("Error adding menu item:", error);
        }
    };

    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Title>Add Menu Item</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Cheeseburger"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Price ($)</Form.Label>
                        <Form.Control
                            type="number"
                            step="0.01"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="e.g. 9.99"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check
                            type="checkbox"
                            label="Is Special?"
                            checked={isSpecial}
                            onChange={() => setIsSpecial(!isSpecial)}
                        />
                    </Form.Group>

                    {isSpecial && (
                        <Form.Group className="mb-3">
                            <Form.Label>Discounted Price ($)</Form.Label>
                            <Form.Control
                                type="number"
                                step="0.01"
                                value={discountedPrice}
                                onChange={(e) => setDiscountedPrice(e.target.value)}
                                placeholder="e.g. 8.99"
                            />
                        </Form.Group>
                    )}

                    <Button variant="primary" type="submit">
                        Add Item
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default AddMenuItemForm;
