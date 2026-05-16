// import multer from "multer";

// import {
//   CloudinaryStorage,
// } from "multer-storage-cloudinary";

// import cloudinary
// from "../config/cloudinary.js";


// const storage =
//   new CloudinaryStorage({

//     cloudinary,

//     params: async (
//       req,
//       file
//     ) => ({

//       folder:
//         "portfolio_projects",

//       format:
//         file.mimetype.split("/")[1],

//       public_id:
//         Date.now() +
//         "-" +
//         file.originalname,
//     }),
//   });


// const upload =
//   multer({
//     storage,
//   });
// export default upload;

import multer from "multer";

import { CloudinaryStorage }
from "multer-storage-cloudinary";

import cloudinary
from "../config/cloudinary.js";


const storage =
  new CloudinaryStorage({

    cloudinary,

    params: async (
      req,
      file
    ) => {

      return {

        folder:
          "portfolio_projects",

        format:
          "png",

        public_id:
          Date.now() +
          "-" +
          file.originalname,
      };
    },
  });


const upload =
  multer({
    storage,
  });

export default upload;