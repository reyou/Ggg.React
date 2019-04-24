var express = require('express');
var os = require('os');
var ifaces = os.networkInterfaces();
var app = express();
var port = 3010;
var path = require("path");

var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}

app.use(requestTime);
app.use('/', express.static(path.join(__dirname, '')));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/intro.html'));
})



app.listen(port, () => {
    console.log("App is running at http://localhost:%d in %s mode", port, "Local");
    console.log("Press CTRL-C to stop\n");
})

