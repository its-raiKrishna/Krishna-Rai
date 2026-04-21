const http = require("http");

// create server
const server = http.createServer((req, res) => {
    res.write("Server running successfully on port 8080");
    res.end();
});

// listen on port 8080
server.listen(8080, () => {
    console.log("Server running at http://localhost:8080");
});
