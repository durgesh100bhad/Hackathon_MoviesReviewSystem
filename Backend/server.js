const express = require('express')

const app = express();

app.use(express.json())
app.use("/",(req,res)=> {
    res.send("Hello!")
})
app.listen(4100, "localhost", ()=>{
    console.log("Server started at port 4100")
})