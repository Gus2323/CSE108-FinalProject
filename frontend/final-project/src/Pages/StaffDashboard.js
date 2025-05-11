import "../App.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import GuestList from '../Components/guestList.jsx'
import TableList from '../Components/tableList.jsx'
import Navbar from "../Components/Navbar"


function App() {
  return (
    <div>
      <Navbar />
      <Container fluid>
        <h1 className="text-center mb-4">Staff Dashboard</h1>

        <Row>
          <Col md={3}>
            <div className="app-guest-list">
              <GuestList />
            </div>
          </Col>
          <Col md={6} className="text-center">
            <div className="seating-map">
              <img src="/example8.png" alt="alternatetext" className="img-fluid"></img>
            </div>
          </Col>
          <Col md={3}>
            <div className="app-table-list">
              <TableList />
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
