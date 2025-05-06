// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AdminDashboard from "./Pages/AdminDashboard";
import StaffDashboard from "./Pages/StaffDashboard";
import CustomerDashboard from "./Pages/CustomerDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/staff" element={<StaffDashboard />} />
        <Route path="/customer" element={<CustomerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
