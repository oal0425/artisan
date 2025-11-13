import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const viewPath = path.join(__dirname, "../views");
const layoutsPath = path.join(__dirname, "../views/layouts");
const partialsPath = path.join(__dirname, "../views/partials");

export default (app) => {
    app.engine(
        "handlebars",
        engine({
            defaultLayout: "main",
            layoutDir:layoutsPath,
            partialsDir: partialsPath,
        })
    );
    app.set("view engine", "handlebars");
    app.set("views", viewPath);
};