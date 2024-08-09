const express = require('express');
const multer = require('multer');
const { spawn } = require('child_process');
const path = require('path');
const app = express();
const port = 5000;  // Use a different port if 5173 is in use

const upload = multer({ dest: 'uploads/' });

app.post('/predict', upload.single('image'), (req, res) => {
  const pythonProcess = spawn('python', ['./predict.py', req.file.path]);
 
    pythonProcess.stdout.on('data', (data) => {
      console.log(`stdout: ${data.toString()}`);
      res.send(data.toString());
    });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  pythonProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
