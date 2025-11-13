import express from "express";
import handlebarsConfig from "./config/handlebars.js";
import staticConfig from "./config/static.js";
import conn from "./database/connection.js";
import config from "./database/config.js";

const app = express();

// AGREGAMOS BOOTSTRAP
// npm install bootstrap
// CONFIGURACIÓN DE ARCHIVOS ESTÁTICOS
app.use('/css', express.static('node_modules/bootstrap/dist/css'));
app.use('/js', express.static('node_modules/bootstrap/dist/js'));

//handlebars configurations
staticConfig(app);
handlebarsConfig(app);

const startServer = async () => {
    try{
        await conn.connectToDB();
        app.listen(config.port, () =>{
            console.log(`Conectando al puerto ${config.PORT}`);
        });
    } catch (error){
        console.error("Error al conectar a la base de datos ", error);
        
    }
};

startServer();