import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    description: String,
    region: String,
    image: String
});

const Location = mongoose.model("Location", locationSchema);
export default Location;