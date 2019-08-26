import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const DashboardSchema = new Schema({
    name:       {type: String, required: true, default: ''},
    description:{type: String, required: true, default: ''},
    path:       {type: String, required: false, default: 'home'},
})

module.exports = mongoose.model('dashboardModel', DashboardSchema);