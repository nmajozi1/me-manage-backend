import mongoose from 'mongoose';
import config from '../config/config.json';

exports.CreateConnection = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(config.mongo.local, { useNewUrlParser: true }, (error, data) => {
            if(error) {
                return reject({code:"01", "message":"Failed to connect", data: error});
            } else {
                return resolve({code: "00", message:"successful connection", data: data});
            }
        }) 
    })
}