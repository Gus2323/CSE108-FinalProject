import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navbar from "../Components/Navbar";
import QueueSection from "../customer/QueueSection";
import TableAssignment from "../customer/TableAssignment";
import MenuSection from "../customer/MenuSection";
import StaffList from "../Components/staffList.jsx";
import GuestList from '../Components/guestList.jsx'
import TableList from '../Components/tableList.jsx'
import AddMenuItemForm from "../Components/AddMenuItemForm";


const AdminDashboard = () => {
    return (
        <div>
            <Navbar />
            <Container className="pt-5">
                <h1 className="text-center mb-4">Admin Dashboard</h1>

                <Row className="mb-4">
                    <Col md={6}>
                        <MenuSection />
                    </Col>
                    <Col md={6}>
                        <AddMenuItemForm />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <StaffList />
                    </Col>
                    <Col>
                        <GuestList />
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
export default AdminDashboard;
