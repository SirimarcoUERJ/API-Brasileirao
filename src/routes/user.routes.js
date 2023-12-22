import express  from "express";
import userController from "../controllers/user.controller.js";
import middlewares from "../middlewares/global.middlewares.js";

const router = express.Router();

router.post("/", userController.create);
router.get("/", userController.findAll);
router.get("/:id", middlewares.validId, middlewares.checkUser, userController.findById);
router.patch("/:id", middlewares.validId, middlewares.checkUser, userController.updateById);
router.delete("/:id", middlewares.validId, middlewares.checkUser, userController.deleteById);
// router.delete("/", userController.deleteOne);

export default router;