const mongoose = require("mongoose")

const Box = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    files: [
        //relacionamento => armazenando o id do model File
        {type: mongoose.Schema.Types.ObjectId, ref: "File"}
    ]
}, {
    timestamps: true
})

module.exports = mongoose.model("Box", Box)