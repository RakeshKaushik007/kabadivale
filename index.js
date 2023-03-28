import express, { json } from 'express';
import cors from 'cors';

const port = 5000;


import './db/config';
import User, { findOne, updateOne } from './db/User';
import Product from "./db/Product";
const app = express();


app.use(json());
app.use(cors());

app.get("/", (req, res)=>{
    res.send("Server is up");
})

app.post('/register', async (req, res)=>{
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.pass;
    delete result.cpass;
    res.send(result);
});

app.post("/login", async (req, res)=>{
    if(req.body.pass && req.body.email){
        let user = await findOne(req.body).select("-pass").select("-cpass");
        if(user){
            res.send(user);
        }
        else{
            res.send({result : "No User Found"});
        }
    }
    else{
        res.send({result : "No User Found"});
    }
});

app.put("/book-scrapper", async (req, res)=>{
    let user = await findOne({ _id : req.body._id}).select("-pass").select("-cpass");
    let date = req.body.date;
    let product = req.body.productName;
    if(user["book-scrapper"]){  console.log("exist"); user["book-scrapper"][date] = product; }
    else{ console.log("not exist"); user["book-scrapper"] = {date: product};  }
    let result = await updateOne(
        {_id : req.body._id},
        {$set : {name : "aumi"}}
    );
    res.send(result);
    console.log("Booked a Scrapper");
    console.log(user);
});


app.listen(80, '0.0.0.0');