var express = require('express');
var app = express();
var port = 3010;
var path = require("path");


app.use('/', express.static(path.join(__dirname, '')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/intro.html'));
});

app.listen(port, () => {
    console.log("listening on port %s", port);
    console.log("Press CTRL-C to stop\n");
})

