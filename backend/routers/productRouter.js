import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productmodels.js'
import data from '../data.js';
import express from 'express';
import userRouter from './userRouter.js';
import bcrypt from 'bcryptjs'


const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler(async (req, res) =>{
    const products = await Product.find({});
    res.send(products);
}))

productRouter.get('/seed', expressAsyncHandler(async (req, res) =>{
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
    })
);

productRouter.get('/:id', expressAsyncHandler(async(req, res) =>{
    const product = await Product.findById(req.params.id);
    if(product){
        res.send(product)
    }else{
        res.status(404).send({
            message:'Không tìm thấy sản phẩm'
        })
    }
}))

userRouter.post('/signin', expressAsyncHandler (async(req, res) =>{
    const user =  await User.findOne({ email: req.body.email });
    if(user){
        if(bcrpyt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            });
            return;
        }
    }
        res.status(401).send({ message: 'Tài khoản hoặc mật khẩu không đúng'});
    })
);

export default productRouter;