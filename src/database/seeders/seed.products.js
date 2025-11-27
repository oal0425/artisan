import mongoose from 'mongoose';
import connection from '../connection.js';
import Product from '../models/product.model.js';
import { faker } from '@faker-js/faker';

const generateProducts = () =>{
    const products = [];
    for (let i=0; i<100; i++){
        const product = {
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: faker.commerce.price(),
            image: faker.image.url({width: 320, height: 320, category: 'craft'}),
        }
        products.push(product);
    }
    return products;
}

export const seedProducts = async () => {
    try{
        //await connection.connectToDB();
        await Product.deleteMany();
        const products = generateProducts();
        await Product.insertMany(products);
        console.log("✅✅ Products seeded successfully");
    } catch(error){
        console.error("❌❌ Error seeding products: ", error);
        mongoose.connection.close();
    }
}