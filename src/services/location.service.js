import Location from '../database/models/location.model.js';

export const getAll = async () =>{
    return await Location.find().lean();
}

export const getById = async (id) =>{
    return await Location.findById(id).lean();
}
