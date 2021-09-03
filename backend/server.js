const http = require("http");

const app = require("./app");

app.listen(3000, () => {
  console.log("Serveur à l écoute");
});
