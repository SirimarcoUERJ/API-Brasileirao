import loginService from "../services/login.service.js";
import bcrypt from "bcrypt";

const auth = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await loginService.findByEmailService(email);

        if(!user){
            return res.status(404).send({ message: "User or password is wrong" })
        };

        const truePassword = await bcrypt.compare(password, user.password) || password == user.password;

        if (!truePassword) {
            return res.status(404).send({ message: "User or password is wrong" });
        }

        res.send(loginService.tokenGenerator(user.id))
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

export default {
    auth
};