const express= require("express");
const multer=require("multer");
const app=express();

const uploader= multer({
    storage:multer.diskStorage({
        destination: function(req,file,cb){
            cb(null,"uploads")
        },
        filename:function(req,file,cb){
            let extArray = file.mimetype.split("/");
            let extension = extArray[extArray.length - 1];
            cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
        }
    })
}).single("user_file")

app.post("/upload", uploader, (req,res)=>{
    res.send("file upload");
});

app.listen(5000,()=>{
    console.log("port 5000 is running")
})