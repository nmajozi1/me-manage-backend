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

exports.deleteUser = (userData) => {

    return new Promise((resolve, rejects) => {

        User.remove({usernae: userdata.username}, (error, docs) => {

            if(!error && docs) {

                return resolve({
                    success: true,
                    message: 'User removed successfully',
                    data: docs
                });

            } else {

                return rejects({
                    success: false,
                    message: 'Failed to remove the user',
                    data: error
                })

            }
        });
    });
}

exports.updateUser = (userData) => {

    console.log('Do we make it here? DB ACCESS: ', userData);

    return new Promise((resolve, reject) => {

        User.findOne({username: userData.username}, (error, docs) => {

            if(!error && docs) {

                docs.name = userData.name;
                docs.surname = userData.surname;
                docs.email = userData.email;
                docs.username = userData.username;
                docs.password = userData.password;
                docs.role = userData.role;

                docs.save({}, (saveError, saveDocs) => {

                    if (!saveError && saveDocs)
                        return resolve({success:true, message: 'User has been updated successfully', data: saveDocs});

                    return reject({success: false, message: 'Failed to update the user', data: saveError});

                });

            } else {

                return reject({success: false, message: 'User ' + userData.email + ' not found, please register the user first', data: error});

            }

        });
    })
}