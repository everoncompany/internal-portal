const express = require('express');
const dotenv = require('dotenv');
const http = require('http');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Node.js app');
});

function checkPort(port) {
  return new Promise((resolve, reject) => {
    const server = http.createServer();
    server.listen(port, () => {
      server.close(() => resolve(port));
    });
    server.on('error', () => reject(port));
  });
}

async function startServer() {
  try {
    const availablePort = await checkPort(port);
    app.listen(availablePort, () => {
      console.log(`Application started on port ${availablePort}`);
    });
  } catch (error) {
    console.log(`Port ${port} is already in use, trying port 3001...`);
    const availablePort = await checkPort(3001);
    app.listen(availablePort, () => {
      console.log(`Application started on port ${availablePort}`);
    });
  }
}

startServer();
