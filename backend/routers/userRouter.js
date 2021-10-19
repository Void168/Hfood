import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import data from '../data.js';
import User from '../models/userModel.js';
import { generateToken, isAdmin, isAuth } from '../utils.js';

const userRouter = express.Router();

userRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          voucher: user.voucher,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: 'Mật khẩu hoặc Email không đúng' });
  })
);

userRouter.post(
  '/register',
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      avatar: req.body.avatar,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await user.save();
    if (!createdUser) {
      res.status(401).send({
        message: 'Email đã tồn tại',
      })
    } else {
        res.send({
              _id: createdUser._id,
              name: createdUser.name,
              email: createdUser.email,
              avatar: createdUser.avatar,
              voucher: createdUser.voucher,
              isAdmin: createdUser.isAdmin,
              token: generateToken(createdUser),
      });
    }
  })
);

userRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: 'Không tìm thấy người dùng' });
    }
  })
);
userRouter.put(
  '/profile',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.avatar = req.body.avatar || user.avatar;
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.voucher = req.body.voucher || user.voucher;
      if (req.body.password.length >= 8) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        avatar: updatedUser.avatar,
        name: updatedUser.name,
        email: updatedUser.email,
        voucher: updatedUser.voucher,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser),
      });
    }
  })
);

userRouter.get(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send(users);
  })
);

userRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      if (user.email === 'phuhung16820@gmail.com') {
        res.status(400).send({ message: 'Không thể xóa người Quản lý' });
        return;
      }
      const deleteUser = await user.remove();
      res.send({ message: 'Đã xóa người dùng', user: deleteUser });
    } else {
      res.status(404).send({ message: 'Không tìm thấy người dùng' });
    }
  })
);

userRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      user.avatar = req.body.avatar || user.avatar;
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.isAdmin = Boolean(req.body.isAdmin);
      // user.isAdmin = req.body.isAdmin || user.isAdmin;
      const updatedUser = await user.save();
      res.send({ message: 'Cập nhật người dùng thành công', user: updatedUser });
    } else {
      res.status(404).send({ message: 'Không tìm thấy người dùng' });
    }
  })
);

export default userRouter;