// normal errors
// asynchronous errors
// try catch errors
// asynwrap - wrap the callback


// function inside return function to a function

// function wrapAsync(fn){
//     return function(req, res, next){
//         fn(req, res, next).catch(err)
//     }
// }

function asyncWrap(fn){
    return function(req, res, next){
        fn(req, res, next).catch((err)=> next(err));
    }
}


//new show route 
app.get("/chats/:id", asyncWrap(async(req, res) => {
  let { id } = req.params;
  let chat = await chat.findById(id);
  if (!chat) {
    next(new customError(404, "Chat not found"));
  }
  res.render("edit.ejs", { chat });
}));



// create post route
app.post("/chats", asyncWrap(async(req, res, next)=>{
        let { from, to , message } = req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            message: message,
            created_at: new Date()
        });
        await newChat.save();
        res.status(201).send("Chat created successfully");
}))