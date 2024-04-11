const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://127.0.0.1:27017/ayushi_project");
const noteSchema ={
    carMake: {
        type: String,
        required: true
    },
    carModel: {
        type: String,
        required: true
    },
    complaint: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
};
const Note=mongoose.model("Note",noteSchema);
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");

})
app.post("/",function(req,res){
    let newNote=new Note({
        carMake:req.body.carMake,
        carModel:req.body.carMake,
        complaint:req.body.complaint
    });
    newNote.save();
    res.redirect('/');
})
app.listen(3000,function(){
    console.log("server is running on 3000");
})

