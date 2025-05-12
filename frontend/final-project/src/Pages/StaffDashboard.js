import "../App.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import GuestList from '../Components/guestList.jsx'
import TableList from '../Components/tableList.jsx'
import Navbar from "../Components/Navbar"


function App() {
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
      <Container fluid>
        <h1 className="text-center mb-4" style={{
          color: "White", textShadow: `-1px -1px 0 black, 1px -1px 0 black,
          -1px 1px 0 black, 1px 1px 0 black`
    }}>Serving Dashboard</h1>
        <Row>
          <Col md={2}>
            <div className="app-guest-list">
              <GuestList />
            </div>
          </Col>
          <Col md={8} className="text-center">
            <div className="seating-map">
              <img src="/example8.png" alt="alternatetext"></img>
            </div>
          </Col>
          <Col md={2}>
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
