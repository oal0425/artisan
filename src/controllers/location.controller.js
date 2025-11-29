import {getAll, getById} from "../services/location.service.js";

export const getLocations = async (req, res) =>{
    const locations = await getAll();
    res.render("locations", {title:"Localidades", locations});
};

export const getLocationById = async (req, res) =>{
    const location = await getById(req.params.id);
    res.render("locationDetails", {title:location.name, location});
};
