import { dirname } from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

/**
 *
 * @param {*} file
 * @param {string} type
 * @return {boolean} true || false
 */
export const checkFileType = (file, type = "img") => {
  switch (type) {
    case "img":
      checkImage(file);
      break;

    default:
      break;
  }
};

/**
 * @param {*} file
 * @param {int} size
 * @return {boolean} true || false
 */
export const checkFileSize = (file, size = 500000) => {
  return file > size;
};

/**
 *
 * @param {*} file
 * @returns
 */
const checkImage = (file) => {
  return (
    file.mimetype != "image/gif" &&
    file.mimetype != "image/png" &&
    file.mimetype != "image/jpeg" &&
    file.mimetype != "image/bmp" &&
    file.mimetype != "image/webp"
  );
};

/**
 * Rename the file
 * @returns string
 * @eg fileName= 2fdf0bc5-e48e-4dda-88ed-c8f13ad4b4f6.jpeg
 */

export const setFileName = (file) => {
  const fileName = uuidv4() + "." + file.mimetype.split("/")[1];
  return fileName;
};

/**
 * @param {Object} file
 * @param {string} path
 * @param {string} fileName
 * @return {void}
 */
export const saveFile = (file, folder = "../uploads", fileName) => {
  try {
    // Set actual path
    const __dirname = dirname(fileURLToPath(import.meta.url));

    // Check if a path exist
    // check if directory exists
    const path = `${__dirname}/${folder}`;

    fs.access(path, (err) => {
      console.log(err);
      if (err) throw new Error("Directory does not exist");
    });

    fs.writeFile(`${path}/${fileName}`, file.buffer, function (err) {
      if (err) console.log(err);
      console.log("The file was saved!");
    });
  } catch (error) {
    return error;
  }
};
