//import syntax is important as it helpd to implement the type safety.
import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const app = express();

app.post('/api/v1/signup',(req,res)=>{

})
app.post('/api/v1/signin',(req,res)=>{
    
})
app.post('/api/v1/content',(req,res)=>{
    
})
app.get('/api/v1/content',(req,res)=>{
    
})
app.delete('/api/v1/content',(req,res)=>{
    
})
app.post('/api/v1/brain/share',(req,res)=>{
    //share the content with the link
})
app.get('/api/v1/brain/:shareLink',(req,res)=>{
    //Fetch another user's shared brain content and can access it via link
})
