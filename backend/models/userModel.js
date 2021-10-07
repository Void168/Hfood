import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 32
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  avatar: {
    type: String,
    default: '/hfood/src/style/avatar-default.jpg'
  },
  password: {
    type: String,
    required: true,
    trim: true,
    min: 8,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: true
  },
  voucher: {
    type: String,
  }
}, {
  timestamps: true,
});
const User = mongoose.model('User', userSchema);
export default User;