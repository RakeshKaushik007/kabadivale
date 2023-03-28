const express = require('express');
const cors = require('cors');

const port = 5000;


require('./db/config');
const User = require('./db/User');
const Product = require("./db/Product");
const app = express();


app.use(express.json());
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
        let user = await User.findOne(req.body).select("-pass").select("-cpass");
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
    let user = await User.findOne({ _id : req.body._id}).select("-pass").select("-cpass");
    let date = req.body.date;
    let product = req.body.productName;
    if(user["book-scrapper"]){  console.log("exist"); user["book-scrapper"][date] = product; }
    else{ console.log("not exist"); user["book-scrapper"] = {date: product};  }
    let result = await User.updateOne(
        {_id : req.body._id},
        {$set : {name : "aumi"}}
    );
    res.send(result);
    console.log("Booked a Scrapper");
    console.log(user);
});


app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});