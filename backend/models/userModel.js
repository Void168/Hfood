import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, max: 32},
    email: { type: String, required: true, unique: true, trim: true },
    avatar: { type: String, default: '/hfood/src/style/avatar-default.jpg'},
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', userSchema);
export default User;

