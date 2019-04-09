import budgetMod from '../modules/budget/budgetMod';
import express from 'express';
import log4js from 'log4js';
const logger = log4js.getLogger('Budget Route');

const router = express.Router();

logger.level = 'debug';

router.get('/findAll', (req, res) => {
    
    budgetMod.getBudgetList().then(response => res.status(200).send(response)).catch(error => res.status(400).send(error));

});

router.post('/addBudget', (req, res) => {

    const budgetData = req.body;

    budgetMod.addBudget(budgetData).then(response => res.status(200).send(response)).catch(error => res.status(400).send(error));

});

router.post('/updateBudget', (req, res) => {

});

router.post('/deleteBudget', (req, res) => {

});

router.get('/findSingleBudget', (req, res) => {

});

module.exports = router;