import * as fs from 'fs';
import * as FormData from 'form-data';
import * as path from 'path';

static multipleFileUpload = async (
    imgData: any,
    location: string,
  ): Promise<string[]> => {
    const dbSaveFileNames: string[] = [];
    const fileArray = Array.isArray(imgData) ? imgData : [imgData];
    for (const file of fileArray) {
      try {
        if (!file?.originalname || !file?.buffer) {
          throw new Error('Invalid image data.');
        }

        const buffer = Buffer.isBuffer(file.buffer)
          ? file.buffer
          : Buffer.from(file.buffer, 'base64');

        const extension = file.originalname.slice(
          file.originalname.lastIndexOf('.'),
        );
        const safeFilename = `${Date.now()}${extension}`;
        const dir = path.join(__dirname, '../../test', 'files');
        const filepath = path.join(dir, safeFilename);

        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(filepath, buffer);

        const formData: any = new FormData();
        formData.append('dir_path', `assets/${location}`);
        formData.append('file', fs.createReadStream(filepath));

        const resp = await axios.post(this.FILE_UPLOAD_SERVICE_URL, formData, {
          headers: {
            ...formData.getHeaders(),
            'Content-Type': 'multipart/form-data',
          },
        });

        const uploadedKey = resp.data?.data?.Key || '';
        dbSaveFileNames.push(uploadedKey);

        if (file.originalname && fs.existsSync(filepath)) {
          fs.unlinkSync(filepath);
          console.log('Temporary file deleted:', file.originalname);
        }
      } catch (err) {
        console.error('File upload failed for:', file.originalname, err);
      }
    }

    return dbSaveFileNames;
  };
