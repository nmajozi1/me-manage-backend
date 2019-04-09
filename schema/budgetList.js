import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BudgetListSchema = new Schema({
    item:       {type: String, required: true, default:''},
    amount:     {type: Number, required: true, default: 0},
    payment:    {type: Boolean, required: true, default: false}
})

module.exports = mongoose.model('budget', BudgetListSchema);