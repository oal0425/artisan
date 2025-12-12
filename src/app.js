import express from "express";
import handlebarsConfig from "./config/handlebars.js";
import staticConfig from "./config/static.js";
import conn from "./database/connection.js";
import config from "./database/config.js";

// Routes
import viewRoutes from "./routes/view.routes.js";
import productRoutes from "./routes/product.route.js";
import locationRoutes from "./routes/location.route.js";
import artisanRoutes from "./routes/artisan.route.js";
import apiRoutes from "./routes/api.js";

const app = express();

// AGREGAMOS BOOTSTRAP
// npm install bootstrap
// CONFIGURACIÓN DE ARCHIVOS ESTÁTICOS
app.use("/css", express.static("node_modules/bootstrap/dist/css"));
app.use("/js", express.static("node_modules/bootstrap/dist/js"));

//Routes Used
app.use("/", viewRoutes);
app.use("/products", productRoutes);
app.use("/locations", locationRoutes);
app.use("/artisans", artisanRoutes);
app.use("/api", apiRoutes);

//handlebars configurations
staticConfig(app);
handlebarsConfig(app);

app.use(express.static("src/public"));

const startServer = async () => {
  try {
    await conn.connectToDB();
    app.listen(config.PORT, () => {
      console.log(`Conectando al puerto ${config.PORT}`);
    });
    
  } catch (error) {
    console.error("Error al conectar a la base de datos ", error);
  }
};

async function main() {
  startServer();
}

main();