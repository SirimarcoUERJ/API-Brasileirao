const userService = require("../services/user.service");
const mongoose = require("mongoose");

const create = async (req, res) => {
    const { name, nick, email, password, avatar } = req.body;

    // Verificar se o usuario existe no banco de dados, ainda n estamos conectados em um DB

    check = checker(name, nick, email, password);

    if (!check[0] || !check[1] || !check[2] || !check[3]) {
        return res.status(400).send({ "message": "Complete all fields correctly" });
    };

    const user = await userService.createService(req.body);


    if (!user) {
        res.status(400).send({ "message": "We had a problem, Please try again" })
    }

    res.status(201).send({
        "message": "User was created succesfully",
        "user": {
            id: user.id_,
            name,
            nick,
            email,
            avatar
        }
    });
};

const find = async (req, res) => {
    const parameter = req.body;

    const user = await userService.findService(parameter);

    if (!user || user == "") {
        return res.status(400).send({ message: "User not found" });
    };

    res.status(200).send(user);
};

const findById = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send({ messagem: "Id not Found" })
    };

    const user = await userService.findByIdService(id);

    if (!user) {
        return res.status(400).send({ message: "User not found" })
    }

    res.status(200).send(user)
};

const updateOne = async (req, res) => {
    const id = req.params.id;
    const parameter = req.body;

    if (!mongoose.Types.ObjectId.isValid) {
        return res.status(400).send({ message: "Id not found" })
    };

    const user = await userService.findByIdService(id);

    if (!user) {
        return res.status(400).send({ message: "User not found" })
    };

    await userService.updateOneService(user, parameter);

    res.status(200).send({
        message: "User successfully updated"
    });
};

const deleteOne = async (req, res) => {
    const id = req.params.id;
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({"message": "Id not found"})
    };

    const user = await userService.findByIdService(id);

    if (!user){
        return res.status(400).send({"message": "User not found"});
    }

    await userService.deleteOneService(user);

    res.status(200).send({"message": "User has been deleted"});
};

const deleteOneBySearch = async (req, res) => {
    const parameter = req.body;

    const user = await userService.findService(parameter);

    if (!user[0] || user[0] == "") {
        return res.status(400).send({ message: "User not found" });
    };

    await userService.deleteOneService(user[0]);

    res.status(200).send({"message": "User has been deleted"});
};

const checker = (name, nick, email, password) => {
    const _ = [name, nick, email];
    let filds = [];

    for (let i = 0; i < 3; i++) {
        if (_[i]) {
            filds.push(true);
        } else {
            filds.push(false);
        };
    };

    if (password && password.length >= 8 && password.length <= 50) {
        filds.push(true);
    } else {
        filds.push(false);
    };

    return filds;
};

module.exports = {
    create,
    find,
    findById,
    updateOne,
    deleteOne,
    deleteOneBySearch,
};