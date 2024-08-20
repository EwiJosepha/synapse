import type { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import cloudinary from '../../lib/cloudconfig';
import { promisify } from 'util';

const storage = multer.memoryStorage();
const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false, // Important to disable body parsing for file uploads
  },
};

const uploadMiddleware = upload.single('file');

const runMiddleware = promisify(uploadMiddleware);

interface CloudinaryUploadResult {
  secure_url: string;
  public_id: string;
  version: number;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  bytes: number;
  type: string;
  url: string;
  original_filename: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await runMiddleware(req, res);

    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const uploadResult: CloudinaryUploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: 'auto',
          folder: 'chat-resources',
        },
        (error, result) => {
          if (error) {
            console.error('Cloudinary upload error:', error);
            reject(error);
          } else {
            resolve(result as CloudinaryUploadResult);
          }
        }
      ).end(req.file.buffer);
    });

    res.status(200).json(uploadResult);
  } catch (error) {
    if (error instanceof Error) {
      console.error('File upload error:', error.message);
      res.status(500).json({ error: error.message });
    } else {
      console.error('File upload error:', error);
      res.status(500).json({ error: 'File upload failed' });
    }
  }
};