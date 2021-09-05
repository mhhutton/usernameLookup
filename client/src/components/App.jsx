import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import StudentList from './StudentList.jsx';

function App() {
  const [username, setUsername] = useState('');
  const [nameError, setNameError] = useState(false);
  const [icon, setIcon] = useState(<SearchIcon />);

  // const searchEuw = () =>

  const clear = () => {
    setUsername('');
  };

  return (
    <div className="body-container">
      <div className="banner">
      {<SearchIcon/>}UserName Lookup
      </div>
      <div className="main-container">
        <div className="search-container">
          <SearchIcon />
          <TextField
            className="search-box"
            variant="outlined"
            autoFocus
            margin="dense"
            label="Search"
            placeholder="Enter A Username"
            type="text"
            fullWidth
            // value={icon}
            onChange={(event) => setUsername(event.target.value)}
            error={nameError}
          />
          <div className="btn-container">
            <Button variant="outlined">Submit</Button>
            <Button
              variant="outlined"
              onClick={() => setUsername('')}
            >
              Clear
            </Button>
          </div>
        </div>
        <div>
          <ul>
            <li>
              Euw:
            </li>
            <li>
              FortniteTracker:
            </li>
            <li>
              Kik:
            </li>
            <li>
              Kongregate:
            </li>
            <li>
              Quora:
            </li>
            <li>
              Reddit:
            </li>
            <li>
              Roblox:
            </li>
            <li>
              SparkPeople:
            </li>
            <li>
              Wattpad:
            </li>
            <li>
              Xbox Gamertag:
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
