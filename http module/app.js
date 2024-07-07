const http = require("http");

// create a server 
let server = http.createServer(function(request, response){
    if(request.url === "/home"){
        response.write("<h1>This is home page</h1>");
        response.write("<p>Home Page Loading. </p>");
    } else if(request.url === "/about"){
        response.write("This is about page");
    } else if(request.url === "/contact"){
        response.write("This is contact page");
    } else if(request.url === "/admin"){
        response.write("This is admin page");
    }else {
        response.write("404 Not Found");
    }


    response.end();
});

server.on("connection", function(){
    console.log("New Connection");
});

// listening the server 
server.listen(3000, function(){
    console.log("Server is running on port 3000");
});