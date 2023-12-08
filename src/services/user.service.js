const User = require("../models/User");

const createService = (body) => {
    return User.create(body)
};

const findAllService = () => {
    return User.find();
};

const findByIdService = (id) => {
    return User.findById(id);
};

const findByEmailService = (email) => {
    return User.find({ email });
};

const updateByIdService = (id, parameter) => {
    return User.findOneAndUpdate({_id: id}, parameter);
};

const deleteByIdService = (id) => {
    return User.deleteOne({"_id": id});
}

module.exports = {
    createService,
    findAllService,
    findByIdService,
    findByEmailService,
    updateByIdService,
    deleteByIdService
};