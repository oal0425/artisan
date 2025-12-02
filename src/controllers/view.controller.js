//import viewServices from "../services/view.service.js";

const getHome = (req, res) => {
    res.render('home', {title:"Bienvenido a ruraq maki -- Hecho a mano"});
};

const getAbout = (req, res) =>{
    res.render('about', {title: "About ruraq maki"});
};

const viewControllers = {
    getHome,
    getAbout
};

export default viewControllers;