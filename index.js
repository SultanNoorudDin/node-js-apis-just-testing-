const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.method)
  if (req.url === "/dudu") {
    res.end("protein");
  } else if (req.url === "/nibbi") {
    res.end("dadi g");
  } else if (req.url === "/") {
    res.end("ghar hu...uske :)");
  } else {
    res.end("new bachi found");
  }
});

server.listen(5000, () => {
  console.log("server runs at 5000");
});
