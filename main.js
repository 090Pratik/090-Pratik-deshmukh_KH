const express = require("express");
const res = require("express/lib/response");
let app = express();
app.use(express.json());

const {addmsg,showmsg} = require("./user");

app.get("/add", async(req,res)=> {

    const list = await showmsg();
    res.json(list);
});


app.post("/show", async(req,res)=> {
    const user = req.body;
    console.log(user);
    await addmsg(user);
    res.json({message:"message updated"});
});


app.listen(4000,()=>{
    console.log("server started");
});    