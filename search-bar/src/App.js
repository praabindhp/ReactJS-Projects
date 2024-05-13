import './App.css';
import JSONDATA from './MOCK_DATA.json';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="App">
      <input type="text" placeholder="Search By Name" onChange={(e) => { setSearchTerm(e.target.value) }} />
      <br></br>
      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
        return null;
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p><strong>{val.first_name}</strong> | {val.email} | <strong>{val.ip_address}</strong></p>
          </div>
        );
      })}
    </div>
  );
}

export default App;