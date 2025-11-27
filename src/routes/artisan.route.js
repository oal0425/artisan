import express from 'express';
import { getAllArtisans, getArtisanById} from '../controllers/artisan.controller.js';

const router = express.Router();

router.get("/", getAllArtisans);
router.get("/:id", getArtisanById);

export default router;