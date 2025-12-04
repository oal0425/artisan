export const getHome = (req, res) => {
    res.render('home', {title:"Bienvenido a Ruraq Maki"});
};

export const getAbout = (req, res) =>{
    res.render('about', {title: "About Artisans"});
};

