/**
 * All UserRoutes should be set up here
 */
import express from "express";
import multer from "multer";
import { signIn, signUp, logout } from "../controllers/authController.js";
import {
  updateUser,
  deleteUser,
  follow,
  unfollow,
  getAllUsers,
  userInfo,
} from "../controllers/userController.js";

import { uploadProfil } from "../controllers/uploadController.js";

/**
 * TEST ANOTHER MULTER CONFIGURATION
 */
import { uploadProfile } from "../controllers/uploadFilesController.js";

// import upload from "../middleware/up";

const upload = multer();

const router = express.Router();

// authupload
router.post("/register", signUp);
router.post("/login", signIn);
router.get("/logout", logout);

// user DB
router.get("/", getAllUsers);
router.get("/:id", userInfo);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.patch("/follow/:id", follow);
router.patch("/unfollow/:id", unfollow);

// router.post("/upload", upload.single("file"), uploadProfil);

//
router.post("/uploadFiles", upload.single("file"), uploadProfile);

export default router;
