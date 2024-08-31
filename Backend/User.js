import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  phone: String,
  salary: Number
});

const User = mongoose.model('User', userSchema);

export default User;
