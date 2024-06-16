const express=require('express')
const app=express()
const connectDB=require('./db/dbConnection')
const User=require('./db/user')
const  port = 8000;
const cors = require('cors');
app.use(cors());

//Middleware for parsing json
app.use(express.json());


//Registration
app.post('/register',async (req,res) =>{
    try{
        const {username,password}=req.body;
        const user=new User({username,password});
        await user.save();
        console.log(req.body);
        res.status(201).json({success: true,message:"Registration Successful"})
    }
    catch(error){
        res.status(500).json({success: false,error:'Registration failed '});
    }
})

app.post('/login',async(req,res)=>{
    try {
        const {username,password}=req.body;
        const user=await User.findOne({username});
        if(!user){
            return res.status(401).json({ success: false, error: 'Invalid username or password' });
        }
        else if(user.password!==password){
            return res.status(401).json({ success: false, error: 'Invalid password' });
        }
        res.status(200).json({ success: true, message: 'Login Successful' });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Login failed' })
    }
})

connectDB();
app.listen(port,()=>{
    console.log("listening on port:8000")
})