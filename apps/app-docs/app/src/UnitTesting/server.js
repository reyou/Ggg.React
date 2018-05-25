const appPort = 3005;
const express = require("express");
const app = express();
const opn = require("opn");
var path = require("path");
var bodyParser = require("body-parser");
app.listen(appPort, function() {
  console.log("Unit test server started at:", "http://localhost:" + appPort);
  app.get("/:fileName", function(req, res) {
    res.sendFile(path.join(__dirname + `/${req.params.fileName}`));
  });
});
