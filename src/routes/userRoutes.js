import express from "express";
import userController from "../controller/userAccountController.js";

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.authorization);
router.delete("/user/:id", userController.deleteUser);
router.get("/user/:id", userController.getUser);
router.put("/user/:id", userController.updateUser);

export default router;
