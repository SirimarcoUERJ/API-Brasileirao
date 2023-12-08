const route = require("express").Router();
const userController = require("../controllers/user.controller");
const middlewares = require("../middlewares/global.middlewares");

route.post("/", userController.create);
route.get("/", userController.findAll);
route.get("/:id", middlewares.validId, middlewares.checkUser, userController.findById);
route.patch("/:id", middlewares.validId, middlewares.checkUser, userController.updateById);
route.delete("/:id", middlewares.validId, middlewares.checkUser, userController.deleteById);
// route.delete("/", userController.deleteOne);

module.exports = route;