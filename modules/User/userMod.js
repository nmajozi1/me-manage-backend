import userDBAccess from './userDBAccess';
import log4js from 'log4js';
const logger = log4js.getLogger('User Model');

logger.level = 'debug';

exports.CreateUser = (userData) => {

    return new Promise((resolve, rejects) => {

        userDBAccess.CreateUser(userData).then(response => { return resolve(response);}).catch(error => {return rejects(error);});

    })

}

exports.FindAllUsers = () => {

    return new Promise((resolve, rejects) => {

        userDBAccess.FindAllUsers().then(response => {return resolve(response);}).catch(error => {return rejects(error);});
        
    })

}

exports.login = (userData) => {

    return new Promise((resolve, rejects) => {

        userDBAccess.login(userData).then(response => { return resolve(response) }).catch(error => { return rejects(error)});
        
    })

}

exports.deleteUser = (userData) => {

    return new Promise((resolve, rejects) => {

        userDBAccess.deleteUser(userData).then(response => { return resolve(response) }).catch(error => { return rejects(error)});

    })

}

exports.updateUser = (userData) => {

    return new Promise((resolve, reject) => {

        userDBAccess.updateUser(userData).then(response => { console.log('RESPONSE IN MODULE: ', response);return resolve(response); }).catch(error => { return reject(error) });

    });

}