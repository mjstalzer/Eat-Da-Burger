const express = require("express");

const router = express.Router();

const burger = require("../models/burgers");

router.get("/", (req, res) => {
    burger.selectAll(data => {
        const hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render("index" , hbsObj);
    });
});

router.post("/api/burgers", (req,res) => {
    burger.add("name", [req.body.name], result => {
        res.json({ id: result.insertId });
    })
})

router.put("/api/burgers/:id" , (req,res) => {
    burger.update([req.params.id], result => {
        res.json({ id: result.insertId })
    })
})

module.exports = router;