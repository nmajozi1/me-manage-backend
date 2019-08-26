import mongoose from 'mongoose';
import { stringify } from 'querystring';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:       {type: String, required: true, default: ''},
    surname:    {type: String, required: true, default: ''},
    email:      {type: String, required: false, default: ''},
    username:   {type: String, required: true, default: ''},
    password:   {type: String, required: true, default: ''},
    role:       {type: String, required: false, default: 'normal'}       
})

module.exports = mongoose.model('userModel', UserSchema);