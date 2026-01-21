import express from 'express';
import { getLocations, getLocationById, getLocationByParamsId} from '../controllers/location.controller.js';

const router = express.Router();

router.get("/", getLocations);
router.get("/:id", getLocationByParamsId);


export default router;
