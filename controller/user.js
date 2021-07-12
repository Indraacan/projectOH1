const { result } = require("lodash")
const Model = require("../models")
const User = Model.User

module.exports = {
    getAllData : (req, res) => {
        User.findAll({})
        .then((result) => res.json (result))
        .catch((err) => {
            throw err;
        })
    },
    createData : (req, res) => {
        User.create({
            name : req.body.name,
            
        })
    }

}