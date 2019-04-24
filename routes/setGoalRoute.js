import express from 'express';
import log4js from 'log4js';
import goal from '../modules/goal/setGoalMod';

const logger = log4js.getLogger('Set Goal Route');

logger.level = 'debug';

const router = express.Router();

router.get('/getGoals', (req, res) => {

    goal.getGoals().then(response => res.status(200).send(response)).catch(error => res.status(400).send(error));

});

router.post('/createGoals', (req, res) => {
    const goalData = req.body;

    goal.createGoals(goalData).then(response => res.status(200).send(response)).catch(error => res.status(400).send(error));

});

router.post('/updateGoals', (req, res) => {

    const goalData = req.body;

    goal.updateGoal(goalData).then(response => res.status(200).send(response)).catch(error => res.status(400).send(error));
    
});

router.post('/deleteGoals', (req, res) => {

    const goalData = req.body;

    goal.deleteGoals(goalData).then(response => res.status(200).send(response)).catch(error => res.status(400).send(error));

});

module.exports = router;