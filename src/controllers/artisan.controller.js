import {getAll} from "../services/artisan.service.js";

export const getAllArtisans = async (req, res) =>{
    const artisans = await getAll();
    res.render('artisans', {title:"Nuestros Artesanos", artisans});
};

export const getArtisanById = async (req, res) =>{
    const artisan = await getById(req.params.id);
    res.render('artisanDetails', {title:artisan.name, artisan});
}