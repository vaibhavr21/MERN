// Handling Asynchronous Errors
//  next(new customError(404, "Chat not found"));

//new show route 
app.get("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let chat = await chat.findById(id);
  if (!chat) {
    next(new customError(404, "Chat not found"));
  }
  res.render("edit.ejs", { chat });
});