// API Token as Query String
// Access token required for data access
// /api  route

// /api?token=giveaccess  it will return data access


const express = require("express");
const app = express();

app.use("/api",(req, res, next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    res.send("ACCESS DENIED!");
});

app.get("/api",(req, res)=>{
    res.send("data")
})

app.use((req, res)=>{
    res.status(404).send("Page not found!");
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
})

// if i go to http://localhost:3000/api?token=giveaccess
// it will return data
// if i go to http://localhost:3000/api?token=wrongtoken
// it will return ACCESS DENIED!