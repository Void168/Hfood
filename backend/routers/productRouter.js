import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';
import { isAdmin, isAuth } from '../utils.js';


const productRouter = express.Router();
const today = Date.now();

productRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
        const products = await Product.find({})
        res.send(products)
    })
)

productRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
        await Product.remove({});
        const createdProducts = await Product.insertMany(data.products);
        res.send({ createdProducts });
    })
  );

  productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
      const product = await Product.findById(req.params.id);
      if(product){
          res.send(product);
      }else{
          res.status(404).send({
              messsage: 'Không tìm thấy sản phẩm' 
          })
      }
  }))

  productRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const product = new Product({
        name: '',
        type: '',
        image: '',
        price: 0,
        category: '',
        countInStock: 0,
        rating: 0,
        numReview: 0,
        description: '',
        import: new Intl.DateTimeFormat('vi-VN', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(today),
      });
      const createdProduct = await product.save();
      res.send({ message: 'Product Created', product: createdProduct });
    })
  );

  productRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const productId = req.params.id;
      const product = await Product.findById(productId);
      if (product) {
        product.name = req.body.name;
        product.type = req.body.type;
        product.price = req.body.price;
        product.image = req.body.image;
        product.category = req.body.category;
        product.countInStock = req.body.countInStock;
        product.description = req.body.description;
        const updatedProduct = await product.save();
        res.send({ message: 'Product Updated', product: updatedProduct });
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
    })
  );

  productRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const product = await Product.findById(req.params.id);
      if (product) {
        const deleteProduct = await product.remove();
        res.send({ message: 'Product Deleted', product: deleteProduct });
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
    })
  );

  

  export default productRouter;
