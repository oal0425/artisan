import express from 'express';
import {getAllAPILocations} from '../services/location.service.js';
import {getAllAPIArtisans} from '../services/artisan.service.js';
import {getAllAPIProducts} from '../services/product.service.js';
const router = express.Router();


router.get("/locationsApi", getAllAPILocations);
router.get("/artisansApi", getAllAPIArtisans);
router.get("/productsApi", getAllAPIProducts);

export default router;