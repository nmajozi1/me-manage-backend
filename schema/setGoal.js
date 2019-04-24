import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SetGoalSchema = new Schema({
    goal:       {type: String, required: true, default:''},
    amount:     {type: Number, required: true, default: 0},
    purchased:    {type: Boolean, required: true, default: false}
})

module.exports = mongoose.model('goal', SetGoalSchema);