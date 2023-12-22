import User from "../models/User.js";
import jwt from "jsonwebtoken";

const findByEmailService = (email) => {
    return User.findOne({ email }).select("+password");
};

const tokenGenerator = (id) => {
    return jwt.sign({ id }, process.env.SECRET_JWT, { expiresIn: 604800 })
};

export default {
    findByEmailService,
    tokenGenerator
};

