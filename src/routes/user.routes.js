const route = require("express").Router();
const userController = require("../controllers/user.controller");

route.post("/", userController.create);
route.get("/", userController.find);
route.get("/:id", userController.findById);
route.patch("/:id", userController.updateOne);
route.delete("/:id", userController.deleteOne);
route.delete("/", userController.deleteOneBySearch);

module.exports = route;