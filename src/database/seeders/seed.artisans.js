import mongoose from "mongoose";
import connection from '../connection.js';
import Location from "../models/location.model.js";
import Product from "../models/product.model.js";
import Artisan from "../models/artisan.model.js";
import { faker } from '@faker-js/faker';


const selecRandomProducts = (products) => {
    if (!products || products.length === 0){
        return [];
    }

    const artisanProducts = [];
    for (let j = 0; j < 5; j++){
        const randomIndex = Math.floor(Math.random() * products.length);
        artisanProducts.push(products[randomIndex]);
    }
    return artisanProducts;
}

const generateArtisanObjects = (locations, products, count = 10) =>{
    if (!locations || locations.length === 0){
        console.error("No locations found, cannot generate artisans");
        return [];
    }

    const newArtisans = [];
    for (let i = 0; i < count; i++){
        const randomLocationIndex = Math.floor(Math.random() * locations.length);
        const randomLocation = locations[randomLocationIndex];

        const artisanProducts = selecRandomProducts(products);
        const artisan = {
            name: faker.person.fullName(),
            specialty: faker.person.jobTitle(),
            location: randomLocation._id,
            products: artisanProducts.map(p => p._id),
        };
        newArtisans.push(artisan);
    }
    return newArtisans;
}

/* 
const randomProducts = (products) => {
  const artisanProducts = [];
  for (let j = 0; j < 5; j++) {
    const randomProduct = products[Math.floor(Math.randon() * products.length)];
    artisanProducts.push(randomProduct);
  }
  return randomProducts;
};
const generateArtisans = (locations, products) => {
  for (let i = 0; i < 10; i++) {
    const randomLocation =
      locations[Math.floor(Math.random() * locations.length)];
    const artisanProducts = randomProducts(products);

    const artisan = new Artisan({
      name: faker.person.fullName(),
      specialty: faker.person.jobTitle(),
      location: randomLocation._id,
      products: artisanProducts,
    });
    console.log("✅✅ Artisan created ✅✅");
  }
}; */

export const seedArtisans = async () =>{
    let locations;
    let products;
    let artisansToInsert = [];

    try{
        
        //await connection.connectToDB();
        
        locations = await Location.find().select("_id");
        products = await Product.find().select("_id");
        if (locations.length === 0 || products.length === 0){
            console.warn("Skipping seeding: No locations or Products were found in the DB.");
            return;
        }

        artisansToInsert = generateArtisanObjects(locations,products, 10);
        console.log(`✅ ${artisansToInsert.length} Artisans generated and ready to insert`);
        await Artisan.deleteMany();
        const result = await Artisan.insertMany(artisansToInsert);
        console.log("✅✅ Artisans seeding completed✅✅");
        console.log(`✅ Artisans seeding completed: ${result.length} new Artisans inserted ✅`);
        
    } catch(error){
        console.error("❌❌ Error seeding artisans: ❌❌ ", error);
    } finally{
        if (mongoose.connection.readyState === 1){
            await mongoose.connection.close();
            console.log("Database connection closed. ");
        }
    }
};