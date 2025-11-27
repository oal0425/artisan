import { seedLocations } from "./seed.locations.js";
import { seedArtisans } from "./seed.artisans.js";
import { seedProducts } from "./seed.products.js";
import connection from "../connection.js";

const seedModels = async () => {
  try {
    await connection.connectToDB();
    await seedLocations();
    await seedProducts();
    await seedArtisans();
  } catch (error) {
    await mongoose.connection.close();
    console.log("Database connection closed. ");
  }
};

seedModels();
