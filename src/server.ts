import http from "http";

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
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
  }
);

const PORT: number = 5003;
server.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
