import express from "express";
import { registerUser, loginUser, secret } from "../controllers/authController.js";

const router = express.Router();

// middlewares
import { requireSignin, isAdmin } from "../middlewares/auth.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
// testing
router.get("/secret", requireSignin, isAdmin, secret);

export default router;
