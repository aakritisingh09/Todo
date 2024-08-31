import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import User from './User.js';

const app = express();
const port = 5100;

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// DataBase Configuration:
mongoose.connect("mongodb://localhost:27017/TestDb")
  .then(() => console.log('MongoDB Connected...'));


// API endpoints
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/users', async (req, res) => {
  const users = await User.find(); 
    res.json(users);
});

app.post('/api/addUser', async (req, res) => {
  console.log(req.body); 

  const { FormData } = req.body;

  if (!FormData) {
    return res.status(400).json({ error: "FormData is missing" });
  }

  let Data = {
    name: FormData.name,
    age: parseInt(FormData.age),
    email: FormData.email,
    phone: FormData.phone,
    salary: parseInt(FormData.salary),
  };

  console.log(Data);
  const newUser = new User(Data);
  await newUser.save();
  res.status(201).json(newUser); // Send a response after saving
});

// Server Listening:
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
