import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
    id : {
        type : String,
        unique : true,
        requried : true
    },
    title : {
        type : String,
        required : true,
        unique : true
    },
    description : String
})

const Cards = mongoose.model('cards',CardSchema);
export default Cards;
