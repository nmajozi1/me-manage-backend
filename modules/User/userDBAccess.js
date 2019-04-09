import User from '../../schema/users';
import log4js from 'log4js';
import { resolve } from 'path';
import { rejects } from 'assert';
const logger = log4js.getLogger('User DB Access');

logger.level = 'debug';

exports.CreateUser = (userData) => {
    return new Promise((resolve, rejects) => {
        User.findOne({email: userData.email}, (error, docs) => {
            if(!error, docs) {

                logger.debug('DOCS: ', docs);

                return resolve({success: false, message: 'User already exists', data: docs});

            } else {

                let user = new User({
                    name: userData.name,
                    email: userData.email,
                    password: userData.password,
                    username: userData.username,
                    surname: userData.surname
                });
                
                user.save((saveErr, saveDocs) => {
                    if(!saveErr && saveDocs) {

                        return resolve({success: true, message: 'User saved successfully', data: saveDocs});

                    } else {

                        return rejects({success: false, message: 'Failed to save the use', data: saveErr});

                    }
                });
            }
        })
    })
}

exports.FindAllUsers = () => {

    return new Promise((resolve, rejects) => {

        User.find((error, docs) => {
            if(!error && docs) {

                return resolve({success: true, message: 'Found all users', data: docs});
    
            } else {
    
                return rejects({success: false, message: 'Failed to find the users', data: error});

            }
        })

    })

}

exports.login = (userData) => {

    return new Promise((resolve, rejects) => {

        User.findOne({username: userData.username}, (error, docs) => {
            if(!error && docs) {

                if(docs.password === userData.password) {

                    return resolve({success: true, message: 'Success, found user', data: docs});

                } else {

                    return rejects({success: false, message: 'Invalid password.'});
                }
                
            } else {

                return rejects({success: false, message: 'Invalid username.', data: error})

            }
        });

    });

}