import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
name: {
  type: String,
  trim: true,
  required: true
},
email: {
  type: String,
  unique: true,
  lowercase: true,
  trim: true,
  required: true
},
password: {
  type: String
},
role: {
    type: String,
    enum: ['regular', 'professional'],
    default: 'regular'
}
},{
    timestamps: true,
}
);

export const User = mongoose.model('User', UserSchema);