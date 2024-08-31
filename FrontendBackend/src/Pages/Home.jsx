

import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Home() {
  let [Users, SetUsers] = useState([]);

  useEffect(() => {
    async function FetchData() {
      try {
        let Data = await axios.get("http://localhost:5100/api/users");
        SetUsers(Data.data);
        console.log(Data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    FetchData();
  }, []);

  // Function to handle delete
  function handleDelete(name) {
    const updatedUsers = Users.filter((user) => user.name !== name);
    SetUsers(updatedUsers);
  }

  return (
    <div>
      <h1>User List</h1>
      <div className="table-container">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Salary</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Users.map((row) => (
                <TableRow
                  key={row.id} 
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.age}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.phone}</TableCell>
                  <TableCell align="right">₹{row.salary}</TableCell>
                  <TableCell align="right">
                    <Button 
                      variant="contained" 
                      color="secondary" 
                      onClick={(e) => handleDelete(row.name)} // Correct onClick handler
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
