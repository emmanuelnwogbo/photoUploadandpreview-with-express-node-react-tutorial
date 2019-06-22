import express from 'express';
import multer from 'multer';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello express')
});

const upload = multer({
  limits: {
    fileSize: 1000000 //set up file size limit in bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg\png)$/)) {
      return cb(new Error('Please upload a pdf'))
    }

    cb(undefined, true);
    //cb(new Error('File must be a pdf'));
    //cb(undefined, true);
  }
});

router.post('/upload', upload.single('upload'), (req, res) => {
  console.log(req.file);
  console.log(req.file.buffer)
  //req.user.avatar = req.file.buffer;
  console.log(req)
  res.json(req.file.buffer.toString('base64'))
});

router.get('/photo', (req, res) => {
  res.send()
})

export default router;