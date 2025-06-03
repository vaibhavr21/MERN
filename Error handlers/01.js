// Error handling error
// custom error handler
// req, res, err, next


const express = require("express");
const app = express();

app.use("/random", (req, res, next)=>{
    console.log("I am middleware for /random route.");
    next();
});

app.get("/", (req, res) => {
    res.send("This is the root route.");
});

app.get("/random", (req, res) => {
    res.send("This is the random route.");
});
app.get("/err", (req, res) => {
    abc = abc;
});

app.use((err, req, res, next)=>{
    // console.log(err);
    console.log("--------------Error---------------");
    next(err);
})
app.use((err, req, res, next)=>{
    // console.log(err);
    console.log("--------------Error2---------------");
    next(err);
})

app.use((req, res)=>{
    res.status(404).send("Page not found!");
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
})



// next() - passing to next non-error handler middleware
// next(err) - passing to next error handler middleware