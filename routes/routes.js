import user from '../modules/User/userMod'
import express from 'express'
import log4js from 'log4js';
const logger = log4js.getLogger('Routes');

logger.level = 'debug';

const router = express.Router();

router.get('/getUsers', (req, res) => {

    user.FindAllUsers().then(response => {

        res.status(200).send({
            success: true,
            message: 'Succesfull request',
            data: response
        })

    })
    .catch(error => {

        res.status(400).send({
            success: false,
            message: 'Failed to find Users',
            data: error
        })
    });
    
});

router.post('/createUser', (req, res) => {

    const userData = req.body;

    console.log('User Data: ', userData);

    user.CreateUser(userData).then(addedUser => {

        res.status(200).send({
            success: true,
            message: 'Mamma I made it!',
            data: addedUser
        })

    }).catch(error => {

        res.status(400).send({
            success: false,
            message: 'Epic Fail',
            data: error
        })
    })
    
});

router.post('/login', (req, res) => {

    const userData = req.body;

    user.login(userData).then(response => res.status(200).send(response)).catch(error => {res.status(400).send(error)});
});

router.post('/deleteUser', (req, res) => {

    const userData = req.body;

    user.deleteUser(userData).then(response => res.status(200).send(response)).catch(error => {res.status(400).send(error)});
});

module.exports = router;

