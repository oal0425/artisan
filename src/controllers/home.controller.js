export const getHome = (req, res) => {
    res.render('home', {title:"Bienvenido a Artisans"});
};

export const getAbout = (req, res) =>{
    res.render('about', {title: "About Artisans"});
};

