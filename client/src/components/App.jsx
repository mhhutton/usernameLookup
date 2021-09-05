import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';

import StudentList from './StudentList.jsx';

function App() {
  const [students, setStudents] = useState([]);

  const getAllStudents = () => axios
    .get('/students')
    .then((res) => res.data);

  useEffect(() => {
    getAllStudents()
      .then((result) => {
        setStudents(result);
      });
  }, [students]);

  return (
    <div className="body-container">
      <div className="header" > UserName Lookup
      </div>
      <div className="main-container">
        <div className="btn-container">
          <button>Submit</button>
          <button>Reset</button>
        </div>
        {/* <StudentList students={students} getAllStudents={getAllStudents} /> */}
      </div>
    </div>
  );
}

export default App;
