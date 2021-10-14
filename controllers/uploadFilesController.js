import UserModel, { setPicture } from "../models/userModel.js";

import { uploadErrors } from "../utils/errorsUtils.js";
import {
  checkFileSize,
  checkFileType,
  saveFile,
  setFileName,
} from "../utils/fileTools.js";

export const uploadProfile = async (req, res) => {
  try {
    if (checkFileType(req.file)) throw Error("invalid file");

    if (checkFileSize(5000)) throw Error("max size");
  } catch (err) {
    const errors = uploadErrors(err);
    return res.status(400).json(errors);
  }

  const fileName = setFileName(req.file);
  try {
    saveFile(req.file, "../uploads/profile", fileName);
  } catch (error) {
    return res.status(400).json(error.message);
  }

  try {
    await setPicture(req.body.userId, "./uploads/profile/" + fileName, res);
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};
