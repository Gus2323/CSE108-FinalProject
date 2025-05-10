import "../App.css";
import GuestList from '../staff/guestList.jsx'
import TableList from '../staff/tableList.jsx'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navbar from "../Components/Navbar"; // Reuse your site's nav

function StaffDashboard() {
  return (
    <div className="staff-dash-background" style={{ minWidth: "100%"}}>
      <Container fluid>
        <Navbar />
        <div className="nacho-mama">
          <div>
            <Row>
              <Col>
                <GuestList />
              </Col>
              <Col>
                <img src="/example8.png" alt="alternatetext"></img>
              </Col>
              <Col>
                <TableList />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div >


  );
}

export default StaffDashboard;
