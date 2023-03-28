import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    fname : String,
    lname : String,
    email : String,
    phone : String,
    pass: String,
    cpass : String, 
    type : String,
});

export default model('users', userSchema);