import Artisan from "../database/models/artisan.model.js";
import {getAll, getById} from "../services/location.service.js";

export const getLocations = async (req, res) =>{
    const locations = await getAll();
    res.render("locations", { layout: "locationDashboard", title:"Localidades de los valles", locations});
};

export const getLocationById = async (req, res) =>{
    const location = await getById(req.params.id);
    res.render("locationDetails", {title:location.name, location});
};


export const getLocationByParamsId = async (req, res) =>{
    const location = await getById(req.params.id);
    if(!location){
        return res.status(404).render("404", {title:"404"});    
    }
    const artisans = await Artisan.find({ location: location._id}).populate("location").lean();
    res.render("locationDetails", {layout: "locationDashboard", title:location.name, location, artisans});
};
