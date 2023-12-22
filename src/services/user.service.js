import User from "../models/User.js";

const createService = (body) => {
    return User.create(body)
};

const findAllService = () => {
    return User.find();
};

const findByIdService = (id) => {
    return User.findById(id);
};

const updateByIdService = (id, parameter) => {
    return User.findOneAndUpdate({_id: id}, parameter);
};

const deleteByIdService = (id) => {
    return User.deleteOne({"_id": id});
}

export default {
    createService,
    findAllService,
    findByIdService,
    // findByEmailService,
    updateByIdService,
    deleteByIdService
};