import Artisan from "../database/models/artisan.model.js";
import { getAll, getById } from "../services/artisan.service.js";

export const getAllArtisans = async (req, res) => {
  const artisans = await getAll();
  res.render("artisans", { title: "Nuestros Artesanos", artisans });
};

export const getArtisanById = async (req, res) => {
  const artisan = await getById(req.params.id);
  res.render("artisanDetails", { title: artisan.name, artisan });
};

export const getArtisanByParamsId = async (req, res) => {
  const artisan = await getById(req.params.id);
  if (!artisan) {
    return res.status(404).render("404", { title: "404" });
  }
  const artisanWithProducts = await Artisan.findById(artisan._id)
    .populate("products")
    .lean();

  res.render("artisanDetails", {
    layout: "artisanDashboard",
    title: artisan.name,
    artisan: artisanWithProducts,
    products: artisanWithProducts.products,
  });
};
