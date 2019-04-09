import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:       {type: String, required: false, default: ''},
    surname:    {type: String, required: false, default: ''},
    email:      {type: String, required: false, default: ''},
    username:   {type: String, required: false, default: ''},
    password:   {type: String, required: false, default: ''},
})

module.exports = mongoose.model('userModel', UserSchema);