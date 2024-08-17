import type { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from '../../../lib/cloudconfig';
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false, // Disables Next.js's default body parser to handle file uploads
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err: Error | null, fields: formidable.Fields, files: formidable.Files) => {
    if (err) {
      return res.status(500).json({ error: 'File parsing error' });
    }
    console.log('Parsed files:', files);
    
    const file = files.file as unknown as formidable.File;

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
      const result = await cloudinary.uploader.upload(file.filepath, {
        resource_type: 'auto',
      });
      return res.status(200).json({ url: result.secure_url });
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      return res.status(500).json({ error: 'Cloudinary upload failed' });
    } finally {
      fs.unlinkSync(file.filepath); // Cleanup the temporary file
    }
  });
};
