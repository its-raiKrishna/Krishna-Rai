const http = require("http");


const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.write(`Server running on port ${PORT}`);
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
