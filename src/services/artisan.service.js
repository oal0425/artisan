import Artisan from '../database/models/artisan.model.js';

export const getAll = async () =>{
    return await Artisan.find().lean();
}

export const getAllAPIArtisans = async (req, res) => {
    try{
        const artisans = await Artisan.find();
        res.json(artisans);
    } catch(error){
        res.status(500).json({ message: "Error fetching artisans" });
    }
}

export const getById = async (id) =>{
    return await Artisan.findById(id).lean();
}