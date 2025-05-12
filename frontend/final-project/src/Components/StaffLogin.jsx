import { useState } from 'react';
import { verifyStaffCodeLogin } from '../utils/firebaseUtils';

const StaffLogin = () => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const success = await verifyStaffCodeLogin(name, code);
    if (!success) {
      setError("Invalid name or code");
    } else {
      // Redirect to staff dashboard
    }
  };

  return (
    <div>
      <h2>Staff Login</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input value={code} onChange={e => setCode(e.target.value)} placeholder="Code" />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default StaffLogin;
