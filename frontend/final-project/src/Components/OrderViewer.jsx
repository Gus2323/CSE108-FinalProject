import React, { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  updateDoc,
  doc,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import { Card, Table, Button, Badge } from "react-bootstrap";

const OrderViewer = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(data);
    });

    return () => unsubscribe();
  }, []);

  const updateStatus = async (orderId, status) => {
    await updateDoc(doc(db, "orders", orderId), {
      status,
    });
  };

  const statusVariant = {
    pending: "warning",
    preparing: "primary",
    served: "success",
    canceled: "danger",
  };

  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>Live Orders</Card.Title>
        <Table responsive bordered>
          <thead>
            <tr>
              <th>Table</th>
              <th>Items</th>
              <th>Status</th>
              <th>Actions</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>Table {order.table}</td>
                <td>
                  <ul className="mb-0">
                    {order.items.map((item, i) => (
                      <li key={i}>
                        {item.quantity} × {item.name} (${item.price})
                      </li>
                    ))}
                  </ul>
                </td>
                <td>
                  <Badge bg={statusVariant[order.status] || "secondary"}>
                    {order.status}
                  </Badge>
                </td>
                <td>
                  <div className="d-flex flex-column gap-1">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => updateStatus(order.id, "preparing")}
                    >
                      Preparing
                    </Button>
                    <Button
                      variant="outline-success"
                      size="sm"
                      onClick={() => updateStatus(order.id, "served")}
                    >
                      Served
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => updateStatus(order.id, "canceled")}
                    >
                      Cancel
                    </Button>
                  </div>
                </td>
                <td>{new Date(order.createdAt?.toDate()).toLocaleTimeString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default OrderViewer;
