import express from 'express';
import {getAllAPI} from '../services/location.service.js';
const router = express.Router();


router.get("/locationsApi", getAllAPI);

export default router;