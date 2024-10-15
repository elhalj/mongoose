const mongoose = require("mongoose")

//creation de schema
const personneSchema = mongoose.Schema({
    nom: String,
    age: Number,
    platFavories: {
        type:[String]
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});

//creation de model
const personneModel = mongoose.model("personnes",personneSchema)
//exportation du modules de model
module.exports = personneModel