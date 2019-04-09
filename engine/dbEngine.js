import mongoose from 'mongoose';

exports.CreateConnection = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect("mongodb://localhost:27017/budget", { useNewUrlParser: true }, (error, data) => {
            if(error) {
                return reject({code:"01", "message":"Failed to connect", data: error});
            } else {
                return resolve({code: "00", message:"successful connection", data: data});
            }
        }) 
    })
}