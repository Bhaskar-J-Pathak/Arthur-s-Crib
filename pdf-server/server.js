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


// const express = require('express');
// const cors = require('cors');
// const path = require('path');

// const app = express();

// app.use(cors());

// // Serve the PDF file
// app.get('/pdf', (req, res) => {
//   const pdfPath = path.join(__dirname, 'public', 'resume1.pdf');
//   res.sendFile(pdfPath);
// });

// module.exports = app;
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

// Serve the PDF file
app.get('/pdf', (req, res) => {
  console.log('Received request to /pdf');
  
  // Set CORS headers (allow any origin for testing, consider setting a specific origin in production)
  res.header('Access-Control-Allow-Origin', '*');
  
  const pdfPath = path.join(__dirname, 'public', 'resume1.pdf');
  
  // Log the resolved path
  console.log('Resolved PDF path:', pdfPath);

  // Check if the file exists
  if (require('fs').existsSync(pdfPath)) {
    // Send the PDF file
    res.sendFile(pdfPath);
  } else {
    // If the file doesn't exist, send a 404 response
    console.error('PDF file not found');
    res.status(404).send('PDF file not found');
  }
});

module.exports = app;

