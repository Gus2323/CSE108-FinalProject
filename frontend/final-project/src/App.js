import './App.css';
import GuestList from './guestList.jsx'
import TableList from './tableList.jsx'

function App() {
  return (
    <div className="nacho-mama">
      <h1>Nacho Mama's</h1>
      <h4>"Not your mama's cookin'"</h4>
      <div>
        <div className="app-guest-list">
          <GuestList />
        </div>
        <div className="seating-map">
        <img src="/example8.png" alt="alternatetext"></img>
        </div>
        <div className="app-table-list">
          <TableList />
        </div>
      </div>
    </div>
  );
}

export default App;
