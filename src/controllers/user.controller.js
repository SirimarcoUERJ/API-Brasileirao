import userService from "../services/user.service.js";

const create = async (req, res) => {
    try {
        const { name, nick, email, password, avatar } = req.body;
        let checkPassword = false;
        const userUnique = await userService.findByEmailService(email);

        if (userUnique.length > 0) {
            return res.status(400).send({ "message": "This email already exists in the Database" });
        };

        if (password && password.length >= 8 && password.length <= 50) {
            checkPassword = true;
        };

        if (!email || !checkPassword) {
            return res.status(400).send({ "message": "Complete all fields correctly" });
        };

        const user = await userService.createService(req.body);


        if (!user) {
            return res.status(400).send({ "message": "We had a problem, Please try again" });
        };

        res.status(201).send({
            "message": "User was created succesfully",
            "user": {
                id: user.id_,
                name,
                nick,
                email,
                avatar,
            },
        });
    } catch (err) {
        res.status(400).send({ "message": "We had a problem creating a new user, Please try again" })
        console.log(err);
    };
};

const findAll = async (req, res) => {
    try {
        const user = await userService.findAllService();

        if (!user) {
            return res.status(400).send({ message: "There are no registered users" });
        };

        res.status(200).send(user);
    } catch (err) {
        res.status(400).send({ "message": "We had a problem finding users, Please try again" })
        console.log(err);
    };
};

const findById = async (req, res) => {
    try {
        const id = req.id;
        const user = req.user;

        if (!user) {
            return res.status(400).send({ message: "User not found" });
        }

        res.status(200).send(user);
    } catch (err) {
        res.status(400).send({ "message": "We had a problem finding a user, Please try again" })
        console.log(err);
    };
};

const updateById = async (req, res) => {
    try {
        const id = req.id;
        const parameter = req.body;

        // if (parameter.email) {
        //     const userUnique = await userService.findByEmailService(parameter.email);

        //     if (userUnique.length > 0) {
        //         return res.status(400).send({ "message": "This email already exists in the Database" });
        //     };
        // };

        await userService.updateByIdService(id, parameter);

        res.status(200).send({
            message: "User successfully updated"
        });
    } catch (err) {
        res.status(400).send({ "message": "We had a problem updating a user, Please try again" })
        console.log(err);
    };
};

const deleteById = async (req, res) => {
    try {
        const id = req.id;

        await userService.deleteByIdService(id);

        res.status(200).send({ "message": "User has been deleted" });
    } catch (err) {
        res.status(400).send({ "message": "We had a problem deleting users, Please try again" })
        console.log(err);
    };
};
//     const parameter = req.body;

//     const user = await userService.findService(parameter);

//     if (!user[0] || user[0] == "") {
//         return res.status(400).send({ message: "User not found" });
//     };

//     await userService.deleteOneService(user[0]);

//     res.status(200).send({ "message": "User has been deleted" });
// };

export default {
    create,
    findAll,
    findById,
    updateById,
    deleteById,
};