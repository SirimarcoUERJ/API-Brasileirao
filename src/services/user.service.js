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

const updateOneService = (user, parameter) => {
    const keys = Object.keys(parameter);
    const values = Object.values(parameter);
    
    for (let _ = 0; _ < keys.length; _++) {
        user[keys[_]] = values[_]
    };

    user.save();

    return user;
};

const deleteOneService = (user) => {
    return User.deleteOne({"_id": user._id});
}

module.exports = {
    createService,
    findService,
    findByIdService,
    updateOneService,
    deleteOneService
};