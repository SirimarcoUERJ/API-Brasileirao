const mongoose = require("mongoose");
const userService = require("../services/user.service.js");

const validId = async (req, res, next) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send({ messagem: "Id not Found" })
    };

    next();
};

const checkUser = async (req, res, next) => {
    const id = req.params.id;

    const user = await userService.findByIdService(id);
    
    if (!user) {
        return res.status(400).send({ message: "User not found" })
    };
    
    req.id = id;
    req.user = user;

    next();
};    

module.exports = {
    validId,
    checkUser,
};