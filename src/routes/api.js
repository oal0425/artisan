import express from 'express';
import {getAll} from '../services/location.service.js';
const router = express.Router();


router.get("/locations", getAll);

export default router;