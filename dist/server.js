"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>Home</h1>");
        res.end();
        return;
    }
    if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>About</h1>");
        res.end();
        return;
    }
    if (req.url === "/my-account") {
        res.writeHead(403, { "content-type": "text/plain" });
        res.write("You have no access to this page");
        res.end();
        return;
    }
    res.writeHead(404, { "content-type": "text/plain" });
    res.write("Page not found");
    res.end();
});
const PORT = 5003;
server.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});
