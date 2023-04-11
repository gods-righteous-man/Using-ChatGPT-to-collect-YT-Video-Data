const express = require("express");
const router = express.Router();
const Model = require("../models/model");



//
router.route("/added").post((req, res)=>{
    const name = req.body.name;
    const data = req.body.data;
    const newData = new Model({
        name,
        data
    });
    
    newData.save();
})


module.exports = router;