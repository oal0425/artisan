import Product from "../database/models/product.model.js";

export const getAll = async () =>{
    return await Product.find().lean();
}

export const getById = async (id) =>{
    return await Product.findById(id).lean();
}