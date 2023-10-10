if(process.env.NODE_ENV!=="production"){
    require("dotenv").config()
}
const express=require("express")
const Mongoose= require("mongoose")
const  methodOverride=require("method-override")
const blogRouter=require("./routes/blogRouter")
let app=express()
//register template
app.set("view engine","ejs")
//mongodb connection
async function db(){
    await Mongoose.connect(process.env.MONGODB_URI)
    console.log("mongodb connected");
}
db()
app.use(express.static("public"))
//method override
app.use(methodOverride('_method'))
//inbuilt middleware
app.use(express.urlencoded({extended:false}))
//router middleware
app.use(blogRouter)
//error page middleware
app.use((req,res)=>{
    res.render("404")
})
app.listen(process.env.PORT,(err)=>{
    if(err)console.log(err);
    console.log(`server is running on port${process.env.PORT}`);
})