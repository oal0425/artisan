import express from 'express';
import { getAllArtisans, getArtisanById, getArtisanByParamsId} from '../controllers/artisan.controller.js';

const router = express.Router();

router.get("/", getAllArtisans);
router.get("/:id", getArtisanByParamsId);
//router.get("/:id", getArtisanById);
//router.get("/:id", getLocationByParamsId);


export default router;