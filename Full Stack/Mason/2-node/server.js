const http = require("http");
//express

const fs = require("fs"); //file system
const path = require("path");

const homePage = fs.readFileSync(path.join(__dirname, "home.html"));

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.write("about me");
    res.end();
    return;
  }
  if (req.url === "/home") {
    res.write(homePage);
    res.end();
    return;
  }
  res.write("hello");
  res.end();
});

server.listen(3000);
