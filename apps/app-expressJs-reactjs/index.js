// also check Ggg\Ggg.NodeJs\app-react-first
const express = require("express");
const app = express();
const appPort = 3011;

// http://localhost:3011/
// https://www.youtube.com/watch?v=A71aqufiNtQ
app.get("/", function (req, res) {
    res.sendfile(__dirname + "/views/index.html");
});

app.listen(appPort, function () {
    console.log(`app-expressJs-reactjs started at port ${appPort}.`);
});    