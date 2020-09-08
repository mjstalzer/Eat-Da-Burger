const express = require("express");

const router = express.Router();

const burger = require("../models/burgers");

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render("index" , hbsObj);
    });
});

module.exports = router;