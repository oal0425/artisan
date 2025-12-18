import mongoose from "mongoose";

const artisanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: String,
  specialty: String,
  location: {type: mongoose.Schema.Types.ObjectId, ref: "Location"},
  products: [{type: mongoose.Schema.Types.ObjectId, ref: "Product"}]
});

const Artisan = mongoose.model("Artisan", artisanSchema);

export default Artisan;
