import express from 'express';
import {getAllAPILocations, getNumberAPILocations} from '../services/location.service.js';
import {getAllAPIArtisans, getNumberAPIArtisans} from '../services/artisan.service.js';
import {getAllAPIProducts, getNumberAPIProducts} from '../services/product.service.js';
const router = express.Router();


router.get("/locationsApi", getNumberAPILocations);
router.get("/artisansApi", getNumberAPIArtisans);
router.get("/productsApi", getNumberAPIProducts);

export default router;