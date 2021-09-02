const http = require("http");

const server = http.createServer();

server.on("request", (request, response) => {
  console.log("requete ok fripon !");
});

server.listen(process.env.PORT || 3000);
