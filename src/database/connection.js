import mongoose from "mongoose";
import config from "./config.js";

async function connectToDB(){
    try{
        console.log("Connecting to the Database");
        console.log("Database URL: ", config.MONGO_URL);
        await mongoose.connect(config.MONGO_URL);
        console.log("Database connected successfully ✅✅✅✅");
    } catch (error){
        console.error("Error connecting to the database: ❌❌❌❌ ", error);
        process.exit(1); //Exit the process with an error code
    }
};

async function closeConnectionDB(){
    await mongoose.connection.close();
    console.log("Connection Closed 🔐");
};

const connection ={
    connectToDB,
    closeConnectionDB
}

export default connection;