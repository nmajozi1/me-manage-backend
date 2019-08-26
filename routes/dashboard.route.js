import dashboard from '../modules/dashboard/dashboard.mod';
import express  from 'express';
import log4js   from 'log4js';
const logger = log4js.getLogger('Routes');

logger.level = 'debug';

const router = express.Router();

router.get('/getDashboard', (req, res) => {

    dashboard.getDashboard().then(response => {

        res.status(200).send(response)

    })
    .catch(error => {

        res.status(400).send(error)

    });

});

router.post('/createDashboard', (req, res) => {

    console.log('Request: ', req.body);

    dashboard.createDashboard(req.body).then(response => {

        res.status(200).send(response);

    })
    .catch(error => {

        res.status(400).send(error);

    })

});

router.post('/updateDashboard', (req, res) => {

    dashboard.updateDashboard(req.body).then(response => {

        res.status(200).send(response);

    })
    .catch(error => {

        res.status(400).send(error)

    })

})

module.exports = router;