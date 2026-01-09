import Product from "../database/models/product.model.js";

export const getAll = async () =>{
    return await Product.find().lean();
}

export const getAllAPIProducts = async (req, res) => {
    try{
        const products = await Product.find();
        res.json(products);
    } catch(error){
        res.status(500).json({ message: "Error fetching products" });
    }
}

export const getNumberAPIProducts = async (req, res) =>{
    try{
        const limit = parseInt(req.query.limit) || 0;
        const products = await Product.find().limit(limit);
        res.json(products);
    }catch(error){
        res.status(500).json({ message: "Error fetching the specific number of products: "+limit});
    }
}

export const getById = async (id) =>{
    return await Product.findById(id).lean();
}