const express=require("express")
const app=express()

app.get('/home', (req, res,next) => {
{
    console.log("middleware is working");
    next()
}  
app.use(middleWare)
app.get("/",(req,res)=>{
    res.send("<h1>Home</h1>")
}
)
res.send('welcome to home');
});