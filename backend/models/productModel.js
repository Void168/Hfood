import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: false, unique: true },
    image: { type: String, required: false },
    category: { type: String, required: false },
    type: {type: String, required: false},
    description: { type: String, required: false },
    price: { type: Number, required: false },
    countInStock: { type: Number, required: false },
    rating: { type: Number, required: false },
    numReview: { type: Number, required: false },
    import: { type: String, required: false}
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', productSchema);

export default Product;