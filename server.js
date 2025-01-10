const http = require("http");
const modules = require("./modules");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    const usersData = modules.file();
    res.write(usersData);
    res.end();
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
 