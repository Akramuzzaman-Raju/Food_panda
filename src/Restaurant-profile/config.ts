// multer.config.ts
import { diskStorage } from 'multer';
import { extname } from 'path';

export const multerStorage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Define the destination directory for uploaded files
  },
  filename: (req, file, cb) => {
    const randomName = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = extname(file.originalname);
    cb(null, `${randomName}${extension}`);
  },
});
