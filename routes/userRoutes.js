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
 
 import {uploadProfil} from "../controllers/uploadController.js";
 
 const router = express.Router();
 
 const upload = multer();

// auth
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


router.post("/upload", upload.single("file"), uploadProfil);

export default  router;
