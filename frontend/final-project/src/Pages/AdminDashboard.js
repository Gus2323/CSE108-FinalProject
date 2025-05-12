import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navbar from "../Components/Navbar";
import QueueSection from "../customer/QueueSection";
import TableAssignment from "../customer/TableAssignment";
import MenuSection from "../customer/MenuSection";
import StaffList from "../Components/staffList.jsx";
import GuestList from '../Components/guestList.jsx'
import TableList from '../Components/tableList.jsx'
import AddMenuItemForm from '../Components/AddMenuItemForm';
import InviteCodeManager from "../Components/InviteCodeManager";




const AdminDashboard = () => {
    return (
        <div
          style={{
    backgroundImage: "url('/hand-drawn-mexican-bar-pattern_23-2150642680.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    width: "100%",
  }}>
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
                <Row className="mb-4">
                    <Col>
                        <StaffList />
                    </Col>
                    <Col>
                        <GuestList />
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col md={6}>
                        <InviteCodeManager />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default AdminDashboard;
