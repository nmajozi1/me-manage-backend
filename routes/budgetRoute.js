import budgetMod from '../modules/budget/budgetMod';
import express from 'express';
import log4js from 'log4js';
const logger = log4js.getLogger('Budget Route');

const router = express.Router();

logger.level = 'debug';

router.get('/getBudgetList', (req, res) => {
    
    budgetMod.getBudgetList().then(response => res.status(200).send(response)).catch(error => res.status(400).send(error));

});

router.post('/addBudget', (req, res) => {

    const budgetData = req.body;

    budgetMod.addBudget(budgetData).then(response => res.status(200).send(response)).catch(error => res.status(400).send(error));

});

router.post('/updateBudget', (req, res) => {
    const budgetData = req.body;

    budgetMod.updateBudget(budgetData).then(response => res.status(200).send(response)).catch(error => res.status(400).send(error));
});

router.post('/deleteBudget', (req, res) => {
    const budgetData = req.body;

    budgetMod.deleteBudget(budgetData).then(response => res.status(200).send(response)).catch(error => res.status(400).send(error));
});

router.get('/findSingleBudget', (req, res) => {

});

router.post('/updatePayment', (req, res) => {
    const budgetData = req.body;

    budgetMod.updatePayment(budgetData).then(response => res.status(200).send(response)).catch(error => res.status(400).send(error));
    
});

module.exports = router;