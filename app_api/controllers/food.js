const mongoose = require("mongoose");

const Food = mongoose.model("Food");
const getFoods = (req, res) => {
    Food.find().exec((err, foodData) => {
        if(err) {
            res.status(404).json(err);
            return;
        }
        res.status(200).json(foodData);
    });
};

const createFood = (req, res) => {
    Food.create({
        name: req.body.name,
        type: req.body.type
    }, (err, foodData) => {
        if(err) {
            res.status(400).json(err);
            return;
        } else {
            res.status(201).json(foodData);
        }
    });
};

const getSingleFood = (req, res) => {
    Food.findById(req.params.foodid).exec((err, foodData) => {
        if(!foodData) {
            return res.status(404).json({
                "message": "food not found"
            });
        } else if(err) {
            return res.status(404).json(err);
        }
        res.status(200).json(foodData);
    })
};

const updateFood = (req, res) => {
    if(!req.params.foodid) {
        res.status(404).json({
            "message": "Not found, foodid is required"
        });
        return;
    }
    Food.findById(req.params.foodid)
        .exec((err, foodData) => {
            if(!foodData) {
                res.json(404).status({
                    "message": "foodid not found"
                });
                return;
            } else if(err) {
                res.status(400).json(err);
                return;
            }
            foodData.name = req.body.name;
            foodData.type = req.body.type;
            foodData.save((err, foodData) => {
                if(err) {
                    res.status(404).json(err);
                } else { 
                    res.status(200).json(foodData);
                }
            });
        });
};

const deleteFood = (req, res) => {
    const foodid = req.params.foodid;
    if(foodid) {
        Food.findByIdAndRemove(foodid).exec((err, foodData) => {
            if(err) {
                res.status(404).json(err);
                return;
            }
            res.status(204).json(null);
        })
    } else {
        res.status(404).json({
            "message": "no foodid"
        });
    }
};

module.exports = {
    getFoods,
    createFood,
    getSingleFood,
    updateFood,
    deleteFood
};