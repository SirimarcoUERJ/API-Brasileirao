const User = require("../models/User");

const createService = (body) => {
    return User.create(body)
};

const findService = (parameter) => {
    return User.find(parameter)
};

const findByIdService = (id) => {
    return User.findById(id);
};

module.exports = {
    createService,
    findService,
    findByIdService,
};