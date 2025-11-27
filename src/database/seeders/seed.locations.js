import mongoose from 'mongoose';
import connection from '../connection.js';
import Location from '../models/location.model.js';
import { faker } from '@faker-js/faker';

const generateLocations = () =>{
    const locations = [];
    for (let i=0; i<50; i++){
        const location = {
            name: faker.location.city(),
            description: faker.company.catchPhrase(),
            region: faker.location.county()
        }
        locations.push(location);
    };
    return locations;
}

export const seedLocations = async () =>{
    try{
        //await connection.connectToDB();
        await Location.deleteMany();
        const locations = generateLocations();
        await Location.insertMany(locations);
        console.log("✅✅ Locations seeded successfully");
    } catch(error){
        console.error("❌❌ Error seeding locations: ", error);
        mongoose.connection.close();
    }
}