import {getAll} from "../services/artisans.service.js";

export const getAllArtisans = async (req, res) =>{
    const artisans = await getAll();
    res.render('artisans', {title:"Nuestros Artesanos", artisans});
};