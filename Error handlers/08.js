// mongoose error handler

app.use((err, req, res, next)=>{
    console.log(err.name);
    // ValidationError
    // CastError
});

// ----------------------------------------------------------

// we can modify the name of the error 
app.use((err, req, res, next)=>{
    console.log(err.name);
    if(err.name === "ValidationError"){
        console.log("This was a validation error. Please follow rules.");
    }
    next(err);
})


// ----------------------------------------------------------

const handleValidationError = (err) =>{
    console.log("This was a validation error. Please follow rules.");
    console.dir(err);  // display the full error
    console.dir(err.message) // only display error message
    return err;
}

app.use((err, req, res, next)=>{
    console.log(err.name);
    if(err.name === "ValidationError"){
        err = handleValidationError(err);
    }
    next(err);
})

