import type { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from '../../lib/cloudconfig';
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false, // Disables Next.js's default body parser to handle file uploads
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'File parsing error' });
    }

    const file = files.file as formidable.File;

    try {
      const result = await cloudinary.uploader.upload(file.filepath, {
        resource_type: 'auto',
      });
      return res.status(200).json({ url: result.secure_url });
    } catch (error) {
      return res.status(500).json({ error: 'Cloudinary upload failed' });
    } finally {
      fs.unlinkSync(file.filepath); // Cleanup the temporary file
    }
  });
};
