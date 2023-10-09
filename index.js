const http = require("http");
const server = http.createServer((request, response)=> {
    response.end ("<h1>Hello Node!!!!</h1>\n");
});
server.listen (3000, () => {
    console.log ("listening to port 3000");
});
