const http = require('http');
const url = require('url');
const server = http.createServer(
    (request, response) => {
        const parsedUrl = url.parse(request.url, true);
        if (parsedUrl.pathname === '/add') {
            response.setHeader("Content-Type", "text/plain");
            if (parsedUrl.query !== {}){
                const query = parsedUrl.query;
                const sum = parseFloat(query["a"]) + parseFloat(query["b"]);
                response.end(sum.toString())
            }
            else{
                response.end('Hello!\n');
            }
        }
        else if (parsedUrl.pathname === "/subtract"){
            response.setHeader("Content-Type", "text/plain");
            if (parsedUrl.query !== {}){
                const query = parsedUrl.query;
                const sum = parseFloat(query["a"]) - parseFloat(query["b"]);
                response.end(sum.toString())
            }
            else{
                response.end("Hello!\n")
            }
        }
        else {
            response.statusCode = 404;
            response.end('Not found!\n');
        }
    }
);
server.listen(8080);