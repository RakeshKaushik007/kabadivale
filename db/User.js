const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname : String,
    lname : String,
    email : String,
    phone : String,
    pass: String,
    cpass : String, 
    type : String,
});

module.exports = mongoose.model('users', userSchema);