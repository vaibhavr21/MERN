const express = require("express");
const app = express();


// logger - morgan
app.use((req, res, next)=>{
    req.time = new Date(Date.now());
    console.log("Request received at:", req.time);
    //console.log(req)
    console.log(req.method, req.hostname, req.path);
    next();
})

app.get("/", (req, res) => {
    res.send("This is the root route.");
});
app.get("/random", (req, res) => {
    res.send("This is the random route.");
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
})



// if we write middleware after the routes then middleware will not run for those routes and easily access to that routes

// Server is running on port 3000.
// Request received at: 2025-06-02T14:59:27.012Z
// OPTIONS localhost /random
// Request received at: 2025-06-02T14:59:27.033Z
// GET localhost /random