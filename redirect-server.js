import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve the redirect.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'redirect.html'));
});

// Start the server
const port = 12000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Redirect server running at http://localhost:${port}`);
  console.log(`Redirect accessible at https://work-1-qrsolblshsmgtweg.prod-runtime.all-hands.dev`);
});