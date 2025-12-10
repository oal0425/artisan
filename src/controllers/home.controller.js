import locationsService from '../services/location.service.js';
export const getHome = (req, res) => {
    const locations = locationsService.getAll();
    res.render('home', {title:"Bienvenido a Ruraq Maki"}, {locations});
};

export const getAbout = (req, res) =>{
    res.render('about', {title: "About Artisans"});
};

