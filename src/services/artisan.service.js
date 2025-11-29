import Artisan from '../database/models/artisan.model.js';

export const getAll = async () =>{
    return await Artisan.find().lean();
}

export const getById = async (id) =>{
    return await Artisan.findById(id).lean();
}