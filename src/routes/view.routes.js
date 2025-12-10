import {Router} from "express";
import viewControllers from "../controllers/view.controller.js";

const router = Router();

router.get("/", viewControllers.getHome);
router.get("/about", viewControllers.getAbout);


export default router;