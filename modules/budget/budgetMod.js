import budgetDB from './budgetDBAccess';
import log4js from 'log4js';
import { resolve } from 'path';
import { rejects } from 'assert';
const logger = log4js.getLogger('Budget Module');

exports.addBudget = (budgetData) => {

    return new Promise((resolve, rejects) => {

        budgetDB.CreateBudget(budgetData).then(response => { return resolve(response); }).catch(error => { return rejects(response);});

    });

}

exports.getBudgetList = () => {

    return new Promise((resolve, rejects) => {

        budgetDB.GetBudgetList().then(response => { return resolve(response)}).catch(error => { return rejects(error)});

    });
    
}