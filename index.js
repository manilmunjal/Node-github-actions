// Import required modules
const http = require('http');

// Define port number
const port = 3000;

// Create a server
const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send response
  res.end('Hello, World!\n');
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
