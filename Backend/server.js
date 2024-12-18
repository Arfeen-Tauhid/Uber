const http = require('http');
const app = require('./app');
const { initializeSocket } = require('./socket');
const port = process.env.PORT || 8000; // Changed port to match the PORT in .env file

const server = http.createServer(app);

initializeSocket(server);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});