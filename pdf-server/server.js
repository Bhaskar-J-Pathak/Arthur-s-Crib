// const express = require('express');
// const cors = require('cors');
// const path = require('path');

// const app = express();
// const port = process.env.PORT || 3001;

// // Enable CORS for all routes
// app.use(cors());

// // Serve the PDF file
// app.get('/pdf', (req, res) => {
//   const pdfPath = path.join(__dirname, 'public', 'resume1.pdf');
//   res.sendFile(pdfPath);
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

// Serve the PDF file
app.get('/pdf', (req, res) => {
  const pdfPath = path.join(__dirname, 'public', 'resume1.pdf');
  res.sendFile(pdfPath);
});

module.exports = app;

