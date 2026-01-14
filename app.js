'use strict';

var fs = require('fs');

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('dist'));

app.listen(port, function () {
    console.log(`Serving http://localhost:${port}`);
});

var spec = __dirname + '/dist/specs/swagger.yaml';

app.get('/swagger/edit', function (req, res) {
    res.sendFile(__dirname + '/dist/swagger/edit.html');
});

// Get spec
app.get('/editor/spec', function (req, res) {
    res.send(fs.readFileSync(spec));
});

// Write/Update spec
app.put('/editor/spec', function (req, res) {
    var stream = fs.createWriteStream(spec);

    req.pipe(stream);

    stream.on('finish', function () {
        // console.log("Saved changes.");
        res.send('Saved changes.');
    });
});
