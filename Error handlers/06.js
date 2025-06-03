// Handling Asynchronous Errors
// using try catch block


//create post route

app.post("/chats",async(req, res, next)=>{
    try {
        let { from, to , message } = req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            message: message,
            created_at: new Date()
        });
        await newChat.save();
        res.status(201).send("Chat created successfully");
    } catch (error) {
        next(error);
    }
})