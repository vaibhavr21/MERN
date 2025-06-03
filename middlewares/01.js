// middleware ek function hota hai jo request aane ke baad aur response jaane se pehle jo server ka kaam rahega wo karke aage jayega 
// matlab ek intermediate ke jaise kaam karta hai request aur response ke bich mein.

// app.use
// -iska matlab ye hai ki agar koi bhi request aayega to ye chalega 

// middleware ke pass access hota hai (res, req ka) wo data read bhi kar sakte hai
// ye ek chaining bhi kar sakte hai 
// means ek middleware dusre middleware ko pass kar sakta hai fir tisre ko bhi and so on.

// agar middleware ne res send kar diya to specific route pe response nahi jayega 
// because middleware ne hi response send diya. 
// na ki next() function ko call kiya
// agar next function call kiya hota to specific route pe response jata