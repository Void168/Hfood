import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productmodels.js'
import data from '../data.js';
import express from 'express';

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

productRouter.get('/categories', expressAsyncHandler(async (req, res) => {
    const categories = await Product.find().distinct('category');
    res.send(categories);
    })
);

export default productRouter;