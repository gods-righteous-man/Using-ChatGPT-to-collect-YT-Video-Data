const mongoose = require("mongoose");

const data_schema = {
    name: String,
    data: String,
}

const model = mongoose.model("reviews", data_schema);

module.exports = model;