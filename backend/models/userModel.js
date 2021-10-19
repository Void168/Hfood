import mongoose from 'mongoose';

const validator = (v) =>
{
  return v.length > 7;
}

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
    validate: [
      validator, 'Mật khẩu quá yếu'
    ]
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: true
  },
  voucher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vouchers',
    required: false,
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
export default User;