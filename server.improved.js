const http = require("http"),
      fs = require("fs"),
      mime = require("mime"),
      dir = "public/",
      port = 3000;

const scores = [];

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/results") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(scores));
    } else {
      handleGet(req, res);
    }
  } else if (req.method === "POST" && req.url === "/submit") {
    handlePost(req, res);
  } else if (req.method === "DELETE" && req.url.startsWith("/delete/")) {
    handleDelete(req, res);
  }
});

const handleGet = (req, res) => {
  const filename = dir + (req.url === "/" ? "index.html" : req.url.slice(1));
  sendFile(res, filename);
};

const handlePost = (req, res) => {
  let dataString = "";

  req.on("data", chunk => dataString += chunk);

  req.on("end", () => {
    try {
      const data = JSON.parse(dataString);
      console.log("Received:", data);

      const clicksPerSecond = data.score / 10;

      scores.push({
        name: data.name,
        score: data.score,
        clicksPerSecond: clicksPerSecond
      });

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Score saved");
    } catch (e) {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("Invalid JSON");
    }
  });
};

const handleDelete = (req, res) => {
  const parts = req.url.split("/");
  const index = parseInt(parts[2]);

  if (!isNaN(index) && index >= 0 && index < scores.length) {
    scores.splice(index, 1);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Score deleted");
  } else {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Invalid index");
  }
};

const sendFile = (res, filename) => {
  fs.readFile(filename, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end("404 Error: File Not Found");
    } else {
      res.writeHead(200, { "Content-Type": mime.getType(filename) });
      res.end(content);
    }
  });
};

server.listen(process.env.PORT || port, () => {
  console.log("Server running on port", port);
});
