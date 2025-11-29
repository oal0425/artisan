import {getAll, getById} from "../services/product.service.js";

export const getProducts = async (req, res) =>{
    const products = await getAll();
    res.render("products",{title:"Productos", products});
};

export const getProductById = async(req, res) =>{
    const product = await getById(req.params.id);
    res.render("productDetails", {title:product.name, product});
};

