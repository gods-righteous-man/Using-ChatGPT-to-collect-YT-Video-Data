const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());


//connect to mongoose
mongoose.connect("mongodb+srv://gaurav:gauravgaurav@cluster0.n260lpe.mongodb.net/yt_database");

console.log("hello");
//require route
app.use("/", require("./routes/ModelRoute"));


app.listen(3001, function () {
    console.log("Server running on port 3001")
})