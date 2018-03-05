const http = require('html');
const fs = require('fs');

function renderHTML(path, res) {
    fs.readFile(path, null, function(err, data) {
        if (err) {
            res.status(404).send('File not found!');
        } else {
            res.send(data);
        }
        res.end();
    });
}

module.exports = {
    handleRequest: function(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        const path = url.parse(req.url).pathname;
        switch (path) {
            case '/':
                renderHTML('./index.html');
                break;
            case '/form':
                renderHTML('./form.html');
                break;
            default:
                res.status(404).send('Route is not defined!');
                res.end();
        }
    }
};
