import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description: String,
    price: Number,
    artisan: {type: mongoose.Schema.Types.ObjectId, ref: "Artisan"},
})

const Product = mongoose.model("Product", productSchema);

export default Product;