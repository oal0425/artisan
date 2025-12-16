import Location from '../database/models/location.model.js';

export const getAll = async () =>{
    try{
        return await Location.find().lean();
    } catch(error){
        console.error("Error to fetch the locations: ", error);
    }
}

export const getAllAPI = async (req, res) => {
    try{
        const locations = await Location.find();
        res.json(locations);
    } catch(error){
        res.status(500).json({ message: "Error fetching locations" });
    }
}

export const getById = async (id) =>{
    try{
        return await Location.findById(id).lean();
    } catch(error){
        console.error("Error to fetch the location id ", id, " Error: ", error);
    }
}
